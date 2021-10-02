import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ExamStatsService } from './services/exam-stats.service';

@Module({
    imports: [ DatabaseModule ],
    providers: [ ExamStatsService ],
    exports: [ ExamStatsService ],
})
export class SharedModule {}
