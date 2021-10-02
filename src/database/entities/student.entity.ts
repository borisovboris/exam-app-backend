import { bcryptConstants } from 'src/bcrypt/bcrypt.constants';
import { BeforeInsert, Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Subject } from './subject.entity';
import { StudentExam } from './student-exam.entity';



@Entity({ name: 'student' })
export class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    username: string;

    @Column({ unique: true })
    email: string;

    @Column({ name: 'faculty_number' })
    facultyNumber: number;

    @Column()
    password: string;

    @ManyToMany(type => Subject, subject => subject.students, {
        cascade: true
    })
    @JoinTable({
        name: "student_subjects", // table name for the junction table of this relation
        joinColumn: {
            name: "student_id",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "subject_id",
            referencedColumnName: "id"
        }
    })
    subjects: Array<Subject>;

    @OneToMany(type => StudentExam, studentExam => studentExam.student)
    studentExams: Array<StudentExam>;

    @BeforeInsert()
    async hashPassword(): Promise<void> {
        const salt = await bcrypt.genSalt(bcryptConstants.saltRounds);
        const hash = await bcrypt.hash(this.password, salt);
        this.password = hash;
    }
}