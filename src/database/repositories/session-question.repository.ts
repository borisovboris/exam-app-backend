import { SessionQuestion } from "src/database/entities/session-question.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(SessionQuestion)
export class SessionQuestionRepository extends Repository<SessionQuestion> {}