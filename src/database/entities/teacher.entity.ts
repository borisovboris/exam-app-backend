import { BeforeInsert, Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { bcryptConstants } from 'src/bcrypt/bcrypt.constants';
import { Subject } from 'src/database/entities/subject.entity';
import { Session } from 'src/database/entities/session.entity';

@Entity({ name: 'teacher' })
export class Teacher {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    username: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @OneToMany(type => Subject, subject => subject.creator)
    createdSubjects: Subject[];

    @ManyToMany(type => Subject, subject => subject.teachers, {
        cascade: true,
    })
    // a teacher can delete a subject, therefore teacher is the owner side of the MtM relationship
    @JoinTable({
        name: "teacher_subjects", // table name for the junction table of this relation
        joinColumn: {
            name: "teacher_id",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "subject_id",
            referencedColumnName: "id"
        }
    })
    subjects: Array<Subject>;

    @OneToMany(type => Session, session => session.teacher)
    sessions: Array<Session>;

    @BeforeInsert()
    async hashPassword(): Promise<void> {
        const salt = await bcrypt.genSalt(bcryptConstants.saltRounds);
        const hash = await bcrypt.hash(this.password, salt);
        this.password = hash;
    }

}