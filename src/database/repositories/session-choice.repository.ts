import { SessionChoice } from "src/database/entities/session-choice.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(SessionChoice)
export class SessionChoiceRepository extends Repository<SessionChoice> {}