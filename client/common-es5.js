(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "Hnr2":
    /*!***********************************************************!*\
      !*** ./src/app/shared/services/student-answer.service.ts ***!
      \***********************************************************/

    /*! exports provided: StudentAnswerService */

    /***/
    function Hnr2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StudentAnswerService", function () {
        return StudentAnswerService;
      });
      /* harmony import */


      var src_app_core_app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/core/app-settings */
      "1uUP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var StudentAnswerService = /*#__PURE__*/function () {
        function StudentAnswerService(http) {
          _classCallCheck(this, StudentAnswerService);

          this.http = http;
          this.baseUrl = "".concat(src_app_core_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"].API_ENDPOINT, "/student-answers");
        }

        _createClass(StudentAnswerService, [{
          key: "giveAnswer",
          value: function giveAnswer(studentAnswerText, studentExamId, sessionQuestionId) {
            return this.http.post("".concat(this.baseUrl, "/give-answer"), {
              studentAnswerText: studentAnswerText,
              studentExamId: studentExamId,
              sessionQuestionId: sessionQuestionId
            });
          }
        }, {
          key: "assessAnswer",
          value: function assessAnswer(earnedPoints, studentAnswerId) {
            return this.http.post("".concat(this.baseUrl, "/assess"), {
              earnedPoints: earnedPoints,
              studentAnswerId: studentAnswerId
            });
          }
        }]);

        return StudentAnswerService;
      }();

      StudentAnswerService.ɵfac = function StudentAnswerService_Factory(t) {
        return new (t || StudentAnswerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      StudentAnswerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: StudentAnswerService,
        factory: StudentAnswerService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "Z/Et":
    /*!***************************************************!*\
      !*** ./src/app/teacher/services/topic.service.ts ***!
      \***************************************************/

    /*! exports provided: TopicService */

    /***/
    function ZEt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TopicService", function () {
        return TopicService;
      });
      /* harmony import */


      var src_app_core_app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/core/app-settings */
      "1uUP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var TopicService = /*#__PURE__*/function () {
        function TopicService(http) {
          _classCallCheck(this, TopicService);

          this.http = http;
          this.baseUrl = "".concat(src_app_core_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"].API_ENDPOINT, "/topics");
        }

        _createClass(TopicService, [{
          key: "createTopic",
          value: function createTopic(name, subjectId) {
            return this.http.post("".concat(this.baseUrl, "/add"), {
              name: name,
              subjectId: subjectId
            });
          }
        }, {
          key: "editTopic",
          value: function editTopic(topicId, name) {
            return this.http.patch("".concat(this.baseUrl, "/").concat(topicId), {
              name: name
            });
          }
        }, {
          key: "getTopic",
          value: function getTopic(topicId) {
            return this.http.get("".concat(this.baseUrl, "/").concat(topicId));
          }
        }, {
          key: "getTopicQuestions",
          value: function getTopicQuestions(topicId) {
            return this.http.get("".concat(this.baseUrl, "/").concat(topicId, "/questions"));
          }
        }, {
          key: "deleteTopic",
          value: function deleteTopic(topicId) {
            return this.http["delete"]("".concat(this.baseUrl, "/").concat(topicId));
          }
        }]);

        return TopicService;
      }();

      TopicService.ɵfac = function TopicService_Factory(t) {
        return new (t || TopicService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      TopicService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: TopicService,
        factory: TopicService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "tyMg":
    /*!**********************************************************!*\
      !*** ./src/app/teacher/services/student-exam.service.ts ***!
      \**********************************************************/

    /*! exports provided: StudentExamService */

    /***/
    function tyMg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StudentExamService", function () {
        return StudentExamService;
      });
      /* harmony import */


      var src_app_core_app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/core/app-settings */
      "1uUP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var StudentExamService = /*#__PURE__*/function () {
        function StudentExamService(http) {
          _classCallCheck(this, StudentExamService);

          this.http = http;
          this.baseUrl = "".concat(src_app_core_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"].API_ENDPOINT, "/student-exams");
        }

        _createClass(StudentExamService, [{
          key: "getStudentExamQuestionsTeacher",
          value: function getStudentExamQuestionsTeacher(studentExamId) {
            return this.http.get("".concat(this.baseUrl, "/").concat(studentExamId, "/teacher"));
          }
        }, {
          key: "getStudentExamQuestionsStudent",
          value: function getStudentExamQuestionsStudent(studentExamId) {
            return this.http.get("".concat(this.baseUrl, "/").concat(studentExamId, "/student"));
          }
        }, {
          key: "getStudentExam",
          value: function getStudentExam(studentExamId) {
            return this.http.get("".concat(this.baseUrl, "/").concat(studentExamId));
          }
        }]);

        return StudentExamService;
      }();

      StudentExamService.ɵfac = function StudentExamService_Factory(t) {
        return new (t || StudentExamService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      StudentExamService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: StudentExamService,
        factory: StudentExamService.ɵfac,
        providedIn: 'root'
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map