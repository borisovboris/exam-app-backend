import { Body, Controller, Delete, Get, Logger, Param, Post, Req, UseGuards } from '@nestjs/common';
import { TeacherGuard } from 'src/auth/teacher.guard';
import { QuestionService } from 'src/core/services/question.service';
import { Question } from 'src/database/entities/question.entity';
import { QuestionGuard } from 'src/shared/guards/question.guard';

@UseGuards(TeacherGuard)
@Controller('questions')
export class QuestionController {

    constructor
    (
        private readonly questionService: QuestionService
    ) {}

    @UseGuards(QuestionGuard)
    @Get(':questionId')
    public async getQuestion(@Param() params: any): Promise<Question> {
        const questionId = params.questionId;
        const question = await this.questionService.getQuestion(questionId);
        return question;
    }

    @Post()
    public async createQuestion(@Body() body: any): Promise<any> {
        await this.questionService.createQuestion(body);
    }

    @UseGuards(QuestionGuard)
    @Delete(':questionId')
    public async deleteQuestion(@Param() params: any): Promise<any> {
        const questionId = params.questionId;
        await this.questionService.deleteQuestion(questionId);
    }

}
