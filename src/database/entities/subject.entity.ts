import { Session } from './session.entity';
import { Exam } from 'src/database/entities/exam.entity';
import { Teacher } from 'src/database/entities/teacher.entity';
import { Topic } from 'src/database/entities/topic.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    Index,
    ManyToMany,
    OneToMany,
    ManyToOne,
    JoinColumn,
    CreateDateColumn
    } from 'typeorm';
import { Student } from './student.entity';

@Entity({ name: 'subject' })
@Index(["creator", "name"], { unique: true })
export class Subject {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ length: 3002 })
    description: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @ManyToOne(type => Teacher, teacher => teacher.createdSubjects, { nullable: false })
    @JoinColumn({ name: 'creator_id' })
    creator: Teacher;

    @ManyToMany(type => Teacher, teacher => teacher.subjects)
    teachers: Array<Teacher>;

    @ManyToMany(type => Student, student => student.subjects)
    students: Array<Student>;

    @OneToMany(type => Topic, topic => topic.subject)
    topics: Array<Topic>;

    @OneToMany(type => Exam, exam => exam.subject)
    exams: Array<Exam>;

    @OneToMany(type => Session, session => session.subject)
    sessions: Array<Session>;
    
}