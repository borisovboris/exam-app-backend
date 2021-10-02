import { Module } from '@nestjs/common';
import { CoreModule } from 'src/core/core.module';
import { SharedModule } from 'src/shared/shared.module';
import { StudentAnswerController } from './student-answer.controller';

@Module({
  controllers: [StudentAnswerController],
  imports: [ CoreModule, SharedModule ]
})
export class StudentAnswerModule {}
