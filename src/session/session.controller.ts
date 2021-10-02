import { Body, Controller, Get, Logger, Param, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { TeacherGuard } from 'src/auth/teacher.guard';
import { SessionService } from 'src/core/services/session.service';
import { Session } from 'src/database/entities/session.entity';

@UseGuards(TeacherGuard)
@Controller('sessions')
export class SessionController {

    constructor
    (
        private readonly sessionService: SessionService
    ) { }


    @Get(':sessionId/student-exams')
    public async getSessionStudentExams(@Param() params: any): Promise<any> {
        const sessionId = params.sessionId;
        const studentExams = await this.sessionService.getSessionStudentExams(sessionId);
        return studentExams;
    }

    @Get(':sessionId')
    public async getSession(@Param() params: any): Promise<Session> {
        const sessionId = params.sessionId;
        const session = await this.sessionService.getSession(sessionId);
        return session;
    }
    
    @Post()
    public async createSession(@Body() body, @Req() req: Request): Promise<void> {
        const userData = req.params.userData;
        const userId = userData["id"];
        this.sessionService.createSession(body, userId);
    }
}
