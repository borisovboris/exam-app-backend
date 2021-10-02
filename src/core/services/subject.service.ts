import { Injectable, Logger } from '@nestjs/common';
import { Brackets, Connection, Repository } from 'typeorm';

import { InjectRepository } from '@nestjs/typeorm';
import { Teacher } from 'src/database/entities/teacher.entity';
import { Subject } from 'src/database/entities/subject.entity';
import { Topic } from '../../database/entities/topic.entity';
import { Student } from '../../database/entities/student.entity';
import { Exam } from 'src/database/entities/exam.entity';
import { Session } from 'src/database/entities/session.entity';

@Injectable()
export class SubjectService {

    constructor(
        @InjectRepository(Subject)
        private readonly subjectRepository: Repository<Subject>,
        @InjectRepository(Teacher)
        private readonly teacherRepository: Repository<Teacher>,
        @InjectRepository(Student)
        private readonly studentRepository: Repository<Student>
    ) { }

    public async createSubject(name: string, description: string, creatorId: number): Promise<void> {
        const teacher = await this.teacherRepository.findOne({ id: creatorId });

        const subject = Object.assign(new Subject(), { name, description });
        subject.creator = teacher;
        subject.teachers = [teacher];
        await this.subjectRepository.save(subject);
    }

    public async editSubject(subjectId, name, description): Promise<void> {
        await this.subjectRepository
            .createQueryBuilder()
            .update(Subject)
            .set({ name, description })
            .where("id = :sid", { sid: subjectId })
            .execute();
    }

    public async getSubject(subjectId: number): Promise<Subject> {
        const subject = this.subjectRepository
            .createQueryBuilder('subject')
            .select(['subject', 'creator.username'])
            .where('subject.id = :sid', { sid: subjectId })
            .innerJoin('subject.creator', 'creator')
            .getOne();

        return subject;
    }

    public async getSubjectTeachers(subjectId: number): Promise<Teacher[]> {

        const subject = await this.subjectRepository
            .createQueryBuilder('subject')
            .select(['subject.id', 'teacher.id', 'teacher.username', 'teacher.email'])
            .where('subject.id = :sid', { sid: subjectId })
            .leftJoin('subject.teachers', 'teacher')
            .orderBy('teacher.username', 'ASC')
            .getOne();

        return subject.teachers;
    }

    public async getSubjectTopics(subjectId: number): Promise<Topic[]> {
        const subject = await this.subjectRepository
            .createQueryBuilder('subject')
            .select(['subject.id', 'topic.id', 'topic.name'])
            .where('subject.id = :sid', { sid: subjectId })
            .leftJoin('subject.topics', 'topic')
            .getOne();

        return subject.topics;
    }


    public async getSubjectStudents(subjectId: number): Promise<Student[]> {
        const subject = await this.subjectRepository
            .createQueryBuilder('subject')
            .select(['subject.id', 'student.id', 'student.email', 'student.facultyNumber'])
            .where('subject.id = :sid', { sid: subjectId })
            .leftJoin('subject.students', 'student')
            .orderBy('student.facultyNumber', 'DESC')
            .getOne();

        return subject.students;
    }

    public async searchStudents(criterion: string, subjectId: number): Promise<Student[]> {
        let studentIds = (await this.getSubjectStudents(subjectId))
            .map((student) => { return student.id });
        if (studentIds.length === 0) {
            studentIds = [0];
        }

        const students = await this.studentRepository
            .createQueryBuilder('student')
            .select(['student.id', 'student.email', 'student.facultyNumber'])
            .where("student.id NOT IN (:...studentIds)", { studentIds })
            .andWhere(new Brackets(qb => {
                qb.where('student.username like :criterion', { criterion: `%${criterion}%` })
                    .orWhere('student.facultyNumber like :criterion', { criterion: `%${criterion}%` })
                    .orWhere('student.email like :criterion', { criterion: `%${criterion}%` });
            }))
            .take(5)
            .getMany();

        return students;
    }

    public async addStudentToSubject(subjectId: number, studentId: number): Promise<void> {
        const studentToAdd = await this.studentRepository.findOne({ id: studentId });
        const subject = await this.subjectRepository.findOne({ id: subjectId }, { relations: ['students'] });
        subject.students = [...subject.students, studentToAdd];

        await this.subjectRepository.save(subject);
    }

    public async removeStudentFromSubject(subjectId: number, studentId: number): Promise<void> {
        const subject = await this.subjectRepository.findOne({ id: subjectId }, { relations: ['students'] });
        const newStudents = subject?.students.filter(student => student.id != studentId);
        subject.students = newStudents;

        await this.subjectRepository.save(subject);
    }

    public async searchTeachers(criterion: string, subjectId: number): Promise<Teacher[]> {
        let teacherIds = (await this.getSubjectTeachers(subjectId))
            .map((teacher) => { return teacher.id });
        if (teacherIds.length === 0) {
            teacherIds = [0];
        }

        const teachers = await this.teacherRepository
            .createQueryBuilder('teacher')
            .select(['teacher.id', 'teacher.username', 'teacher.email'])
            .where("teacher.id NOT IN (:...teacherIds)", { teacherIds })
            .andWhere(new Brackets(qb => {
                qb.where('teacher.username like :criterion', { criterion: `%${criterion}%` })
                    .orWhere('teacher.email like :criterion', { criterion: `%${criterion}%` })
            }))
            .take(5)
            .getMany();

        return teachers;
    }

    public async addTeacherToSubject(teacherId: number, subjectId: number): Promise<void> {
        const teacherToAdd = await this.teacherRepository.findOne({ id: teacherId });
        const subject = await this.subjectRepository.findOne({ id: subjectId }, { relations: ['teachers'] });
        subject.teachers = [...subject.teachers, teacherToAdd];

        await this.subjectRepository.save(subject);
    }

    public async removeTeacherFromSubject(subjectId: number, teacherId: number): Promise<void> {
        const subject = await this.subjectRepository.findOne({ id: subjectId }, { relations: ['teachers', 'creator'] });

        if(subject.creator.id === teacherId) {
            return;
        }
        
        const newTeachers = subject?.teachers.filter((teacher) => teacher.id != teacherId);
        subject.teachers = newTeachers;

        await this.subjectRepository.save(subject);
    }

    public async getSubjectExams(subjectId: number): Promise<Exam[]> {
        const subject = await this.subjectRepository
            .createQueryBuilder('subject')
            .select(['subject.id', 'exam.id', 'exam.name'])
            .where('subject.id = :sid', { sid: subjectId })
            .leftJoin('subject.exams', 'exam')
            .getOne();

        return subject.exams;
    }

    public async getSubjectSessions(subjectId: number): Promise<Session[]> {
        const subject = await this.subjectRepository
            .createQueryBuilder('subject')
            .select(['subject.id', 'session.id', 'session.name', 'session.startTime', 'teacher.username'])
            .where('subject.id = :sid', { sid: subjectId })
            .leftJoin('subject.sessions', 'session')
            .leftJoin('session.teacher', 'teacher')
            .orderBy('session.startTime', 'DESC')
            .getOne();

        return subject.sessions;
    }

    public async deleteSubject(subjectId: number): Promise<void> {
        await this.subjectRepository
            .createQueryBuilder()
            .delete()
            .from(Subject)
            .where("id = :id", { id: subjectId })
            .execute();
    }
}
