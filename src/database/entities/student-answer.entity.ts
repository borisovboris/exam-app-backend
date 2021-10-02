import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { SessionQuestion } from "./session-question.entity";
import { StudentExam } from "./student-exam.entity";

@Entity({ name: 'student_answer' })
@Index(['studentExam', 'sessionQuestion'], { unique: true })
export class StudentAnswer {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 1502, default: '' })
    text: string;

    @Column({ name: 'earned_points'})
    earnedPoints: number;

    @ManyToOne(type => StudentExam, studentExam => studentExam.studentAnswers, 
        { cascade: true, nullable: false, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'student_exam_id' })
    studentExam: StudentExam;

    @ManyToOne(Type => SessionQuestion, sessionQuestion => sessionQuestion.studentChoices, 
        { cascade: true, nullable: false, onDelete: 'CASCADE' })
    @JoinColumn({ name: 'session_question_id' })
    sessionQuestion: SessionQuestion;

}