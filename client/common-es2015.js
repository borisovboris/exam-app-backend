(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "Hnr2":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/student-answer.service.ts ***!
  \***********************************************************/
/*! exports provided: StudentAnswerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentAnswerService", function() { return StudentAnswerService; });
/* harmony import */ var src_app_core_app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/app-settings */ "1uUP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class StudentAnswerService {
    constructor(http) {
        this.http = http;
        this.baseUrl = `${src_app_core_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"].API_ENDPOINT}/student-answers`;
    }
    giveAnswer(studentAnswerText, studentExamId, sessionQuestionId) {
        return this.http.post(`${this.baseUrl}/give-answer`, {
            studentAnswerText,
            studentExamId,
            sessionQuestionId
        });
    }
    assessAnswer(earnedPoints, studentAnswerId) {
        return this.http.post(`${this.baseUrl}/assess`, { earnedPoints, studentAnswerId });
    }
}
StudentAnswerService.ɵfac = function StudentAnswerService_Factory(t) { return new (t || StudentAnswerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
StudentAnswerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: StudentAnswerService, factory: StudentAnswerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Z/Et":
/*!***************************************************!*\
  !*** ./src/app/teacher/services/topic.service.ts ***!
  \***************************************************/
/*! exports provided: TopicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicService", function() { return TopicService; });
/* harmony import */ var src_app_core_app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/app-settings */ "1uUP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class TopicService {
    constructor(http) {
        this.http = http;
        this.baseUrl = `${src_app_core_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"].API_ENDPOINT}/topics`;
    }
    createTopic(name, subjectId) {
        return this.http.post(`${this.baseUrl}/add`, { name, subjectId });
    }
    editTopic(topicId, name) {
        return this.http.patch(`${this.baseUrl}/${topicId}`, { name });
    }
    getTopic(topicId) {
        return this.http.get(`${this.baseUrl}/${topicId}`);
    }
    getTopicQuestions(topicId) {
        return this.http.get(`${this.baseUrl}/${topicId}/questions`);
    }
    deleteTopic(topicId) {
        return this.http.delete(`${this.baseUrl}/${topicId}`);
    }
}
TopicService.ɵfac = function TopicService_Factory(t) { return new (t || TopicService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
TopicService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TopicService, factory: TopicService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "tyMg":
/*!**********************************************************!*\
  !*** ./src/app/teacher/services/student-exam.service.ts ***!
  \**********************************************************/
/*! exports provided: StudentExamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentExamService", function() { return StudentExamService; });
/* harmony import */ var src_app_core_app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/app-settings */ "1uUP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class StudentExamService {
    constructor(http) {
        this.http = http;
        this.baseUrl = `${src_app_core_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"].API_ENDPOINT}/student-exams`;
    }
    getStudentExamQuestionsTeacher(studentExamId) {
        return this.http.get(`${this.baseUrl}/${studentExamId}/teacher`);
    }
    getStudentExamQuestionsStudent(studentExamId) {
        return this.http.get(`${this.baseUrl}/${studentExamId}/student`);
    }
    getStudentExam(studentExamId) {
        return this.http.get(`${this.baseUrl}/${studentExamId}`);
    }
}
StudentExamService.ɵfac = function StudentExamService_Factory(t) { return new (t || StudentExamService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
StudentExamService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: StudentExamService, factory: StudentExamService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map