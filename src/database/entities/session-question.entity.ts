import { Session } from "./session.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { StudentChoice } from "./student-choice.entity";
import { SessionChoice } from "./session-choice.entity";
import { QuestionType } from "./question-type.entity";

@Entity({ name: 'session_question' })
export class SessionQuestion {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 752 })
    title: string;

    @Column({ name: 'max_points'})
    maxPoints: number;

    @ManyToOne(type => QuestionType, questionType => questionType.sessionQuestions, { cascade: true, onDelete: 'RESTRICT', nullable: false })
    @JoinColumn({ name: 'question_type'})
    questionType: QuestionType;

    @ManyToOne(type => Session, session => session.sessionQuestions, { cascade: true, onDelete: 'CASCADE', nullable: false })
    @JoinColumn({ name: 'session_id' })
    session: Session;

    @OneToMany(type => SessionChoice, sessionChoice => sessionChoice.sessionQuestion)
    sessionChoices: Array<SessionChoice>;

    @OneToMany(type => StudentChoice, studentChoice => studentChoice.sessionQuestion)
    studentChoices: Array<StudentChoice>;
    
}