import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/auth/jwt/jwt.constants';
import { DatabaseModule } from 'src/database/database.module';
import { SharedModule } from 'src/shared/shared.module';
import { AuthService } from './services/auth.service';
import { DbUpsert } from './services/db-upsert.service';
import { ExamService } from './services/exam.service';
import { QuestionTypeService } from './services/question-type.service';
import { QuestionService } from './services/question.service';
import { SessionService } from './services/session.service';
import { StudentAnswerService } from './services/student-answer.service';
import { StudentChoiceService } from './services/student-choice.service';
import { StudentExamService } from './services/student-exam.service';
import { StudentService } from './services/student.service';
import { SubjectService } from './services/subject.service';
import { TeacherService } from './services/teacher.service';
import { TopicService } from './services/topic.service';

@Module({
    imports: [
        DatabaseModule,
        SharedModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '36000s'}
        }),
    ],
    providers: [
        AuthService, 
        SubjectService, 
        TeacherService, 
        StudentService, 
        TopicService,
        QuestionService,
        ExamService,
        SessionService,
        StudentExamService,
        StudentChoiceService,
        StudentAnswerService,
        DbUpsert,
        QuestionTypeService
    ],
    exports: [
        AuthService, 
        SubjectService, 
        TeacherService, 
        StudentService, 
        TopicService,
        QuestionService,
        ExamService,
        SessionService,
        StudentExamService,
        StudentChoiceService,
        StudentAnswerService,
        DbUpsert,
        QuestionTypeService,
        // Database module is exported from core module, so any module which imports core module
        // can also use the database one as well
        DatabaseModule
    ]
})
export class CoreModule {}
