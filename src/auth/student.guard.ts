import { CanActivate, ExecutionContext, Injectable, Logger, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthService } from "src/core/services/auth.service";
import { Student } from "src/database/entities/student.entity";
import { StudentRepository } from "src/database/repositories/student.repository";
import { Repository } from "typeorm";

@Injectable()
export class StudentGuard implements CanActivate {
    constructor
    (
        private readonly authService: AuthService,
        @InjectRepository(StudentRepository)
        private readonly studentRepository: Repository<Student>
    ) {}

    async canActivate(context: ExecutionContext) {
        try {
            const request = context.switchToHttp().getRequest();
            const authorizationHeaders = request.headers['authorization'];
            const bearerToken = authorizationHeaders.split(' ')[1];

            if(!authorizationHeaders || !bearerToken) {
                throw new Error();
            }

            const tokenPayload = await this.authService.validateToken(bearerToken);
            const { studentId } = tokenPayload;

            if(!studentId) {
                throw new Error();
            }
            const existingStudent = await this.studentRepository.findOne({ id: studentId });

            if(!existingStudent) {
                throw new Error();
            }

            request.params.userData = {...existingStudent};
            return true;

        } catch (error) {
            throw new UnauthorizedException();
        }
    }
}