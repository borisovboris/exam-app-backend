
import { Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { SessionChoice } from "./session-choice.entity";
import { SessionQuestion } from "./session-question.entity";
import { StudentExam } from "./student-exam.entity";

@Entity({ name: 'student_choice' })
@Index(['studentExam', 'sessionQuestion', 'sessionChoice'], { unique: true })
export class StudentChoice {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => StudentExam, studentExam => studentExam.studentChoices, 
        { cascade: true, nullable: false, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'student_exam_id' })
    studentExam: StudentExam;

    @ManyToOne(Type => SessionQuestion, sessionQuestion => sessionQuestion.studentChoices, 
        { cascade: true, nullable: false, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'session_question_id' })
    sessionQuestion: SessionQuestion;

    @ManyToOne(Type => SessionChoice, sessionChoice => sessionChoice.studentChoices, 
        { cascade: true, nullable: false, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'session_choice_id' })
    sessionChoice: SessionChoice;
    
}