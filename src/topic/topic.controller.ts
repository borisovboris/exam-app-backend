import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { TeacherGuard } from 'src/auth/teacher.guard';
import { TopicService } from 'src/core/services/topic.service';
import { Question } from 'src/database/entities/question.entity';
import { Topic } from 'src/database/entities/topic.entity';
import { TopicGuard } from 'src/shared/guards/topic.guard';

@UseGuards(TeacherGuard)
@Controller('topics')
export class TopicController {
    constructor(private readonly topicService: TopicService) {}

    @UseGuards(TopicGuard)
    @Get(':topicId')
    public async getTopic(@Param() params: any): Promise<Topic> {
        const topicId = params.topicId;
        const topic = await this.topicService.getTopic(topicId);
        return topic;
    }

    @UseGuards(TopicGuard)
    @Get(':topicId/questions')
    public async getTopicQuestions(@Param() params: any): Promise<Question[]> {
        const topicId = params.topicId;
        const questions = await this.topicService.getTopicQuestions(topicId);
        return questions;
    }

    @Post('add')
    public async createTopic(@Body() body: any): Promise<void>{
        const { name, subjectId } = body;
        await this.topicService.addTopicToSubject(name, subjectId);
    }

    @UseGuards(TopicGuard)
    @Patch(':topicId')
    public async editTopic(@Param() params: any, @Body() body: any): Promise<void> {
        const { topicId } = params;
        const { name } = body;
        await this.topicService.editTopic(topicId, name);
    }

    @UseGuards(TopicGuard)
    @Delete(':topicId')
    public async deleteTopic(@Param() params: any): Promise<void> {
        const { topicId } = params;
        await this.topicService.deleteTopic(topicId);
    }
}
