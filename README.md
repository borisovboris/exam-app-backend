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
          <a href="#database">Database</a>
     </li>
     <li>
          <a href="#routes">Routes</a>
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

## Database

![database](https://user-images.githubusercontent.com/54534596/135744765-0e2a176e-efab-4adb-b01a-52684068cdef.png)

## Routes

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
* Implementing refresh token functionality
* Implementing token blacklist functionality
* Adding a global exception handler 

## Acknowledgements
* [bcrypt](https://www.npmjs.com/package/bcrypt)
* [typeorm-uml](https://www.npmjs.com/package/typeorm-uml)
