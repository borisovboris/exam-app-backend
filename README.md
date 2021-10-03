<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
          <a href="#about-exam-app">About exam-app</a>
    </li>
     <li>
          <a href="#used-technologies">Used Technologies</a>
     </li>
     <li>
          <a href="#database-diagram">Database Diagram</a>
     </li>
     <li>
          <a href="#routes-table">Routes Table</a>
     </li> 
     <li>
          <a href="#installation">Installation</a>
     </li> 
     <li>
          <a href="#running-the-app">Running the app</a>
     </li> 
     <li>
          <a href="#future-work">Future Work</a>
     </li> 
     <li>
          <a href="#acknowledgements">Acknowledgements</a>
     </li> 
    
  </ol>
</details>

## About exam-app

This is an online exam platform that allows teachers and students to create accounts. Teachers can create subjects and a subject can have topics with different questions. A question is of an open (essay) or closed (multiple choice) type. When exams are created, a question can be reused in multiple exams. Teachers can add students to their subjects to test them. Furthermore teachers can add other teachers to their subject, to assist them. A session can be started by a teacher, where a selected exam is used to test selected students. The application assesses closed questions automatically, and answers to open questions are manually graded by teachers.

## Used Technologies
* [NestJS](https://nestjs.com/)
* [TypeORM](https://typeorm.io/#/)
* [MySQL](https://www.mysql.com/)

## Database Diagram

![database](https://user-images.githubusercontent.com/54534596/135744765-0e2a176e-efab-4adb-b01a-52684068cdef.png)

## Routes Table

URL | Method | Description
---------|---------|---------
auth/get-occupation | GET | Returns if a user is a teacher or student
auth/teacher-register | POST | Registers a teacher
auth/teacher-login | POST | Logs a teacher 
auth/student-register | POST | Registers a student
auth/student-login | POST | Logs a student
exams | POST | Creates an exam
exams/:examId | GET | Returns the info of an exam
exams/:examId | PATCH | Edits an exam
exams/:examId | DELETE | Deletes an exam
exams/:examId/questions | GET | Returns the questions of an exam
exams/add-question | POST | Adds a question to an exam
exams/:examId/remove-question/:questionId | POST | Removes a question from an exam
questions | POST | Creates a question
questions/:questionId | GET | Gets the details of a question
questions/:questionId | DELETE | Delete a question
question-types | GET | Returns the types of a question
sessions | POST | Creates a session
sessions/:sessionId | GET | Returns the details of a session
sessions/:sessionId/student-exams | GET | Returns all the student exams in a session
students/subjects | GET | Returns the subjects of a student
students/subject/:id/exams | GET | Returns the student exams for a particular subject
student-answers/assess | POST | Assesses a student answer to an open question
student-answers/give-answer | POST | Lets a student give answer to a question
student-choices/select-choice | POST | Selects/deselects a choice of a closed question
student-exams/:studentExamId | GET | Gets the details of a student exam
student-exams/:studentExamId/teacher | GET | Gets the questions of a student exam for a teacher
student-exams/:studentExamId/student | GET | Gets the questions of a student exam for a student
subjects | POST | Creates a subject
subjects/:subjectId | GET | Gets the details of a subject
subjects/:subjectId | PATCH | Edits a subject 
subjects/:subjectId | DELETE | Deletes a subject
subjects/:subjectId/exams | GET | Returns the exams of a subject
subjects/:subjectId/topics | GET | Returns the topics of a subject
subjects/:subjectId/teachers | GET | Returns the teachers of a subject
subjects/:subjectId/students | GET | Returns the students of a subject
subjects/:subjectId/sessions | GET | Returns the sessions of a subject
subjects/:subjectId/search-teachers/:criterion | GET | Searches for particular teachers that aren't in the subject
subjects/:subjectId/search-students/:criterion | GET | Searches for particular students that aren't in the subject
subjects/add-student-to-subject | POST | Adds a student to a subject
subjects/remove-student-from-subject | POST | Removes a student from a subject
subjects/add-teacher-to-subject | POST | Adds a teacher to a subject
subjects/remove-teacher-from-subject | POST | Removes a teacher from a subject
teachers/subjects | GET | Returns the subjects of a teacher
topics/add | POST | Creates a topic
topics/:topicId | GET | Returns the details of a topic
topics/:topicId | PATCH | Edits a topic
topics/:topicId | DELETE | Deletes a topic
topics/:topicId/questions | GET | Returns the questions of a topic







## Installation

```bash
$ npm install
```

## Running the app
The app runs on port 5000. If you want to change the port number, you can do it in **main.ts**.

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Future Work
* Refactoring complex functions in smaller functions
* Changing folder structure 
* Writing guards for particular routes 
* Implementing refresh tokens functionality
* Implementing token blacklist functionality
* Adding a global exception handler 

## Acknowledgements
* [bcrypt](https://www.npmjs.com/package/bcrypt)
* [typeorm-uml](https://www.npmjs.com/package/typeorm-uml)
