import { Module } from '@nestjs/common';
import { CoreModule } from 'src/core/core.module';
import { TeacherController } from './teacher.controller';

@Module({
  imports: [ CoreModule ],
  providers: [],
  controllers: [ TeacherController ]
})
export class TeacherModule {}
