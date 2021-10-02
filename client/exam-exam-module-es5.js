(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["exam-exam-module"], {
    /***/
    "/n1J":
    /*!*****************************************************!*\
      !*** ./src/app/teacher/exam/exam-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: ExamRoutingModule */

    /***/
    function n1J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExamRoutingModule", function () {
        return ExamRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _add_exam_add_exam_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-exam/add-exam.component */
      "noYO");
      /* harmony import */


      var _exam_details_exam_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./exam-details/exam-details.component */
      "6YzZ");
      /* harmony import */


      var _exam_edit_exam_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./exam-edit/exam-edit.component */
      "3NgO");
      /* harmony import */


      var _exams_exams_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./exams/exams.component */
      "IXjT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL"); // { path: ':id/exams/add-exam', component: AddExamComponent},
      // { path: ':id/exams/:exam-id', component: ExamDetailsComponent},
      // { path: ':id/exams', component: ExamsComponent },


      var routes = [{
        path: '',
        children: [{
          path: 'add',
          component: _add_exam_add_exam_component__WEBPACK_IMPORTED_MODULE_1__["AddExamComponent"]
        }, {
          path: ':exam-id/edit',
          component: _exam_edit_exam_edit_component__WEBPACK_IMPORTED_MODULE_3__["ExamEditComponent"]
        }, {
          path: ':exam-id',
          component: _exam_details_exam_details_component__WEBPACK_IMPORTED_MODULE_2__["ExamDetailsComponent"]
        }, {
          path: '',
          component: _exams_exams_component__WEBPACK_IMPORTED_MODULE_4__["ExamsComponent"],
          pathMatch: 'full'
        }]
      }];

      var ExamRoutingModule = function ExamRoutingModule() {
        _classCallCheck(this, ExamRoutingModule);
      };

      ExamRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: ExamRoutingModule
      });
      ExamRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        factory: function ExamRoutingModule_Factory(t) {
          return new (t || ExamRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ExamRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "3NgO":
    /*!***************************************************************!*\
      !*** ./src/app/teacher/exam/exam-edit/exam-edit.component.ts ***!
      \***************************************************************/

    /*! exports provided: ExamEditComponent */

    /***/
    function NgO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExamEditComponent", function () {
        return ExamEditComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_exam_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/exam.service */
      "oDKH");

      var ExamEditComponent = /*#__PURE__*/function () {
        function ExamEditComponent(fb, route, router, examService) {
          _classCallCheck(this, ExamEditComponent);

          this.fb = fb;
          this.route = route;
          this.router = router;
          this.examService = examService;
          this.examEditForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
          });
          this.subjectId = this.route.snapshot.paramMap.get('subject-id');
          this.examId = this.route.snapshot.paramMap.get('exam-id');
        }

        _createClass(ExamEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.examService.getExam(this.examId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function (exam) {
              var name = exam.name;

              _this.examEditForm.patchValue({
                name: name
              });
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this2 = this;

            if (this.examEditForm.invalid) {
              return;
            }

            var name = this.examEditForm.value.name;
            this.examService.editExam(this.examId, name).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function (data) {
              _this2.router.navigate(["/teacher/subjects/".concat(_this2.subjectId, "/exams")]);
            });
          }
        }]);

        return ExamEditComponent;
      }();

      ExamEditComponent.ɵfac = function ExamEditComponent_Factory(t) {
        return new (t || ExamEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_exam_service__WEBPACK_IMPORTED_MODULE_4__["ExamService"]));
      };

      ExamEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: ExamEditComponent,
        selectors: [["app-exam-edit"]],
        decls: 9,
        vars: 2,
        consts: [[1, "form-wrapper"], [1, "center-form"], [1, "form-box", 3, "formGroup", "ngSubmit"], ["id", "inputs"], ["formControlName", "name", "type", "text", "placeholder", "Name", 1, "blue-input"], ["type", "submit", 1, "hover", "form-blue-button", "bottom-button", 3, "disabled"]],
        template: function ExamEditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ExamEditComponent_Template_form_ngSubmit_2_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Edit exam");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.examEditForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.examEditForm.invalid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtLWVkaXQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "6YzZ":
    /*!*********************************************************************!*\
      !*** ./src/app/teacher/exam/exam-details/exam-details.component.ts ***!
      \*********************************************************************/

    /*! exports provided: ExamDetailsComponent */

    /***/
    function YzZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExamDetailsComponent", function () {
        return ExamDetailsComponent;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_exam_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/exam.service */
      "oDKH");
      /* harmony import */


      var _services_subject_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/subject.service */
      "2rDX");
      /* harmony import */


      var _services_topic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/topic.service */
      "Z/Et");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function ExamDetailsComponent_ng_container_0_ng_container_13_ng_container_1_ng_container_2_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExamDetailsComponent_ng_container_0_ng_container_13_ng_container_1_ng_container_2_ng_container_1_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

            var examQuestion_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

            return ctx_r18.removeQuestion(examQuestion_r13.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Remove");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "textarea", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var i_r14 = ctx_r21.index;
          var examQuestion_r13 = ctx_r21.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", i_r14 + 1, ". ", examQuestion_r13.title, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", examQuestion_r13.maxPoints, " Points)");
        }
      }

      function ExamDetailsComponent_ng_container_0_ng_container_13_ng_container_1_ng_container_2_ng_template_2_li_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var choice_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", choice_r23.text, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", choice_r23.isCorrect, ")");
        }
      }

      function ExamDetailsComponent_ng_container_0_ng_container_13_ng_container_1_ng_container_2_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExamDetailsComponent_ng_container_0_ng_container_13_ng_container_1_ng_container_2_ng_template_2_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);

            var examQuestion_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

            return ctx_r24.removeQuestion(examQuestion_r13.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Remove");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ExamDetailsComponent_ng_container_0_ng_container_13_ng_container_1_ng_container_2_ng_template_2_li_9_Template, 5, 2, "li", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var i_r14 = ctx_r27.index;
          var examQuestion_r13 = ctx_r27.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", i_r14 + 1, ". ", examQuestion_r13.title, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", examQuestion_r13.maxPoints, " Points)");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", examQuestion_r13.choices);
        }
      }

      function ExamDetailsComponent_ng_container_0_ng_container_13_ng_container_1_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ExamDetailsComponent_ng_container_0_ng_container_13_ng_container_1_ng_container_2_ng_container_1_Template, 10, 3, "ng-container", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ExamDetailsComponent_ng_container_0_ng_container_13_ng_container_1_ng_container_2_ng_template_2_Template, 10, 4, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var examQuestion_r13 = ctx.$implicit;

          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", examQuestion_r13.questionType.type === "open")("ngIfElse", _r16);
        }
      }

      function ExamDetailsComponent_ng_container_0_ng_container_13_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ExamDetailsComponent_ng_container_0_ng_container_13_ng_container_1_ng_container_2_Template, 4, 2, "ng-container", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var examQuestions_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", examQuestions_r10);
        }
      }

      function ExamDetailsComponent_ng_container_0_ng_container_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ExamDetailsComponent_ng_container_0_ng_container_13_ng_container_1_Template, 3, 1, "ng-container", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var examQuestions_r10 = ctx.ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", examQuestions_r10.length !== 0)("ngIfElse", _r3);
        }
      }

      function ExamDetailsComponent_ng_container_0_ng_template_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No questions have been added to this exam yet.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ExamDetailsComponent_ng_container_0_option_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var topic_r29 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", topic_r29.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", topic_r29.name, " ");
        }
      }

      function ExamDetailsComponent_ng_container_0_ng_container_26_ng_container_1_li_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExamDetailsComponent_ng_container_0_ng_container_26_ng_container_1_li_2_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35);

            var question_r33 = ctx.$implicit;

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

            return ctx_r34.addQuestion(question_r33.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var question_r33 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](question_r33.title);
        }
      }

      function ExamDetailsComponent_ng_container_0_ng_container_26_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ExamDetailsComponent_ng_container_0_ng_container_26_ng_container_1_li_2_Template, 6, 1, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var questions_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", questions_r30);
        }
      }

      function ExamDetailsComponent_ng_container_0_ng_container_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ExamDetailsComponent_ng_container_0_ng_container_26_ng_container_1_Template, 3, 1, "ng-container", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var questions_r30 = ctx.ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", questions_r30.length !== 0)("ngIfElse", _r3);
        }
      }

      function ExamDetailsComponent_ng_container_0_ng_template_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "This topic has no questions yet");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ExamDetailsComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " - Exam");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Exam questions");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ExamDetailsComponent_ng_container_0_ng_container_13_Template, 2, 2, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ExamDetailsComponent_ng_container_0_ng_template_15_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Choose a topic");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "select", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ExamDetailsComponent_ng_container_0_option_22_Template, 2, 2, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExamDetailsComponent_ng_container_0_Template_button_click_24_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](21);

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r37.selectTopic(_r5.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, ExamDetailsComponent_ng_container_0_ng_container_26_Template, 2, 2, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ExamDetailsComponent_ng_container_0_ng_template_28_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var exam_r1 = ctx.ngIf;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 4, exam_r1.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 6, ctx_r0.examQuestions$));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 8, ctx_r0.topics$));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 10, ctx_r0.questions$));
        }
      }

      var ExamDetailsComponent = /*#__PURE__*/function () {
        function ExamDetailsComponent(examService, subjectService, topicService, route) {
          _classCallCheck(this, ExamDetailsComponent);

          this.examService = examService;
          this.subjectService = subjectService;
          this.topicService = topicService;
          this.route = route;
          this.examId = this.route.snapshot.paramMap.get('exam-id');
          this.subjectId = this.route.snapshot.paramMap.get('subject-id');
        }

        _createClass(ExamDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.exam$ = this.examService.getExam(this.examId);
            this.examQuestions$ = this.examService.getExamQuestions(this.examId);
            this.topics$ = this.subjectService.getSubjectTopics(this.subjectId);
          }
        }, {
          key: "selectTopic",
          value: function selectTopic(topicId) {
            this.questions$ = this.topicService.getTopicQuestions(topicId);
          }
        }, {
          key: "addQuestion",
          value: function addQuestion(questionId) {
            var _this3 = this;

            this.examService.addQuestionToExam(this.examId, questionId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1)).subscribe(function () {
              _this3.examQuestions$ = _this3.examService.getExamQuestions(_this3.examId);
            });
          }
        }, {
          key: "removeQuestion",
          value: function removeQuestion(questionId) {
            var _this4 = this;

            this.examService.removeQuestionFromExam(this.examId, questionId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1)).subscribe(function () {
              _this4.examQuestions$ = _this4.examService.getExamQuestions(_this4.examId);
            });
          }
        }]);

        return ExamDetailsComponent;
      }();

      ExamDetailsComponent.ɵfac = function ExamDetailsComponent_Factory(t) {
        return new (t || ExamDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_exam_service__WEBPACK_IMPORTED_MODULE_2__["ExamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_subject_service__WEBPACK_IMPORTED_MODULE_3__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_topic_service__WEBPACK_IMPORTED_MODULE_4__["TopicService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]));
      };

      ExamDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ExamDetailsComponent,
        selectors: [["app-exam-details"]],
        decls: 2,
        vars: 3,
        consts: [[4, "ngIf"], [1, "page-wrapper"], [1, "navbar"], [1, "heading-nav"], ["id", "heading"], [1, "half-flex-container"], [1, "half-flex-item", "left"], [1, "subheading"], ["empty", ""], [1, "half-flex-item", "right", "box-shadow"], ["id", "topic-select"], ["select", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "blue-button", 3, "click"], [4, "ngIf", "ngIfElse"], [1, "exam-question-list"], [4, "ngFor", "ngForOf"], ["closedQuestionTemplate", ""], [1, "exam-question"], [1, "exam-question-title"], [1, "remove-btn", 3, "click"], ["placeholder", "Open question", "disabled", "", 1, "exam-textarea"], [1, "exam-choice-list"], ["class", "exam-choice", 4, "ngFor", "ngForOf"], [1, "exam-choice"], ["id", "empty"], [3, "value"], [1, "question-list"]],
        template: function ExamDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ExamDetailsComponent_ng_container_0_Template, 30, 12, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.exam$));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["UpperCasePipe"]],
        styles: ["#topic-select[_ngcontent-%COMP%] {\r\n    min-width: 60%;\r\n    padding: 0.4rem 0;\r\n    margin-bottom: 1rem;\r\n    margin-right: 1rem;\r\n}\r\n\r\n.subheading[_ngcontent-%COMP%] {\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.exam-question-title[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]{\r\n    display: inline;\r\n    margin-right: 0.3rem;\r\n}\r\n\r\n.question-list[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW0tZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJleGFtLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0b3BpYy1zZWxlY3Qge1xyXG4gICAgbWluLXdpZHRoOiA2MCU7XHJcbiAgICBwYWRkaW5nOiAwLjRyZW0gMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbi5zdWJoZWFkaW5nIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5leGFtLXF1ZXN0aW9uLXRpdGxlID4gKntcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIG1hcmdpbi1yaWdodDogMC4zcmVtO1xyXG59XHJcblxyXG4ucXVlc3Rpb24tbGlzdCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "IXjT":
    /*!*******************************************************!*\
      !*** ./src/app/teacher/exam/exams/exams.component.ts ***!
      \*******************************************************/

    /*! exports provided: ExamsComponent */

    /***/
    function IXjT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExamsComponent", function () {
        return ExamsComponent;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_subject_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/subject.service */
      "2rDX");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_exam_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/exam.service */
      "oDKH");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ExamsComponent_ng_container_0_div_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ExamsComponent_ng_container_0_div_15_Template_div_click_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);

            var exam_r3 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            ctx_r4.deleteExam(exam_r3.id);
            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var exam_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("routerLink", exam_r3.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", exam_r3.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "", exam_r3.id, "/edit");
        }
      }

      function ExamsComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "main", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Exams");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ExamsComponent_ng_container_0_div_15_Template, 10, 3, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var subject_r1 = ctx.ngIf;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 2, subject_r1.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 4, ctx_r0.exams$));
        }
      }

      var ExamsComponent = /*#__PURE__*/function () {
        function ExamsComponent(subjectService, route, examService) {
          _classCallCheck(this, ExamsComponent);

          this.subjectService = subjectService;
          this.route = route;
          this.examService = examService;
          this.refreshedExams$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](true);
          this.subjectId = this.route.snapshot.paramMap.get('subject-id');
        }

        _createClass(ExamsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.subject$ = this.subjectService.getSubject(this.subjectId);
            this.exams$ = this.refreshedExams$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (_) {
              return _this5.subjectService.getSubjectExams(_this5.subjectId);
            }));
          }
        }, {
          key: "refreshExams",
          value: function refreshExams() {
            this.refreshedExams$.next(true);
          }
        }, {
          key: "deleteExam",
          value: function deleteExam(examId) {
            var _this6 = this;

            this.examService.deleteExam(examId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function () {
              _this6.refreshExams();
            });
          }
        }]);

        return ExamsComponent;
      }();

      ExamsComponent.ɵfac = function ExamsComponent_Factory(t) {
        return new (t || ExamsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_subject_service__WEBPACK_IMPORTED_MODULE_3__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_exam_service__WEBPACK_IMPORTED_MODULE_5__["ExamService"]));
      };

      ExamsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: ExamsComponent,
        selectors: [["app-exams"]],
        decls: 2,
        vars: 3,
        consts: [[4, "ngIf"], [1, "page-wrapper"], [1, "navbar"], [1, "heading-nav"], ["id", "heading"], [1, "page"], [1, "rectangle-flex-container"], ["id", "add-exam", "routerLink", "add", 1, "rectangle-flex-item", "hover", "box-shadow"], [1, "rectangle-content"], [1, "fas", "fa-plus"], ["class", "rectangle-flex-item hover box-shadow", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "rectangle-flex-item", "hover", "box-shadow", 3, "routerLink"], [1, "edit-strip", 3, "routerLink"], [1, "delete-strip", 3, "click"]],
        template: function ExamsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ExamsComponent_ng_container_0_Template, 17, 6, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx.subject$));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["UpperCasePipe"]],
        styles: ["#add-exam[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n}\r\n\r\n#add-exam[_ngcontent-%COMP%] {\r\n    opacity: 0.8;\r\n}\r\n\r\n.rectangle-flex-item[_ngcontent-%COMP%] {\r\n    width: 400px;\r\n    min-height: 200px;\r\n    background-color: #337575;\r\n}\r\n\r\n.rectangle-flex-item[_ngcontent-%COMP%]:hover {\r\n    background-color: #004242;\r\n}\r\n\r\n@media only screen and (min-width: 750px) {\r\n    .rectangle-flex-item[_ngcontent-%COMP%] {\r\n        width: calc(33.333% - 32px);\r\n    }\r\n\r\n}\r\n\r\n@media only screen and (min-width: 1200px) {\r\n    .rectangle-flex-item[_ngcontent-%COMP%] {\r\n        width: calc(25% - 32px);\r\n    }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0k7UUFDSSwyQkFBMkI7SUFDL0I7O0FBRUo7O0FBRUE7SUFDSTtRQUNJLHVCQUF1QjtJQUMzQjs7QUFFSiIsImZpbGUiOiJleGFtcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2FkZC1leGFtIGkge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG4jYWRkLWV4YW0ge1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG4ucmVjdGFuZ2xlLWZsZXgtaXRlbSB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzc1NzU7XHJcbn1cclxuXHJcbi5yZWN0YW5nbGUtZmxleC1pdGVtOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDQyNDI7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzUwcHgpIHtcclxuICAgIC5yZWN0YW5nbGUtZmxleC1pdGVtIHtcclxuICAgICAgICB3aWR0aDogY2FsYygzMy4zMzMlIC0gMzJweCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgLnJlY3RhbmdsZS1mbGV4LWl0ZW0ge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDI1JSAtIDMycHgpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "noYO":
    /*!*************************************************************!*\
      !*** ./src/app/teacher/exam/add-exam/add-exam.component.ts ***!
      \*************************************************************/

    /*! exports provided: AddExamComponent */

    /***/
    function noYO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddExamComponent", function () {
        return AddExamComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_subject_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/subject.service */
      "2rDX");
      /* harmony import */


      var _services_exam_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/exam.service */
      "oDKH");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function AddExamComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddExamComponent_ng_container_0_Template_form_ngSubmit_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r2.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Create exam");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Create");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.examForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.examForm.invalid);
        }
      }

      var AddExamComponent = /*#__PURE__*/function () {
        function AddExamComponent(fb, route, router, subjectService, examService) {
          _classCallCheck(this, AddExamComponent);

          this.fb = fb;
          this.route = route;
          this.router = router;
          this.subjectService = subjectService;
          this.examService = examService;
          this.examForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
          });
          this.subjectId = this.route.snapshot.paramMap.get('subject-id');
        }

        _createClass(AddExamComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.subject$ = this.subjectService.getSubject(this.subjectId);
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this7 = this;

            if (this.examForm.invalid) {
              return;
            }

            var name = this.examForm.value.name;
            this.examService.createExam(name, this.subjectId).subscribe(function () {
              _this7.router.navigate(["/teacher/subjects/".concat(_this7.subjectId, "/exams")]);
            });
          }
        }]);

        return AddExamComponent;
      }();

      AddExamComponent.ɵfac = function AddExamComponent_Factory(t) {
        return new (t || AddExamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_subject_service__WEBPACK_IMPORTED_MODULE_3__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_exam_service__WEBPACK_IMPORTED_MODULE_4__["ExamService"]));
      };

      AddExamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AddExamComponent,
        selectors: [["app-add-exam"]],
        decls: 2,
        vars: 3,
        consts: [[4, "ngIf"], [1, "form-wrapper"], [1, "center-form"], [1, "form-box", 3, "formGroup", "ngSubmit"], ["id", "inputs"], ["formControlName", "name", "type", "text", "placeholder", "Name", 1, "blue-input"], ["type", "submit", 1, "hover", "form-blue-button", "bottom-button", 3, "disabled"]],
        template: function AddExamComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AddExamComponent_ng_container_0_Template, 10, 2, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.subject$));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtZXhhbS5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "oDKH":
    /*!**************************************************!*\
      !*** ./src/app/teacher/services/exam.service.ts ***!
      \**************************************************/

    /*! exports provided: ExamService */

    /***/
    function oDKH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExamService", function () {
        return ExamService;
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

      var ExamService = /*#__PURE__*/function () {
        function ExamService(http) {
          _classCallCheck(this, ExamService);

          this.http = http;
          this.baseUrl = "".concat(src_app_core_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"].API_ENDPOINT, "/exams");
        }

        _createClass(ExamService, [{
          key: "createExam",
          value: function createExam(name, subjectId) {
            return this.http.post("".concat(this.baseUrl), {
              name: name,
              subjectId: subjectId
            });
          }
        }, {
          key: "editExam",
          value: function editExam(examId, name) {
            return this.http.patch("".concat(this.baseUrl, "/").concat(examId), {
              name: name
            });
          }
        }, {
          key: "getExam",
          value: function getExam(examId) {
            return this.http.get("".concat(this.baseUrl, "/").concat(examId));
          }
        }, {
          key: "addQuestionToExam",
          value: function addQuestionToExam(examId, questionId) {
            return this.http.post("".concat(this.baseUrl, "/add-question"), {
              examId: examId,
              questionId: questionId
            });
          }
        }, {
          key: "getExamQuestions",
          value: function getExamQuestions(examId) {
            return this.http.get("".concat(this.baseUrl, "/").concat(examId, "/questions"));
          }
        }, {
          key: "removeQuestionFromExam",
          value: function removeQuestionFromExam(examId, questionId) {
            return this.http["delete"]("".concat(this.baseUrl, "/").concat(examId, "/remove-question/").concat(questionId));
          }
        }, {
          key: "deleteExam",
          value: function deleteExam(examId) {
            return this.http["delete"]("".concat(this.baseUrl, "/").concat(examId));
          }
        }]);

        return ExamService;
      }();

      ExamService.ɵfac = function ExamService_Factory(t) {
        return new (t || ExamService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      ExamService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ExamService,
        factory: ExamService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "x1SL":
    /*!*********************************************!*\
      !*** ./src/app/teacher/exam/exam.module.ts ***!
      \*********************************************/

    /*! exports provided: ExamModule */

    /***/
    function x1SL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExamModule", function () {
        return ExamModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _add_exam_add_exam_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-exam/add-exam.component */
      "noYO");
      /* harmony import */


      var _exam_details_exam_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./exam-details/exam-details.component */
      "6YzZ");
      /* harmony import */


      var _exams_exams_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./exams/exams.component */
      "IXjT");
      /* harmony import */


      var _exam_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./exam-routing.module */
      "/n1J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _exam_edit_exam_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./exam-edit/exam-edit.component */
      "3NgO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ExamModule = function ExamModule() {
        _classCallCheck(this, ExamModule);
      };

      ExamModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: ExamModule
      });
      ExamModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        factory: function ExamModule_Factory(t) {
          return new (t || ExamModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _exam_routing_module__WEBPACK_IMPORTED_MODULE_4__["ExamRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ExamModule, {
          declarations: [_add_exam_add_exam_component__WEBPACK_IMPORTED_MODULE_1__["AddExamComponent"], _exam_details_exam_details_component__WEBPACK_IMPORTED_MODULE_2__["ExamDetailsComponent"], _exams_exams_component__WEBPACK_IMPORTED_MODULE_3__["ExamsComponent"], _exam_edit_exam_edit_component__WEBPACK_IMPORTED_MODULE_6__["ExamEditComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _exam_routing_module__WEBPACK_IMPORTED_MODULE_4__["ExamRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=exam-exam-module-es5.js.map