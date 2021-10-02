import { Module } from '@nestjs/common';
import { CoreModule } from 'src/core/core.module';
import { SubjectController } from './subject.controller';

@Module({
  imports: [ CoreModule ],
  providers: [],
  controllers: [SubjectController],
  exports: []
})
export class SubjectModule {

}
