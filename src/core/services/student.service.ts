import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/database/entities/student.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Subject } from '../../database/entities/subject.entity';
import { ExamStatsService } from 'src/shared/services/exam-stats.service';
import { ExamStatuses } from '../enums';
import { StudentExam } from 'src/database/entities/student-exam.entity';


@Injectable()
export class StudentService {

    constructor(
        @InjectRepository(Student)
        private readonly studentRepository: Repository<Student>,
        private readonly examStatsService: ExamStatsService,
        @InjectRepository(StudentExam)
        private readonly studentExamRepository: Repository<StudentExam>
    ) { }

    public async comparePasswords(clientUsername: string, clientPassword: string): Promise<boolean> {
        const dbPassword = await this.getStudentPassword(clientUsername);
        const passwordMatch = await bcrypt.compare(clientPassword, dbPassword);

        return passwordMatch;
    }

    private async getStudentPassword(username: string): Promise<string> {
        const student = await this.studentRepository
        .createQueryBuilder('student')
        .select(['student.password'])
        .where('student.username = :u', { u: username })
        .getOne();

        return student.password;
    }

    public async getStudentSubjects(studentId): Promise<Subject[]> {
        const student = await this.studentRepository
            .createQueryBuilder('student')
            .select(['student.id', 'subject.id', 'subject.name', 'subject.createdAt', 'creator.username'])
            .innerJoin('student.subjects', 'subject')
            .innerJoin('subject.creator', 'creator')
            .innerJoin('subject.students', 'subjectStudent')
            .where('subjectStudent.id = :sid', { sid: studentId })
            .getOne();

        return student?.subjects;
    }


    public async getStudentSubjectExams(studentId: number, subjectId: number): Promise<any> { 

        const exams = await this.studentExamRepository
        .createQueryBuilder('studentExam')
        .select(['studentExam', 'teacher.username', 'session', 'subject.name'])
        .leftJoin('studentExam.student', 'student')
        .leftJoin('studentExam.session', 'session')
        .leftJoin('session.subject', 'subject')
        .leftJoin('session.teacher', 'teacher')
        .where('student.id = :stid', { stid: studentId })
        .andWhere('subject.id = :suid', { suid: subjectId })
        .orderBy('session.startTime', 'DESC')
        .getMany();

        const studentExams = await Promise.all(exams
                .map(async (exam) => {
                const status = this.examStatsService.getExamStatus(
                    exam.session.startTime,
                    exam.session.endTime
                );

                const processedExam = {
                    id: exam.id,
                    sessionName: exam.session.name,
                    teacher: exam.session.teacher.username,
                    subjectName: exam.session.subject.name,
                    startTime: exam.session.startTime,
                    totalEarnedPoints: null,
                    totalMaxPoints: null,
                    status
                };

                if (processedExam.status === ExamStatuses.Closed) {
                    const { totalEarnedPoints, totalMaxPoints } = await this.examStatsService.getExamPoints(
                        exam.id,
                        exam.session.id
                    );
                    processedExam.totalEarnedPoints = totalEarnedPoints;
                    processedExam.totalMaxPoints = totalMaxPoints;
                }

                return processedExam;

            })
        );
       
        return studentExams;
    }

}
