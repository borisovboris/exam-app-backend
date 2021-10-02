import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Subject } from 'src/database/entities/subject.entity';
import { Topic } from 'src/database/entities/topic.entity';
import { Repository } from 'typeorm';
import { Question } from '../../database/entities/question.entity';

@Injectable()
export class TopicService {

    constructor
        (
            @InjectRepository(Topic)
            private readonly topicRepository: Repository<Topic>,
            @InjectRepository(Subject)
            private readonly subjectRepository: Repository<Subject>
        ) { }

    public async getTopic(topicId: number): Promise<Topic> {
        const topic = await this.topicRepository
        .createQueryBuilder('topic')
        .select(['topic.id', 'topic.name'])
        .where('topic.id = :tid', { tid: topicId })
        .getOne();

        return topic;
    }

    public async editTopic(topicId: number, name: string): Promise<void> {
        await this.topicRepository
        .createQueryBuilder()
        .update(Topic)
        .set({ name })
        .where("id = :tid", { tid: topicId })
        .execute();
    }

    public async addTopicToSubject(name: string, subjectId: number): Promise<void> {
        const subject = await this.subjectRepository.findOne({ id: subjectId });
        await this.topicRepository.save(
            Object.assign(new Topic(), { name, subject })
        );
    }

    public async getTopicQuestions(topicId): Promise<Question[]> {
        const topic = await this.topicRepository
        .createQueryBuilder('topic')
        .select(['topic.id', 'question.id', 'question.title', 'questionType.type'])
        .where('topic.id = :tid', { tid: topicId })
        .leftJoin('topic.questions', 'question')
        .leftJoin('question.questionType', 'questionType')
        .getOne();

        return topic.questions;
    }

    public async deleteTopic(topicId: number): Promise<void> {
        await this.topicRepository
            .createQueryBuilder()
            .delete()
            .from(Topic)
            .where("id = :id", { id: topicId })
            .execute();
    }
}
