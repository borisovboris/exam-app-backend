import { Controller, Get, Param, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { StudentGuard } from 'src/auth/student.guard';
import { Occupations } from 'src/core/enums';
import { StudentExamService } from 'src/core/services/student-exam.service';
import { StudentExam } from 'src/database/entities/student-exam.entity';

@Controller('student-exams')
export class StudentExamController {
    constructor
    (
        private readonly studentExamService: StudentExamService
    ) {}

    @Get(':studentExamId/teacher')
    public async getStudentExamQuestionsTeacher(@Param() params: any): Promise<any> {
        const { studentExamId } = params;
        const questions = await this.studentExamService.getStudentExamQuestions(studentExamId, Occupations.Teacher);
        return questions;
    }

    @Get(':studentExamId/student')
    public async getStudentExamQuestionsStudent(@Param() params: any): Promise<any> {
        const { studentExamId } = params;
        const questions = await this.studentExamService.getStudentExamQuestions(studentExamId, Occupations.Student);
        return questions;
    }

    @Get(':studentExamId') 
    public async getStudentExam(@Param() params: any):Promise<StudentExam> {
        const { studentExamId } = params;
        const studentExam = await this.studentExamService.getStudentExam(studentExamId);
        return studentExam;
    }
}
