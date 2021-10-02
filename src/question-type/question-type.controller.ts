import { Controller, Get } from '@nestjs/common';
import { QuestionTypeService } from 'src/core/services/question-type.service';
import { QuestionType } from 'src/database/entities/question-type.entity';

@Controller('question-types')
export class QuestionTypeController {
    constructor
    (
        private readonly questionTypeService: QuestionTypeService
    ) {}

    @Get()
    async getQuestionTypes(): Promise<QuestionType[]> {
        return this.questionTypeService.getQuestionTypes();
    }
}
