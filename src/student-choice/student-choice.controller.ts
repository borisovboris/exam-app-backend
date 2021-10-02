import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { StudentGuard } from 'src/auth/student.guard';
import { StudentChoiceService } from 'src/core/services/student-choice.service';
import { StudentExamGuard } from 'src/shared/guards/student-exam.guard';

@Controller('student-choices')
export class StudentChoiceController {
    constructor
    (
        private studentChoiceService: StudentChoiceService
    ) {}
    
    @UseGuards(StudentGuard, StudentExamGuard)
    @Post('select-choice')
    public async selectChoice(@Body() body: any): Promise<void> {
        const { studentExamId, sessionQuestionId, sessionChoiceId, checked } = body;
        await this.studentChoiceService.selectChoice( 
            studentExamId, 
            sessionQuestionId,
            sessionChoiceId,
            checked);
        return;
    }
}
