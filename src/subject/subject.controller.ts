import { Body, Controller, Delete, Get, Logger, Param, Patch, Post, Req, UnauthorizedException, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { TeacherGuard } from 'src/auth/teacher.guard';
import { Exam } from 'src/database/entities/exam.entity';
import { Session } from 'src/database/entities/session.entity';
import { Student } from 'src/database/entities/student.entity';
import { Subject } from 'src/database/entities/subject.entity';
import { Teacher } from 'src/database/entities/teacher.entity';
import { Topic } from 'src/database/entities/topic.entity';
import { SubjectService } from '../core/services/subject.service';


@Controller('subjects')
export class SubjectController {
    constructor(
        private readonly subjectService: SubjectService,
        ) { }

    @UseGuards(TeacherGuard)    
    @Get(':subjectId/search-teachers/:criterion')
    public async searchTeachers(@Param() params): Promise<Teacher[]> {
        const { criterion, subjectId } = params;
        const teachers = await this.subjectService.searchTeachers(criterion, subjectId);
        return teachers;
    }

    @UseGuards(TeacherGuard)
    @Get(':subjectId/search-teachers')
    public async emptySearchForTeachers(): Promise<null> {
        return null;
    }

    @UseGuards(TeacherGuard)
    @Get(':subjectId/search-students/:criterion')
    public async searchStudents(@Param() params: any): Promise<Student[]> {
        const { criterion, subjectId } = params;
        const searchResults = await this.subjectService.searchStudents(criterion, subjectId);
        return searchResults;
    }

    @UseGuards(TeacherGuard)
    @Get(':subjectId/search-students')
    public async emptySearchForStudents(): Promise<null> {
        return null;
    }

    @UseGuards(TeacherGuard)
    @Get(':subjectId/exams')
    public async getSubjectExams(@Param() params: any): Promise<Exam[]> {
        const { subjectId } = params;
        const exams = await this.subjectService.getSubjectExams(subjectId);
        return exams;
    }

    @UseGuards(TeacherGuard)
    @Get(':subjectId/topics')
    public async getSubjectTopics(@Param() params: any): Promise<Topic[]> {
        const { subjectId } = params;

        const topics = await this.subjectService.getSubjectTopics(subjectId);
        return topics;
    }

    @UseGuards(TeacherGuard)
    @Get(':subjectId/teachers')
    public async getSubjectTeachers(@Param() params: any): Promise<Teacher[]> {
        const { subjectId } = params;

        const subjectTeachers = await this.subjectService.getSubjectTeachers(subjectId);
        return subjectTeachers;
    }

    @UseGuards(TeacherGuard)
    @Get(':subjectId/students')
    public async getSubjectStudents(@Param() params: any): Promise<Student[]> {
        const { subjectId } = params;
        const subjectStudents = await this.subjectService.getSubjectStudents(subjectId);
        return subjectStudents;
    }

    @UseGuards(TeacherGuard)
    @Get(':subjectId/sessions')
    public async getSubjectSessions(@Param() params: any): Promise<Session[]> {
        const { subjectId } = params;
        const subjectSessions = await this.subjectService.getSubjectSessions(subjectId);
        return subjectSessions;
    }

    @Get(':subjectId')
    public async getSubject(@Param() params: any): Promise<Subject> {
        const { subjectId } = params;
        
        const subject = await this.subjectService.getSubject(subjectId);
        return subject;
    }

    @UseGuards(TeacherGuard)
    @Post('add-student-to-subject')
    public async addStudentToSubject(@Body() body: any): Promise<void> {
        const { studentId, subjectId } = body;
        await this.subjectService.addStudentToSubject(subjectId, studentId);
    }

    @UseGuards(TeacherGuard)
    @Post('remove-student-from-subject')
    public async removeStudentFromSubject(@Body() body: any): Promise<void> {
        const { subjectId, studentId } = body;
        await this.subjectService.removeStudentFromSubject(subjectId, studentId);
    }

    @UseGuards(TeacherGuard)
    @Post('add-teacher-to-subject')
    public async addTeacherToSubject(@Body() body: any): Promise<void> {
        const { subjectId, teacherId } = body;
        await this.subjectService.addTeacherToSubject(teacherId, subjectId);
    }

    @UseGuards(TeacherGuard)
    @Post('remove-teacher-from-subject')
    public async removeTeacherFromSubject(@Req() req: Request, @Body() body: any): Promise<void> {
        const userData = req.params.userData;
        const userId = userData["id"];

        const { subjectId, teacherId } = body;

        if(teacherId == userId) {
            return;
        }

        await this.subjectService.removeTeacherFromSubject(subjectId, teacherId);
    }

    @UseGuards(TeacherGuard)
    @Post()
    public async createSubject(@Body() body: any, @Req() req: Request): Promise<void> {
        const userData = req.params.userData;
        const { name, description } = body;
        await this.subjectService.createSubject(name, description, userData['id']);
    }

    @UseGuards(TeacherGuard)
    @Patch(':subjectId')
    public async editSubject(@Body() body: any, @Param() params: any): Promise<void> {
        const { subjectId } = params;
        const { name, description } = body;
        await this.subjectService.editSubject(subjectId, name, description);
    }

    @UseGuards(TeacherGuard)
    @Delete(':subjectId')
    public async deleteSubject(@Param() params: any): Promise<void> {
        const { subjectId } = params;
        await this.subjectService.deleteSubject(subjectId);
    }

}


