import { EntityRepository, Repository } from 'typeorm';
import { Choice } from 'src/database/entities/choice.entity';

@EntityRepository(Choice)
export class ChoiceRepository extends Repository<Choice> {}
