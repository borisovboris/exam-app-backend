import { Injectable, Logger, NotFoundException, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Teacher } from 'src/database/entities/teacher.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Subject } from 'src/database/entities/subject.entity';
import { UserBusinessErrors } from 'src/shared/errors/users/user.business-errors';

@Injectable()
export class TeacherService {

    constructor(
        @InjectRepository(Teacher)
        private readonly teacherRepository: Repository<Teacher>,
    ) { }

    public async comparePasswords(clientUsername: string, clientPassword: string): Promise<boolean> {
        const dbPassword = await this.getTeacherPassword(clientUsername);
        const passwordMatch = await bcrypt.compare(clientPassword, dbPassword);

        return passwordMatch;
    }

    private async getTeacherPassword(username: string): Promise<string> {
        const teacher = await this.teacherRepository
        .createQueryBuilder('teacher')
        .select(['teacher.password'])
        .where('teacher.username = :u', { u: username })
        .getOne();

        return teacher.password;
    }

    public async getTeacherSubjects(teacherId: string): Promise<Subject[]> {
        const teacher = await this.teacherRepository
            .createQueryBuilder('teacher')
            .select(['teacher.id', 'subject.id', 'subject.name', 'subject.createdAt', 'creator.username'])
            .leftJoin('teacher.subjects', 'subject')
            .leftJoin('subject.creator', 'creator')
            .leftJoin('subject.teachers', 'subjectTeacher')
            .where('subjectTeacher.id = :tid', { tid: teacherId })
            .getOne();

        return teacher?.subjects;
    }

}
