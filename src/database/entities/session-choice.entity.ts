import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SessionQuestion } from "./session-question.entity";
import { StudentChoice } from "./student-choice.entity";

@Entity({ name: 'session_choice' })
export class SessionChoice {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @Column({ name: 'is_correct' })
    isCorrect: boolean;

    @ManyToOne(type => SessionQuestion, sessionQuestion => sessionQuestion.sessionChoices,
    { cascade: true, nullable: false, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'session_question_id' })
    sessionQuestion: SessionQuestion;

    @OneToMany(type => StudentChoice, studentChoice => studentChoice.sessionQuestion)
    studentChoices: Array<StudentChoice>;
}

