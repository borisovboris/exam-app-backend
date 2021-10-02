import { CanActivate, ExecutionContext, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Exam } from "src/database/entities/exam.entity";
import { Repository } from "typeorm";
import { UserBusinessErrors } from "../errors/users/user.business-errors";

export class ExamGuard implements CanActivate {
    constructor
    (
        @InjectRepository(Exam)
        private readonly examRepository: Repository<Exam>
    ) {}

    async canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest();
        const params = request.params;

        const teacherId = params.userData.id;
        const examId = request.body.examId || params.examId;

         if (!examId) {
            throw new NotFoundException(UserBusinessErrors.ResourceNotFound);
        }

        const exam = await this.examRepository
        .createQueryBuilder('exam')
        .select(['exam.id', 'subject.id', 'subjectTeachers'])
        .where('exam.id = :eid', { eid: examId })
        .innerJoin('exam.subject', 'subject')
        .innerJoin('subject.teachers', 'subjectTeachers')
        .getOne();

        if (!exam) {
            throw new NotFoundException(UserBusinessErrors.ResourceNotFound);
        }

        const teachers = exam.subject.teachers;
        const examAuthorization = teachers.some((teacher) => teacher.id === teacherId);

        if(examAuthorization) {
            return true;
        } else {
            throw new UnauthorizedException(UserBusinessErrors.UnauthorizedAction);
        }
    }
}