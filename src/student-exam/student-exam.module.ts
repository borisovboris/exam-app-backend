import { Module } from '@nestjs/common';
import { CoreModule } from 'src/core/core.module';
import { StudentExamController } from './student-exam.controller';

@Module({
  controllers: [ StudentExamController ],
  imports: [ CoreModule ]
})
export class StudentExamModule {}
