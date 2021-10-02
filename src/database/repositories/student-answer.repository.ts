import { StudentAnswer } from "src/database/entities/student-answer.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(StudentAnswer)
export class StudentAnswerRepository extends Repository<StudentAnswer> {}