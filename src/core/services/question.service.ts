import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Choice } from 'src/database/entities/choice.entity';
import { QuestionType } from 'src/database/entities/question-type.entity';
import { Question } from 'src/database/entities/question.entity';
import { Topic } from 'src/database/entities/topic.entity';
import { Repository } from 'typeorm';
import { QuestionTypes } from '../enums';

@Injectable()
export class QuestionService {

    constructor
    (
        @InjectRepository(Question)
        private readonly questionRepository: Repository<Question>,
        @InjectRepository(Choice)
        private readonly choiceRepository: Repository<Choice>,
        @InjectRepository(Topic)
        private readonly topicRepository: Repository<Topic>,
        @InjectRepository(QuestionType)
        private readonly questionTypeRepository: Repository<QuestionType>
    ) {}

    public async createQuestion(data: any): Promise<void> {
        const { title, type, topicId, choices, maxPoints } = data;
        const questionType = await this.questionTypeRepository.findOne({ type });

        const topic = await this.topicRepository.findOne({ id: topicId });
        const newQuestion = await this.questionRepository.save(
            Object.assign(new Question(), 
            { 
                title, 
                questionType, 
                maxPoints, 
                topic })
        );

        if(type === QuestionTypes.Closed) {
            for(const choice of choices ) {
                const newChoice = await Object.assign(new Choice(), choice);
                newChoice.question = newQuestion;
                await this.choiceRepository.save(newChoice);
            }
        }
    }

    public async getQuestion(questionId: number): Promise<Question> {
        const question = await this.questionRepository
        .createQueryBuilder('question')
        .select(['question', 'questionType.type', 'choice'])
        .where('question.id = :qid', { qid: questionId })
        .leftJoin('question.questionType', 'questionType')
        .leftJoin('question.choices', 'choice')
        .getOne();

        return question;
    }

    public async deleteQuestion(questionId: number) {
        await this.questionRepository
        .createQueryBuilder()
        .delete()
        .from(Question)
        .where("id = :id", { id: questionId })
        .execute();
    }
}
