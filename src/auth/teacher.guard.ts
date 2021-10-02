import { 
    Injectable, 
    CanActivate, 
    ExecutionContext, 
    Logger, 
    HttpException, 
    HttpStatus, 
    UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Teacher } from 'src/database/entities/teacher.entity';
import { TeacherRepository } from 'src/database/repositories/teacher.repository';
import { Repository } from 'typeorm';

import { AuthService } from '../core/services/auth.service';
// this guard is used to authenticate a teacher and attach their info to
// the request object
@Injectable()
export class TeacherGuard implements CanActivate {
    constructor(
        private readonly authService: AuthService,
        @InjectRepository(TeacherRepository)
        private readonly teacherRepository: Repository<Teacher>
        ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        try {
            const request = context.switchToHttp().getRequest();
            const authorizationHeaders = request.headers["authorization"];
            const bearerToken = authorizationHeaders.split(' ')[1];
            
            if(!authorizationHeaders || !bearerToken) {
                throw new Error();
            }
    
            const tokenPayload = await this.authService.validateToken(bearerToken);
            const { teacherId } = tokenPayload;

            if(!teacherId) {
                throw new Error();
            }
            
            const existingUser = await this.teacherRepository.findOne({ id: teacherId });

            if(!existingUser) {
                throw new Error();
            }

            request.params.userData = { ...existingUser };
            return true;

        } catch (error) {
            throw new UnauthorizedException();
        }
    }
}