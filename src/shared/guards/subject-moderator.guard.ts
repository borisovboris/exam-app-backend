import { CanActivate, ExecutionContext, Logger, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Subject } from "src/database/entities/subject.entity";;
import { Repository } from "typeorm";
import { UserBusinessErrors } from "../errors/users/user.business-errors";

export class SubjectModeratorGuard implements CanActivate {
    constructor
    (
        @InjectRepository(Subject)
        private readonly subjectRepository: Repository<Subject>
    ) {}

    async canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest();
        const params = request.params;

        const teacherId = params.userData.id;
        const subjectId = request.body.subjectId || params.subjectId;

        if (!subjectId) {
            throw new NotFoundException(UserBusinessErrors.ResourceNotFound);
        }

        // const subject = await this.subjectRepository
        // .createQueryBuilder('subject')
        // .select(['subject.id', 'creator.id'])
        // .where('subject.id = :sid', { sid: subjectId })
        // .innerJoin('subject.creator', 'creator')
        // .getOne();

        const subject = await this.subjectRepository
        .createQueryBuilder('subject')
        .select(['subject.id', 'teachers.id'])
        .where('subject.id = :sid', { sid: subjectId })
        .innerJoin('subject.teachers', 'teachers')
        .getOne();

        if (!subject) {
            throw new NotFoundException(UserBusinessErrors.ResourceNotFound);
        }

        const teachers = subject.teachers;
        const subjectModerator = teachers.some((teacher) => teacher.id === teacherId);

        if(subjectModerator) {
            return true;
        } else {
            throw new UnauthorizedException(UserBusinessErrors.UnauthorizedAction);
        }
    }

}