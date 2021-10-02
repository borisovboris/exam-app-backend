import { Choice } from "src/database/entities/choice.entity";
import { Exam } from "src/database/entities/exam.entity";
import { Topic } from "src/database/entities/topic.entity";
import { Column, Entity, Index, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { QuestionTypes } from 'src/core/enums';
import { QuestionType } from "./question-type.entity";

@Entity({ name: 'question' })
@Index(['title', 'topic'], { unique: true })
export class Question {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 752 })
    title: string;

    @Column({ name: 'max_points' })
    maxPoints: number;

    @OneToMany(type => Choice, choice => choice.question)
    choices: Array<Choice>;

    @ManyToOne(type => Topic, topic => topic.questions, { cascade: true, onDelete: 'CASCADE', 
    nullable: false })
    @JoinColumn({ name: 'topic_id' })
    topic: Topic;

    @ManyToOne(type => QuestionType, questionType => questionType.questions, { cascade: true, onDelete: 'RESTRICT', nullable: false })
    @JoinColumn({ name: 'question_type'})
    questionType: QuestionType;

    @ManyToMany(type => Exam, exam => exam.questions)
    exams: Array<Exam>;
    
}