import { Logger, Req, UseGuards } from '@nestjs/common';
import { Body, Controller, Get, Post, Response } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from '../core/services/auth.service';

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) { }

  @Get('get-occupation')
  public async getUserOccupation(@Req() req: Request): Promise<any> {
    const occupation = await this.authService.getUserOccupation(req);
    return occupation;
  }

  @Post('teacher-register')
  public async teacherRegister(@Body() body: any): Promise<void> {
    const { username, password, email } = body;
    await this.authService.registerTeacher(username, password, email);
  }

  @Post('teacher-login')
  public async teacherLogin(@Body() body: any): Promise<any> {
    const { username, password } = body;
    const token = await this.authService.loginTeacher(username, password);

    if (token) {
      return { tokenId: token };
    }

    return null;
  }

  @Post('student-register')
  public async studentRegister(@Body() body: any): Promise<void> {
    const { username, email, facultyNumber, password } = body;
    await this.authService.registerStudent(username, email, facultyNumber, password);
  }

  @Post('student-login')
  public async studentLogin(@Body() body: any): Promise<any> {
    const { username, password } = body;
    const token = await this.authService.loginStudent(username, password);

    if (token) {
      return { tokenId: token };
    }

    return null;
  }

}
