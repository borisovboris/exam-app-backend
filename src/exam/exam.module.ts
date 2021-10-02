import { Module } from '@nestjs/common';
import { CoreModule } from 'src/core/core.module';
import { ExamController } from './exam.controller';

@Module({
  imports: [ CoreModule ],
  controllers: [ExamController],
  providers: []
})
export class ExamModule {}
