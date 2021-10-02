import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentAnswer } from 'src/database/entities/student-answer.entity';
import { StudentChoice } from 'src/database/entities/student-choice.entity';
import { StudentAnswerRepository } from 'src/database/repositories/student-answer.repository';
import { StudentChoiceRepository } from 'src/database/repositories/student-choice.repository';
import { StudentExamRepository } from 'src/database/repositories/student-exam.repository';
import { Repository } from 'typeorm';
import { StudentExam } from '../../database/entities/student-exam.entity';
import { ExamStatuses, Occupations } from 'src/core/enums';
import { QuestionTypes } from 'src/core/enums';
import { ExamStatsService } from 'src/shared/services/exam-stats.service';

@Injectable()
export class StudentExamService {

    constructor
        (
            @InjectRepository(StudentExamRepository)
            private readonly studentExamRepository: Repository<StudentExam>,
            @InjectRepository(StudentAnswerRepository)
            private readonly studentAnswerRepository: Repository<StudentAnswer>,
            @InjectRepository(StudentChoiceRepository)
            private readonly studentChoiceRepository: Repository<StudentChoice>,
            private readonly examStatsService: ExamStatsService
        ) { }

    public async getStudentExam(studentExamId): Promise<StudentExam> {
        const studentExam = await this.studentExamRepository
        .createQueryBuilder('studentExam')
        .select([
            'studentExam.id', 
            'student.username', 
            'student.facultyNumber', 
            'session.name',
            'session.startTime',
            'session.endTime'
        ])
        .where('studentExam.id = :seid', { seid: studentExamId })
        .leftJoin('studentExam.session', 'session')
        .leftJoin('studentExam.student', 'student')
        .getOne();

        return studentExam;
    }

    public async getStudentExamQuestions(studentExamId: number, occupation: Occupations): Promise<any> {
        const exam = await this.studentExamRepository
            .createQueryBuilder('studentExam')
            .select(['studentExam.id', 'session'])
            .where('studentExam.id = :seid', { seid: studentExamId })
            .leftJoin('studentExam.session', 'session')
            .leftJoinAndSelect('session.sessionQuestions', 'sessionQuestion')
            .leftJoinAndSelect('sessionQuestion.questionType', 'questionType')
            .leftJoinAndSelect('sessionQuestion.sessionChoices', 'sessionChoice')
            .getOne();

        const session = exam.session;
        const questions = [];

        if (occupation === Occupations.Student) {
            const status = this.examStatsService.getExamStatus(session.startTime, session.endTime);
            if (status !== ExamStatuses.InProgress) {
                return null;
            }
        }

        for (const sessionQuestion of session.sessionQuestions) {
            if (sessionQuestion.questionType.type === QuestionTypes.Open) {
                const studentAnswer = await this.studentAnswerRepository
                    .createQueryBuilder('studentAnswer')
                    .innerJoin('studentAnswer.sessionQuestion', 'sessionQuestion')
                    .where('studentAnswer.sessionQuestion = :sqid', { sqid: sessionQuestion.id })
                    .innerJoin('sessionQuestion.questionType', 'questionType')
                    .innerJoin('studentAnswer.studentExam', 'studentExam')
                    .andWhere('studentAnswer.studentExam = :seid', { seid: exam.id })
                    .getOne();


                questions.push(
                    {
                        id: sessionQuestion.id,
                        title: sessionQuestion.title,
                        type: QuestionTypes.Open,
                        maxPoints: sessionQuestion.maxPoints,
                        earnedPoints: occupation === Occupations.Teacher ? studentAnswer?.earnedPoints : null,
                        studentAnswerId: studentAnswer?.id,
                        studentAnswerText: studentAnswer?.text,
                    }
                );

            } else if (sessionQuestion.questionType.type === QuestionTypes.Closed) {
                const choices = [];
                let numCorrectChoices = 0;
                for (const sessionChoice of sessionQuestion.sessionChoices) {
                    if (sessionChoice.isCorrect) {
                        numCorrectChoices++;
                    }

                    const studentChoice = await this.studentChoiceRepository
                        .createQueryBuilder('studentChoice')
                        .innerJoin('studentChoice.sessionQuestion', 'sessionQuestion')
                        .where('studentChoice.sessionQuestion = :sqid', { sqid: sessionQuestion.id })
                        .innerJoin('studentChoice.studentExam', 'studentExam')
                        .andWhere('studentChoice.studentExam = :seid', { seid: exam.id })
                        .innerJoin('studentChoice.sessionChoice', 'sessionChoice')
                        .andWhere('sessionChoice.id = :scid', { scid: sessionChoice.id })
                        .getOne();

                    choices.push({
                        sessionChoiceId: sessionChoice.id,
                        text: sessionChoice.text,
                        answered: Boolean(studentChoice),
                        isCorrect: occupation === Occupations.Teacher ? sessionChoice.isCorrect : null
                    });

                }

                questions.push({
                    id: sessionQuestion.id,
                    title: sessionQuestion.title,
                    type: QuestionTypes.Closed,
                    numCorrectChoices,
                    maxPoints: sessionQuestion.maxPoints,
                    choices
                });

            }
        }

        return questions;
    }

}
