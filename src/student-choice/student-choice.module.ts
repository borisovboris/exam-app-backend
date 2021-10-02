import { Module } from '@nestjs/common';
import { CoreModule } from 'src/core/core.module';
import { SharedModule } from 'src/shared/shared.module';
import { StudentChoiceController } from './student-choice.controller';

@Module({
  controllers: [ StudentChoiceController ],
  imports: [ CoreModule, SharedModule ]
})
export class StudentChoiceModule {}
