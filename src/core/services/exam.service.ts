import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Exam } from 'src/database/entities/exam.entity';
import { Question } from 'src/database/entities/question.entity';
import { Subject } from 'src/database/entities/subject.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ExamService {
   
    constructor(
        @InjectRepository(Exam)
        private readonly examRepository: Repository<Exam>,
        @InjectRepository(Subject)
        private readonly subjectRepository: Repository<Subject>,
        @InjectRepository(Question)
        private readonly questionRepository: Repository<Question>
        
    ) {
    }

    public async createExam(name: string, subjectId: number): Promise<void> {
        const exam = Object.assign(new Exam(), { name });
        const subject = await this.subjectRepository.findOne({ id: subjectId });
        exam.subject = subject;
        await this.examRepository.save(exam);
        return;
    }

    public async editExam(examId: number, name: string): Promise<void> {
        await this.examRepository
        .createQueryBuilder()
        .update(Exam)
        .set({ name })
        .where("id = :eid", { eid: examId })
        .execute();
    }
    
    public async getExam(examId: number): Promise<Exam> {
        const exam = await this.examRepository.findOne({id: examId}, {relations: ["questions"]});
        return exam;
    }

    public async addQuestionToExam(examId: number, questionId: number): Promise<void> {
        const exam = await this.examRepository.findOne({ id: examId }, { relations: ["questions"] });
        const questionToAdd = await this.questionRepository.findOne({ id: questionId });
        const questions = exam.questions;
        exam.questions = [...questions, questionToAdd];
        await this.examRepository.save(exam);
        return;
    }

    public async getExamQuestions(examId: number): Promise<Question[]> {
        const exam = await this.examRepository.findOne({ id: examId }, { relations: ['questions', 'questions.choices', 'questions.questionType'] });
        return exam.questions;
    }

    public async removeQuestionFromExam(examId: number, questionId: number): Promise<void> {
        const exam = await this.examRepository.findOne({ id: examId }, { relations: ["questions"] });
        const questions = exam.questions;
        exam.questions = questions.filter(question => question.id != questionId);
        await this.examRepository.save(exam);
    }

    public async deleteExam(examId: number): Promise<void> {
        await this.examRepository
            .createQueryBuilder()
            .delete()
            .from(Exam)
            .where("id = :id", { id: examId })
            .execute();
    }
}
