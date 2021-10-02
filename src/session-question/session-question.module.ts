import { Module } from '@nestjs/common';
import { SessionQuestionController } from './session-question.controller';

@Module({
  controllers: [ SessionQuestionController ]
})
export class SessionQuestionModule {}
