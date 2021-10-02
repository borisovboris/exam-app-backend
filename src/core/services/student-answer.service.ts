import { Injectable, Logger, Session } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { StudentAnswer } from "src/database/entities/student-answer.entity";
import { Repository } from "typeorm";

@Injectable()
export class StudentAnswerService {

    constructor
        (
            @InjectRepository(StudentAnswer)
            private readonly studentAnswerRepository: Repository<StudentAnswer>,
    ) { }
    // assessAnswer() takes the id of the student answer that a teacher wants to assess
    // and the points the teacher rewards the answer with. If such a student answer exists,
    // the earned points are assigned to it and the answer is saved back in the database.
    // The earned points of the answer cannot be a negative number and cannot be more than the max points of the session question it answers to.
    //
    public async assessAnswer(earnedPoints: number, studentAnswerId: number): Promise<void> {
        if(!earnedPoints) {
            return;
        }
        
        const studentAnswer = await this.studentAnswerRepository.findOne({ id: studentAnswerId },
            { relations: ["sessionQuestion"] }
        );

        if (studentAnswer) {
            const maxPointsPossible = studentAnswer.sessionQuestion.maxPoints;
            if (earnedPoints >= 0 && earnedPoints <= maxPointsPossible) {
                studentAnswer.earnedPoints = earnedPoints;
                await this.studentAnswerRepository.save(studentAnswer);
            } 
        }
    }

    public async giveAnswer(studentAnswerText: string, studentExamId: number, sessionQuestionId: number): Promise<void> {

        const studentAnswer = await this.studentAnswerRepository
            .createQueryBuilder('studentAnswer')
            .innerJoin('studentAnswer.sessionQuestion', 'sessionQuestion')
            .where('studentAnswer.sessionQuestion = :sqid', { sqid: sessionQuestionId })
            .innerJoin('studentAnswer.studentExam', 'studentExam')
            .andWhere('studentAnswer.studentExam = :seid', { seid: studentExamId })
            .getOne();

        if (studentAnswer) {
            
            studentAnswer.text = studentAnswerText.trim();
            await this.studentAnswerRepository.save(studentAnswer);
        } else {
            const studentExam = { id: studentExamId };
            const sessionQuestion = { id: sessionQuestionId };

            await this.studentAnswerRepository.save(
                Object.assign(new StudentAnswer(), {
                    studentExam,
                    sessionQuestion,
                    text: studentAnswerText.trim(),
                    earnedPoints: 0
                })
            );
        }
    }

    // when a student casts their text (student answer) to an open question of a particular session, it is first checked
    // if such answer already exists. If one already exists, the new text is assigned to
    // the student answer and it is saved back in the database.
    // If not, a new student answer with the text is created and saved in the database.
    //  trim() removes all the white spaces before and after a string. 

}