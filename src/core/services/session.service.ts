import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {  Repository } from 'typeorm';
import { Exam } from '../../database/entities/exam.entity';
import { Session } from '../../database/entities/session.entity';
import { Teacher } from '../../database/entities/teacher.entity';
import { Subject } from '../../database/entities/subject.entity';
import { Student } from '../../database/entities/student.entity';
import { StudentExam } from '../../database/entities/student-exam.entity';
import { ExamStatsService } from 'src/shared/services/exam-stats.service';
import { SessionQuestion } from '../../database/entities/session-question.entity';
import { SessionChoice } from '../../database/entities/session-choice.entity';
import { QuestionTypes } from '../enums';

@Injectable()
export class SessionService {

    constructor
        (
            @InjectRepository(Session)
            private readonly sessionRepository: Repository<Session>,
            @InjectRepository(Exam)
            private readonly examRepository: Repository<Exam>,
            @InjectRepository(Subject)
            private readonly subjectRepository: Repository<Subject>,
            @InjectRepository(Teacher)
            private readonly teacherRepository: Repository<Teacher>,
            @InjectRepository(Student)
            private readonly studentRepository: Repository<Student>,
            @InjectRepository(StudentExam)
            private readonly studentExamRepository: Repository<StudentExam>,
            @InjectRepository(SessionQuestion)
            private readonly sessionQuestionRepository: Repository<SessionQuestion>,
            @InjectRepository(SessionChoice)
            private readonly sessionChoiceRepository: Repository<SessionChoice>,
            private readonly examStatsService: ExamStatsService
        ) { }

    public async createSession(body: any, userId: any): Promise<void> {
        const { name, subjectId, examId, studentIds, startTime, endTime } = body;
        const subject = await this.subjectRepository.findOne({ id: subjectId });
        const teacher = await this.teacherRepository.findOne({ id: userId })

        const session = await this.sessionRepository.save(
            Object.assign(new Session(),
                {
                    name,
                    startTime: new Date(startTime),
                    endTime: new Date(endTime),
                    teacher,
                    subject
                })
        );

        const exam = await this.examRepository
            .createQueryBuilder('exam')
            .where('exam.id = :eid', { eid: examId })
            .leftJoinAndSelect('exam.questions', 'question')
            .leftJoinAndSelect('question.questionType', 'questionType')
            .leftJoinAndSelect('question.choices', 'choice')
            .getOne();

        for (const question of exam.questions) {
            const sessionQuestion = await this.sessionQuestionRepository.save(
                Object.assign(new SessionQuestion(), {
                    title: question.title,
                    questionType: question.questionType,
                    maxPoints: question.maxPoints,
                    session
                })
            );

            if (question.questionType.type === QuestionTypes.Closed) {
                for (const choice of question.choices) {
                    await this.sessionChoiceRepository.save(
                        Object.assign(new SessionChoice(), {
                            text: choice.text,
                            isCorrect: choice.isCorrect,
                            sessionQuestion
                        })
                    );
                }
            }
        }

        for (const studentId of studentIds) {
            const student = await this.studentRepository.findOne({ id: studentId });

            await this.studentExamRepository.save(
                Object.assign(new StudentExam(), {
                    student,
                    session
                })
            );
        }

    }

    // get session details for teacher, with only each student exam's overall results -
    // maxpoints and earnedpoints

    public async getSessionStudentExams(sessionId: number): Promise<any> {
        const studentExams = await this.studentExamRepository
        .createQueryBuilder('studentExam')
        .select(['studentExam.id', 'student.username', 'student.facultyNumber'])
        .leftJoin('studentExam.session', 'session')
        .where('session.id = :sid', { sid: sessionId })
        .leftJoin('studentExam.student', 'student')
        .getMany();

        const processedExams = [];

        for (let studentExam of studentExams) {
            const { totalEarnedPoints, totalMaxPoints } =
                await this.examStatsService.getExamPoints(studentExam.id, sessionId);

                processedExams.push({
                totalEarnedPoints,
                totalMaxPoints,
                id: studentExam.id,
                student: {
                    id: studentExam.student.id,
                    username: studentExam.student.username,
                    facultyNumber: studentExam.student.facultyNumber
                }
            });

        }

        return processedExams;
    }

    public async getSession(sessionId: number): Promise<Session> {
        const session = await this.sessionRepository
        .createQueryBuilder('session')
        .select(['session.id', 'session.name', 'session.startTime', 'session.endTime', 'teacher.username'])
        .where('session.id = :sid', { sid: sessionId })
        .leftJoin('session.teacher', 'teacher')
        .getOne();

        return session;
    }

}
