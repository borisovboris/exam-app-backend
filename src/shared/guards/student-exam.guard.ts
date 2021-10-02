import { CanActivate, ExecutionContext, ForbiddenException, Injectable, Logger, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ExamStatuses } from "src/core/enums";
import { StudentExam } from "src/database/entities/student-exam.entity";
import { StudentExamRepository } from "src/database/repositories/student-exam.repository";
import { Repository } from "typeorm";
import { UserBusinessErrors } from "../errors/users/user.business-errors";
import { ExamStatsService } from "../services/exam-stats.service";

@Injectable()
export class StudentExamGuard implements CanActivate {

    constructor
        (
            @InjectRepository(StudentExamRepository)
            private readonly studentExamRepository: Repository<StudentExam>,
            private readonly examStatsService: ExamStatsService
        ) { }

    async canActivate(context: ExecutionContext) {

        try {
            const request = context.switchToHttp().getRequest();
            // userData will be attached from student guard
            const studentId = request.params.userData.id;
            const { studentExamId } = request.body;

            // check if this user can manipulate the questions of
            // the exam with this ID

            const studentExam = await this.studentExamRepository
                .createQueryBuilder('studentExam')
                .select('studentExam', 'studentExam.session')
                .where("studentExam.id = :id", { id: studentExamId })
                .innerJoin('studentExam.student', 'student')
                .andWhere('studentExam.student = :sid', { sid: studentId })
                .innerJoinAndSelect('studentExam.session', 'session')
                .getOne();

            // if this exam has student ID equal to the user making the request
            // then its their exam and they can answer to the questions

            if (studentExam) {
                const { startTime, endTime } = studentExam.session;
                const examStatus: ExamStatuses = this.examStatsService.getExamStatus(startTime, endTime);

                if(examStatus !== ExamStatuses.InProgress) {
                    throw new Error();
                }

                return true;
            } else {
                throw new Error();
            }

        } catch (error) {
            throw new ForbiddenException(UserBusinessErrors.Forbidden);
        }
    }
}