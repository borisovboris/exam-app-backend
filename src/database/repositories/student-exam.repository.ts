import { StudentExam } from "src/database/entities/student-exam.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(StudentExam)
export class StudentExamRepository extends Repository<StudentExam> {}