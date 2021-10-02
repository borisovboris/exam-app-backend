import { QuestionTypes } from "src/core/enums";
import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Question } from "./question.entity";
import { SessionQuestion } from "./session-question.entity";

@Entity({ name: 'question_type' })
@Index(['type'], { unique: true })
export class QuestionType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: QuestionTypes;

    @OneToMany(type => Question, question => question.questionType)
    questions: Question[];

    @OneToMany(type => SessionQuestion, sessionQuestion => sessionQuestion.questionType)
    sessionQuestions: SessionQuestion[];
}