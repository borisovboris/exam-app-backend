import { Question } from "src/database/entities/question.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'choice' })
export class Choice {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @Column({ name: 'is_correct' })
    isCorrect: boolean;

    @ManyToOne(type => Question, question => question.choices, { cascade: true, onDelete: 'CASCADE', nullable: false })
    @JoinColumn({ name: 'question_id' })
    question: Question;
    
}