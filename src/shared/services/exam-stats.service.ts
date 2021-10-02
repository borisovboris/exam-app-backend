import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExamStatuses, QuestionTypes } from 'src/core/enums';
import { SessionChoice } from 'src/database/entities/session-choice.entity';
import { Session } from 'src/database/entities/session.entity';
import { StudentAnswer } from 'src/database/entities/student-answer.entity';
import { StudentChoice } from 'src/database/entities/student-choice.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ExamStatsService {
    constructor
        (
            @InjectRepository(Session)
            private readonly sessionRepository: Repository<Session>,
            @InjectRepository(StudentAnswer)
            private readonly studentAnswerRepository: Repository<StudentAnswer>,
            @InjectRepository(StudentChoice)
            private readonly studentChoiceRepository: Repository<StudentChoice>,
            @InjectRepository(SessionChoice)
            private readonly sessionChoiceRepository: Repository<SessionChoice>
        ) { }

    public async getExamPoints(studentExamId: number, sessionId: number): Promise<any> {
        let totalEarnedPoints: number = 0;
        let totalMaxPoints: number = 0;

        const session = await this.sessionRepository
            .findOne({ id: sessionId },
                { relations: ["sessionQuestions", "sessionQuestions.questionType"] }
            );

        for (const sessionQuestion of session.sessionQuestions) {
            totalMaxPoints += sessionQuestion.maxPoints;

            if (sessionQuestion.questionType.type === QuestionTypes.Open) {
                const studentAnswer = await this.studentAnswerRepository
                    .createQueryBuilder('studentAnswer')
                    .leftJoin('studentAnswer.studentExam', 'studentExam')
                    .where('studentExam.id = :stid', { stid: studentExamId })
                    .leftJoin('studentAnswer.sessionQuestion', 'sessionQuestion')
                    .andWhere('sessionQuestion.id = :sqid', { sqid: sessionQuestion.id })
                    .getOne();

                if (studentAnswer) {
                    totalEarnedPoints += studentAnswer.earnedPoints;
                }
            } else if (sessionQuestion.questionType.type === QuestionTypes.Closed) {
                const studentChoices = await this.studentChoiceRepository
                    .createQueryBuilder('studentChoice')
                    .select(['studentChoice', 'sessionChoice.id'])
                    .leftJoin('studentChoice.studentExam', 'studentExam')
                    .where('studentChoice.studentExam = :seid', { seid: studentExamId })
                    .leftJoin('studentChoice.sessionQuestion', 'sessionQuestion')
                    .andWhere('studentChoice.sessionQuestion = :sqid', { sqid: sessionQuestion.id })
                    .leftJoin('studentChoice.sessionChoice', 'sessionChoice')
                    .getMany();

                let studentChoicesIds = studentChoices.map(element => {
                    return element.sessionChoice.id;
                });

                const correctChoices = await this.sessionChoiceRepository
                    .createQueryBuilder('sessionChoice')
                    .select(['sessionChoice.id'])
                    .leftJoin('sessionChoice.sessionQuestion', 'sessionQuestion')
                    .where('sessionChoice.sessionQuestion = :sqid', { sqid: sessionQuestion.id })
                    .andWhere('sessionChoice.isCorrect = :value', { value: 1 })
                    .getMany();

                const correctChoicesIds = correctChoices.map(element => {
                    return element.id;
                });

                if (studentChoicesIds.length === correctChoicesIds.length) {
                    const matchingChoices = correctChoicesIds.every(element => {
                        return studentChoicesIds.includes(element);
                    });

                    if (matchingChoices) {
                        totalEarnedPoints += sessionQuestion.maxPoints;
                    }
                }

            }

        }

        return { totalEarnedPoints, totalMaxPoints };

    }

    public getExamStatus(startTime: Date, endTime: Date): ExamStatuses {
        let status: ExamStatuses = ExamStatuses.InProgress;

        const currentTime = new Date();
        const examStartTime = startTime;
        const examClosingTime = endTime;

        if (currentTime < examStartTime) {
            status = ExamStatuses.NotStarted;
        } else if (currentTime > examClosingTime) {
            status = ExamStatuses.Closed;
        }

        return status;
    }

}
