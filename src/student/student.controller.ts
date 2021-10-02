import { Body, Controller, Delete, Get, Logger, Param, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { StudentGuard } from 'src/auth/student.guard';
import { TeacherGuard } from 'src/auth/teacher.guard';
import { StudentService } from 'src/core/services/student.service';
import { Subject } from 'src/database/entities/subject.entity';



@Controller('students')
export class StudentController {
    constructor(private studentService: StudentService){}

    @UseGuards(StudentGuard)
    @Get('subjects')
    public async getSubjects(@Req() req: Request): Promise<Subject[]> {
        const userData = req.params.userData;
        const studentId = userData["id"];
        const subjects = await this.studentService.getStudentSubjects(studentId);
        return subjects;
    }

    @UseGuards(StudentGuard)
    @Get('subject/:id/exams')
    public async getStudentSubjectExams(@Param() params: any, @Req() req: Request): Promise<any> {
        const subjectId = params.id;
        const userData = req.params.userData;
        const studentId = userData["id"];
        const studentExams = await this.studentService.getStudentSubjectExams(studentId, subjectId);
        return studentExams;
    }

}
