import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TeacherService } from 'src/core/services/teacher.service';
import { StudentService } from './student.service';
import { Request } from 'express';
import { InjectRepository } from '@nestjs/typeorm';
import { Teacher } from 'src/database/entities/teacher.entity';
import { Repository } from 'typeorm';
import { Occupations } from '../enums';
import { Student } from 'src/database/entities/student.entity';

@Injectable()
export class AuthService {

    constructor
        (
            private readonly teacherService: TeacherService,
            private readonly jwtService: JwtService,
            private readonly studentService: StudentService,
            @InjectRepository(Teacher)
            private readonly teacherRepository: Repository<Teacher>,
            @InjectRepository(Student)
            private readonly studentRepository: Repository<Student>
        ) { }

    public async loginTeacher(username: string, password: string): Promise<string> {

            const passwordMatch = await this.teacherService.comparePasswords(username, password);

            if(passwordMatch) {
                const teacher = await this.teacherRepository.findOne({ username });
                const token = await this.jwtService.signAsync({ teacherId: '' + teacher.id });
                return token;
            }
    }

    public async registerTeacher(username: string, password: string, email: string): Promise<void> {
        const teacher = Object.assign(new Teacher(), { username, password, email });
        await this.teacherRepository.save(teacher);
    }

    public async loginStudent(username: string, password: string): Promise<string> {
        const passwordMatch = await this.studentService.comparePasswords(username, password);

            if(passwordMatch) {
                const student = await this.studentRepository.findOne({ username });
                const token = await this.jwtService.signAsync({ studentId: '' + student.id });
                return token;
            }
    }

    public async registerStudent(username, email, facultyNumber, password): Promise<void> {
        const student = Object.assign(new Student(), { username, email, facultyNumber, password });
        await this.studentRepository.save(student);
    }

    public async getUserOccupation(req: Request): Promise<any> {
        const authorizationHeaders = req.headers["authorization"];
        const bearerToken = authorizationHeaders?.split(' ')[1];
        
        try {
            const tokenPayload = await this.validateToken(bearerToken);
            if(tokenPayload.studentId) {
                return { occupation: Occupations.Student };
            } else if (tokenPayload.teacherId) {
                return { occupation: Occupations.Teacher };
            } else {
                return null;
            }
        } catch(error) {
            return null;
        }
       
    }

    public async validateToken(tokenId: string): Promise<any> {
        return await this.jwtService.verifyAsync(tokenId);
    }
}
