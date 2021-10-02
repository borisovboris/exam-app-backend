import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Choice } from 'src/database/entities/choice.entity';
import { ChoiceRepository } from 'src/database/repositories/choice.repository';
import { Exam } from 'src/database/entities/exam.entity';
import { ExamRepository } from 'src/database/repositories/exam.repository';
import { Question } from 'src/database/entities/question.entity';
import { QuestionRepository } from 'src/database/repositories/question.repository';
import { Student } from 'src/database/entities/student.entity';
import { StudentRepository } from 'src/database/repositories/student.repository';
import { Subject } from 'src/database/entities/subject.entity';
import { SubjectRepository } from 'src/database/repositories/subject.repository';
import { Teacher } from 'src/database/entities/teacher.entity';
import { TeacherRepository } from 'src/database/repositories/teacher.repository';
import { Topic } from 'src/database/entities/topic.entity';
import { TopicRepository } from 'src/database/repositories/topic.repository';
import { SessionRepository } from 'src/database/repositories/session.repository';
import { Session } from './entities/session.entity';
import { StudentAnswer } from './entities/student-answer.entity';
import { StudentAnswerRepository } from 'src/database/repositories/student-answer.repository';
import { StudentExam } from './entities/student-exam.entity';
import { StudentExamRepository } from 'src/database/repositories/student-exam.repository';
import { StudentChoice } from './entities/student-choice.entity';
import { StudentChoiceRepository } from 'src/database/repositories/student-choice.repository';
import { SessionChoice } from './entities/session-choice.entity';
import { SessionChoiceRepository } from 'src/database/repositories/session-choice.repository';
import { SessionQuestion } from './entities/session-question.entity';
import { SessionQuestionRepository } from 'src/database/repositories/session-question.repository';
import { QuestionType } from './entities/question-type.entity';
import { QuestionTypeRepository } from './repositories/question-type.repository';

@Module({
    imports: [TypeOrmModule.forFeature
        ([
        Subject, SubjectRepository, 
        Teacher, TeacherRepository,
        Student, StudentRepository,
        Topic, TopicRepository,
        Question, QuestionRepository,
        QuestionType, QuestionTypeRepository,
        Choice, ChoiceRepository,
        Exam, ExamRepository,
        Session, SessionRepository,
        SessionChoice, SessionChoiceRepository,
        SessionQuestion, SessionQuestionRepository,
        StudentAnswer, StudentAnswerRepository,
        StudentExam, StudentExamRepository,
        StudentChoice, StudentChoiceRepository
        ]),
    ],
    exports: [
        TypeOrmModule
    ]
})
export class DatabaseModule {  
}
