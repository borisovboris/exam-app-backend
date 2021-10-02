import { Module } from '@nestjs/common';
import { CoreModule } from 'src/core/core.module';
import { QuestionTypeController } from './question-type.controller';

@Module({
  controllers: [QuestionTypeController],
  imports: [CoreModule]
})
export class QuestionTypeModule {}
