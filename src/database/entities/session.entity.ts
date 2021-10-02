import { Subject } from './subject.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Teacher } from './teacher.entity';
import { StudentExam } from './student-exam.entity';
import { SessionQuestion } from './session-question.entity';

@Entity({ name: 'session' })
@Index(['subject', 'startTime', 'endTime'], { unique: true})
export class Session {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ name: 'start_time' })
    startTime: Date;

    @Column({ name: 'end_time'})
    endTime: Date;

    @ManyToOne(type => Teacher, teacher => teacher.sessions, { cascade: true,  nullable: false })
    @JoinColumn({ name: 'teacher_id' })
    teacher: Teacher;

    @ManyToOne(type => Subject, subject => subject.sessions, { cascade: true, onDelete: 'CASCADE', nullable: false })
    @JoinColumn({ name: 'subject_id' })
    subject: Subject;

    @OneToMany(type => StudentExam, studentExam => studentExam.session)
    studentExams: Array<StudentExam>;

    @OneToMany(type => SessionQuestion, sessionQuestion => sessionQuestion.session)
    sessionQuestions: Array<SessionQuestion>;
}