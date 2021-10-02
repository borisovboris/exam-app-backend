import { Module } from '@nestjs/common';
import { CoreModule } from 'src/core/core.module';
import { StudentController } from './student.controller';

@Module({
  imports: [ CoreModule ],
  providers: [],
  controllers: [StudentController]
})
export class StudentModule {}
