import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { QuestionType } from "src/database/entities/question-type.entity";
import { Repository } from "typeorm";

@Injectable()
export class QuestionTypeService {
    constructor
    (
        @InjectRepository(QuestionType)
        private readonly questionTypeRepository: Repository<QuestionType>
    ) {}
    
    public async getQuestionTypes(): Promise<QuestionType[]> {
        const questionTypes = await this.questionTypeRepository
        .createQueryBuilder('questionType')
        .select(['questionType.type'])
        .orderBy('id', 'ASC')
        .getMany();

        return questionTypes;
    }
}