import { Question } from 'src/database/entities/question.entity';
import { Subject } from 'src/database/entities/subject.entity'
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'exam' })
export class Exam {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(type => Subject, subject => subject.exams, { cascade: true, onDelete: 'CASCADE', nullable: false })
    @JoinColumn({ name: 'subject_id'})
    subject: Subject;

    @ManyToMany(type => Question, question => question.exams, {
        cascade: true,
    })
    @JoinTable(
        {
            name: "exam_questions", // table name for the junction table of this relation
            joinColumn: {
                name: "exam_id",
                referencedColumnName: "id"
            },
            inverseJoinColumn: {
                name: "question_id",
                referencedColumnName: "id"
            }
        }
    )
    questions: Array<Question>;

}