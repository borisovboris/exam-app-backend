import { Module } from '@nestjs/common';
import { CoreModule } from 'src/core/core.module';
import { QuestionController } from './question.controller';

@Module({
  imports: [ CoreModule ],
  controllers: [QuestionController],
  providers: []
})
export class QuestionModule {}
