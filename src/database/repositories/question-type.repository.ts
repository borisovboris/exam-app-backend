import { EntityRepository, Repository } from "typeorm";
import { QuestionType } from "../entities/question-type.entity";

@EntityRepository(QuestionType)
export class QuestionTypeRepository extends Repository<QuestionType> {}