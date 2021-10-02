import { CanActivate, ExecutionContext, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Topic } from "src/database/entities/topic.entity";
import { Repository } from "typeorm";
import { UserBusinessErrors } from "../errors/users/user.business-errors";

export class TopicGuard implements CanActivate {

    constructor
        (
            @InjectRepository(Topic)
            private readonly topicRepository: Repository<Topic>
        ) { }

    async canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest();
        const params = request.params;

        const teacherId = params.userData.id;
        const topicId = request.body.topicId || params.topicId;

        if (!topicId) {
            throw new NotFoundException(UserBusinessErrors.ResourceNotFound);
        }

        const topic = await this.topicRepository
            .createQueryBuilder('topic')
            .select(['topic.id', 'subject.id', 'subjectTeachers.id'])
            .where('topic.id = :tid', { tid: topicId })
            .innerJoin('topic.subject', 'subject')
            .innerJoin('subject.teachers', 'subjectTeachers')
            .getOne();

        if (!topic) {
            throw new NotFoundException(UserBusinessErrors.ResourceNotFound);
        }

        const teachers = topic.subject.teachers;
        const topicAuthorization = teachers.some((teacher) => teacher.id === teacherId);

        if(topicAuthorization) {
            return true;
        } else {
            throw new UnauthorizedException(UserBusinessErrors.UnauthorizedAction);
        }
        
    }
}