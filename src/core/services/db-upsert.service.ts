import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { QuestionType } from "src/database/entities/question-type.entity";
import { Repository } from "typeorm";
import { QuestionTypes } from "../enums";

@Injectable()
export class DbUpsert {
    constructor
    (
        @InjectRepository(QuestionType)
        private readonly questionTypeRepository: Repository<QuestionType>
    ) {

    }

    public async fillQuestionTypesInDB() {
        await this.questionTypeRepository.save([
            {id: 1, type: QuestionTypes.Open},
            {id: 2, type: QuestionTypes.Closed}
        ])
    }
}