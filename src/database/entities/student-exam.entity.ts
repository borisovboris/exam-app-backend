import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Session } from "./session.entity";
import { StudentAnswer } from "./student-answer.entity";
import { StudentChoice } from "./student-choice.entity";
import { Student } from "./student.entity";

@Entity({ name: 'student_exam' })
@Index(['student', 'session'], { unique: true })
export class StudentExam {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Student, student => student.studentExams, { cascade: true, nullable: false })
    @JoinColumn({ name: 'student_id' })
    student: Student;

    @ManyToOne(type => Session, session => session.studentExams, { cascade: true, nullable: false, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'session_id' })
    session: Session;

    @OneToMany(type => StudentChoice, studentChoice => studentChoice.studentExam)
    studentChoices: Array<StudentChoice>;

    @OneToMany(type => StudentAnswer, studentAnswer => studentAnswer.studentExam)
    studentAnswers: Array<StudentAnswer>;
}