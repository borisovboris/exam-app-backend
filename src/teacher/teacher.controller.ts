import { Body, Controller, Get, Param, Post, Req, UnauthorizedException, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { TeacherGuard } from 'src/auth/teacher.guard';
import { Subject } from 'src/database/entities/subject.entity';
import { TeacherService } from '../core/services/teacher.service';

@UseGuards(TeacherGuard)
@Controller('teachers')
export class TeacherController {
   constructor(
       private readonly teacherService: TeacherService,
    ) {}

    @Get('subjects')
    public async getSubjects(@Req() req: Request): Promise<Subject[]> {
        const userData = req.params.userData;
        const userId = userData["id"];
        const userSubjects = await this.teacherService.getTeacherSubjects(userId);
        return userSubjects;
    }
    
}
