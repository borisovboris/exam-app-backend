import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentChoice } from '../../database/entities/student-choice.entity';

@Injectable()
export class StudentChoiceService {
    constructor
        (
            @InjectRepository(StudentChoice)
            private readonly studentChoiceRepository: Repository<StudentChoice>,
    ) { }

    /* a student choice represents a particular student's decision that a 
    session choice of a closed session question is correct */
    /* When a student checks a choice of a closed question to be correct,
    this action is saved in the form of a student choice which refers to
    the session choice that is checked, the session question this session choice belongs to, and the student exam the student choice is part of*/
    /* Later when the student unchecks this session choice because they think is not correct,
    the student choice is removed*/
    public async selectChoice(
        studentExamId: number,
        sessionQuestionId: number,
        sessionChoiceId: number,
        checked: boolean
    ): Promise<void> {
        const studentChoice = await this.studentChoiceRepository
            .createQueryBuilder('studentChoice')
            .innerJoin('studentChoice.studentExam', 'studentExam')
            .where('studentChoice.studentExam = :seid', { seid: studentExamId })
            .innerJoin('studentChoice.sessionQuestion', 'sessionQuestion')
            .andWhere('studentChoice.sessionQuestion = :sqid', { sqid: sessionQuestionId })
            .innerJoin('studentChoice.sessionChoice', 'sessionChoice')
            .andWhere('studentChoice.sessionChoice = :scid', { scid: sessionChoiceId })
            .getOne();

        if (checked) {
            if (!studentChoice) {
                const studentExam = { id: studentExamId };
                const sessionQuestion = { id: sessionQuestionId };
                const sessionChoice = { id: sessionChoiceId };

                await this.studentChoiceRepository.save(
                    Object.assign(new StudentChoice(), {
                        studentExam,
                        sessionQuestion,
                        sessionChoice
                    })
                );
            }
        } else {
            if (studentChoice) {
                await this.studentChoiceRepository.remove(studentChoice);
            }
        }
    }
}
