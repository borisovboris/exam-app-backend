import { Module } from '@nestjs/common';
import { CoreModule } from 'src/core/core.module';
import { TopicController } from './topic.controller';

@Module({
  controllers: [TopicController],
  imports: [ CoreModule ]
})
export class TopicModule {}
