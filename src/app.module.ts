import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeacherModule } from './teacher/teacher.module';
import { AuthModule } from './auth/auth.module';
import { SubjectModule } from './subject/subject.module';
import { StudentModule } from './student/student.module';
import { DatabaseModule } from './database/database.module';
import { TopicModule } from './topic/topic.module';
import { QuestionModule } from './question/question.module';
import { AnswerModule } from './choice/choice.module';
import { ExamModule } from './exam/exam.module';
import { SessionModule } from './session/session.module';
import { StudentExamModule } from './student-exam/student-exam.module';
import { StudentAnswerModule } from './student-answer/student-answer.module';
import { StudentChoiceModule } from './student-choice/student-choice.module';
import { SessionQuestionModule } from './session-question/session-question.module';
import { SessionChoiceModule } from './session-choice/session-choice.module';
import { CoreModule } from './core/core.module';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './core/filters/all-exceptions.filter';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { QuestionTypeModule } from './question-type/question-type.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'exam_app',
    entities: ["dist/**/*.entity{.ts,.js}"],
    autoLoadEntities: true,
    synchronize: true,
    logging: true
  }),
  ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'client')
  }),
    DatabaseModule,
    TeacherModule,
    AuthModule,
    SubjectModule,
    StudentModule,
    TopicModule,
    QuestionModule,
    AnswerModule,
    ExamModule,
    SessionModule,
    StudentExamModule,
    StudentAnswerModule,
    StudentChoiceModule,
    SessionQuestionModule,
    SessionChoiceModule,
    CoreModule,
    QuestionTypeModule],
  controllers: [AppController],
  providers: [
    AppService
  ],
})
export class AppModule { }
