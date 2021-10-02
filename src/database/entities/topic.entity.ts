import { Subject } from "src/database/entities/subject.entity";
import { Question } from "src/database/entities/question.entity";
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'topic' })
@Index(['name', 'subject'], { unique: true })
export class Topic {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(type => Subject, subject => subject.topics, {cascade: true, onDelete: 'CASCADE', nullable: false})
    @JoinColumn({ name: 'subject_id' })
    subject: Subject;

    @OneToMany(type => Question, question => question.topic)
    questions: Array<Question>;
}