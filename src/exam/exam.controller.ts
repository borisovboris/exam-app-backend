import { Body, Controller, Delete, Get, Logger, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { TeacherGuard } from 'src/auth/teacher.guard';
import { ExamService } from 'src/core/services/exam.service';
import { Exam } from 'src/database/entities/exam.entity';
import { Question } from 'src/database/entities/question.entity';
import { ExamGuard } from 'src/shared/guards/exam.guard';

@UseGuards(TeacherGuard)
@Controller('exams')
export class ExamController {

    constructor(
        private readonly examService: ExamService
    ) {}
    
    @UseGuards(ExamGuard)
    @Get(':examId/questions')
    public async getExamQuestions(@Param() params: any): Promise<Question[]> {
        const { examId } = params;
        const questions = await this.examService.getExamQuestions(examId);
        return questions;
    }

    @UseGuards(ExamGuard)
    @Get(':examId')
    public async getExam(@Param() params: any): Promise<Exam> {
        const { examId } = params;
        const exam = await this.examService.getExam(examId);
        return exam;
    }

    @UseGuards(ExamGuard)
    @Post('add-question')
    public async addQuestionToExam(@Body() body: any): Promise<void> {
        const { examId, questionId } = body;
        await this.examService.addQuestionToExam(examId, questionId);
    }

    @Post()
    public async createExam(@Body() body: any): Promise<void> {
        const { name, subjectId } = body;
        await this.examService.createExam(name, subjectId);
    }

    @UseGuards(ExamGuard)
    @Patch(':examId')
    public async editExam(@Body() body: any, @Param() params: any): Promise<void> {
        const { examId } = params;
        const { name } = body;
        await this.examService.editExam(examId, name);
    }


    @UseGuards(ExamGuard)
    @Delete(':examId/remove-question/:questionId')
    public async removeQuestionFromExam(@Param() params: any): Promise<void> {
        const {examId, questionId} = params;
        await this.examService.removeQuestionFromExam(examId, questionId);
    }


    @UseGuards(ExamGuard)
    @Delete(':examId')
    public async deleteExam(@Param() params: any): Promise<void> {
        const { examId } = params;
        await this.examService.deleteExam(examId);
    }
}
