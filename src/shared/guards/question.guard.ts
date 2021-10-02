import { CanActivate, ExecutionContext, ForbiddenException, Injectable, Logger, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Question } from "src/database/entities/question.entity";
import { Repository } from "typeorm";
import { UserBusinessErrors } from "../errors/users/user.business-errors";

@Injectable()
export class QuestionGuard implements CanActivate {

    constructor
        (
            @InjectRepository(Question)
            private readonly questionRepository: Repository<Question>,
    ) { }

    async canActivate(context: ExecutionContext) {

            const request = context.switchToHttp().getRequest();
            const params = request.params;
            // userData will be attached from student guard
            const teacherId = params.userData.id;

            // get the ID either from the GET request OR POST request
            // either getQuestionId or postQuestionId will contain a value
            // the other one will be null
            const questionId = request.body.questionId || params.questionId;

            if(!questionId) {
              throw new  NotFoundException(UserBusinessErrors.ResourceNotFound);
            }

            const question = await this.questionRepository
            .createQueryBuilder('question')
            .select(['question.id', 'topic.id', 'subject.id', 'subjectTeachers.id'])
            .where('question.id = :qid', { qid: questionId })
            .innerJoin('question.topic', 'topic')
            .innerJoin('topic.subject', 'subject')
            .innerJoin('subject.teachers', 'subjectTeachers')
            .getOne();

            if(!question) {
                throw new  NotFoundException(UserBusinessErrors.ResourceNotFound);
            }

            const teachers = question.topic.subject.teachers;
            const questionAuthorization = teachers.some((teacher) => teacher.id === teacherId);

            if(questionAuthorization) {
                return true;
            } else {
                throw new UnauthorizedException(UserBusinessErrors.UnauthorizedAction);
            }
         
    }
}