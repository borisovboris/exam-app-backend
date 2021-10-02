import { Body, Controller, Logger, Post, UseGuards } from '@nestjs/common';
import { StudentGuard } from 'src/auth/student.guard';
import { StudentAnswerService } from 'src/core/services/student-answer.service';
import { StudentExamGuard } from 'src/shared/guards/student-exam.guard';

@Controller('student-answers')
export class StudentAnswerController {
    constructor
    (
        private readonly studentAnswerService: StudentAnswerService
    ) {}

    @Post('assess')
    public async assessAnswer(@Body() body: any): Promise<void> {
        const { earnedPoints, studentAnswerId } = body;
        await this.studentAnswerService.assessAnswer(earnedPoints, studentAnswerId );
        return;
    }

    @UseGuards(StudentGuard, StudentExamGuard)
    @Post('give-answer')
    public async giveAnswer(@Body() body: any): Promise<void> {
        const { studentAnswerText, studentExamId, sessionQuestionId } = body;
        await this.studentAnswerService.giveAnswer(studentAnswerText, studentExamId, sessionQuestionId);
        return;
    }
}
