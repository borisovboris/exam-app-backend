(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["teacher-teacher-module"], {
    /***/
    "4+hN":
    /*!*******************************************!*\
      !*** ./src/app/teacher/teacher.module.ts ***!
      \*******************************************/

    /*! exports provided: TeacherModule */

    /***/
    function hN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TeacherModule", function () {
        return TeacherModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _teacher_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./teacher-routing.module */
      "hPE9");
      /* harmony import */


      var _subjects_subjects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./subjects/subjects.component */
      "cZOe");
      /* harmony import */


      var _add_subject_add_subject_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-subject/add-subject.component */
      "y8bY");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _subject_details_subject_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./subject-details/subject-details.component */
      "XlUQ");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _subject_edit_subject_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./subject-edit/subject-edit.component */
      "S2kx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TeacherModule = function TeacherModule() {
        _classCallCheck(this, TeacherModule);
      };

      TeacherModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: TeacherModule
      });
      TeacherModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        factory: function TeacherModule_Factory(t) {
          return new (t || TeacherModule)();
        },
        providers: [],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _teacher_routing_module__WEBPACK_IMPORTED_MODULE_1__["TeacherRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](TeacherModule, {
          declarations: [_subjects_subjects_component__WEBPACK_IMPORTED_MODULE_2__["SubjectsComponent"], _add_subject_add_subject_component__WEBPACK_IMPORTED_MODULE_3__["AddSubjectComponent"], _subject_details_subject_details_component__WEBPACK_IMPORTED_MODULE_5__["SubjectDetailsComponent"], _subject_edit_subject_edit_component__WEBPACK_IMPORTED_MODULE_7__["SubjectEditComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _teacher_routing_module__WEBPACK_IMPORTED_MODULE_1__["TeacherRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]]
        });
      })();
      /***/

    },

    /***/
    "S2kx":
    /*!****************************************************************!*\
      !*** ./src/app/teacher/subject-edit/subject-edit.component.ts ***!
      \****************************************************************/

    /*! exports provided: SubjectEditComponent */

    /***/
    function S2kx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SubjectEditComponent", function () {
        return SubjectEditComponent;
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


      var _services_subject_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/subject.service */
      "2rDX");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var SubjectEditComponent = /*#__PURE__*/function () {
        function SubjectEditComponent(fb, subjectService, route, router) {
          _classCallCheck(this, SubjectEditComponent);

          this.fb = fb;
          this.subjectService = subjectService;
          this.route = route;
          this.router = router;
          this.subjectEditForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
          });
          this.subjectId = this.route.snapshot.paramMap.get('subject-id');
        }

        _createClass(SubjectEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.subjectService.getSubject(this.subjectId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function (subject) {
              _this.subjectEditForm.patchValue({
                name: subject.name
              });

              _this.subjectEditForm.patchValue({
                description: subject.description
              });
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this2 = this;

            if (this.subjectEditForm.invalid) {
              return;
            }

            var _this$subjectEditForm = this.subjectEditForm.value,
                name = _this$subjectEditForm.name,
                description = _this$subjectEditForm.description;
            this.subjectService.editSubject(this.subjectId, name, description).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function () {
              _this2.router.navigate(['/teacher/subjects']);
            });
          }
        }]);

        return SubjectEditComponent;
      }();

      SubjectEditComponent.ɵfac = function SubjectEditComponent_Factory(t) {
        return new (t || SubjectEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_subject_service__WEBPACK_IMPORTED_MODULE_3__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      SubjectEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: SubjectEditComponent,
        selectors: [["app-subject-edit"]],
        decls: 11,
        vars: 2,
        consts: [[1, "form-wrapper"], [1, "center-form"], [1, "form-box", 3, "formGroup", "ngSubmit"], ["name", "name", "formControlName", "name", "type", "text", "placeholder", "Name", 1, "blue-input"], ["name", "description", "formControlName", "description", "type", "description", "placeholder", "Description (optional)", 1, "form-description"], ["type", "submit", 1, "hover", "form-blue-button", "bottom-button", 3, "disabled"]],
        template: function SubjectEditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function SubjectEditComponent_Template_form_ngSubmit_2_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Edit subject");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "textarea", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "                ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Edit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.subjectEditForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.subjectEditForm.invalid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWJqZWN0LWVkaXQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "WR8Z":
    /*!*****************************************************!*\
      !*** ./src/app/teacher/services/teacher.service.ts ***!
      \*****************************************************/

    /*! exports provided: TeacherService */

    /***/
    function WR8Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TeacherService", function () {
        return TeacherService;
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

      var TeacherService = /*#__PURE__*/function () {
        function TeacherService(http) {
          _classCallCheck(this, TeacherService);

          this.http = http;
          this.baseUrl = src_app_core_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"].API_ENDPOINT;
        }

        _createClass(TeacherService, [{
          key: "getTeacherSubjects",
          value: function getTeacherSubjects() {
            return this.http.get("".concat(this.baseUrl, "/teachers/subjects"));
          }
        }]);

        return TeacherService;
      }();

      TeacherService.ɵfac = function TeacherService_Factory(t) {
        return new (t || TeacherService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      TeacherService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: TeacherService,
        factory: TeacherService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "XlUQ":
    /*!**********************************************************************!*\
      !*** ./src/app/teacher/subject-details/subject-details.component.ts ***!
      \**********************************************************************/

    /*! exports provided: SubjectDetailsComponent */

    /***/
    function XlUQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SubjectDetailsComponent", function () {
        return SubjectDetailsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_subject_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/subject.service */
      "2rDX");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function SubjectDetailsComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Subject details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Description:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Exams");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Topics");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Teachers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Students");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Sessions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var subject_r1 = ctx.ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, subject_r1.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subject_r1.description, "");
        }
      }

      var SubjectDetailsComponent = /*#__PURE__*/function () {
        function SubjectDetailsComponent(subjectService, route) {
          _classCallCheck(this, SubjectDetailsComponent);

          this.subjectService = subjectService;
          this.route = route;
          this.subjectId = this.route.snapshot.paramMap.get('subject-id');
        }

        _createClass(SubjectDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.subject$ = this.subjectService.getSubject(this.subjectId);
          }
        }]);

        return SubjectDetailsComponent;
      }();

      SubjectDetailsComponent.ɵfac = function SubjectDetailsComponent_Factory(t) {
        return new (t || SubjectDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_subject_service__WEBPACK_IMPORTED_MODULE_1__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
      };

      SubjectDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SubjectDetailsComponent,
        selectors: [["app-subject-details"]],
        decls: 2,
        vars: 3,
        consts: [[4, "ngIf"], [1, "page-wrapper"], [1, "navbar"], [1, "heading-nav"], ["id", "heading"], [1, "half-flex-container"], [1, "half-flex-item", "left", "box-shadow"], [1, "half-flex-item", "right", "box-shadow"], [1, "subject-buttons"], ["routerLink", "exams", 1, "hover", "blue-button"], ["routerLink", "topics", 1, "hover", "blue-button"], ["routerLink", "teachers", 1, "hover", "blue-button"], ["routerLink", "students", 1, "hover", "blue-button"], ["routerLink", "sessions", 1, "hover", "blue-button"]],
        template: function SubjectDetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SubjectDetailsComponent_ng_container_0_Template, 27, 4, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.subject$));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["UpperCasePipe"]],
        styles: [".page[_ngcontent-%COMP%] {\r\n    padding-top: 128px;\r\n}\r\n\r\n.subject-buttons[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-bottom: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YmplY3QtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzdWJqZWN0LWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMjhweDtcclxufVxyXG5cclxuLnN1YmplY3QtYnV0dG9ucyA+IGJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "cZOe":
    /*!********************************************************!*\
      !*** ./src/app/teacher/subjects/subjects.component.ts ***!
      \********************************************************/

    /*! exports provided: SubjectsComponent */

    /***/
    function cZOe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SubjectsComponent", function () {
        return SubjectsComponent;
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


      var _services_teacher_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/teacher.service */
      "WR8Z");
      /* harmony import */


      var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/auth.service */
      "IYfF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_subject_list_subject_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../shared/subject-list/subject-list.component */
      "Hdob");

      var SubjectsComponent = /*#__PURE__*/function () {
        function SubjectsComponent(teacherService, authService, router) {
          _classCallCheck(this, SubjectsComponent);

          this.teacherService = teacherService;
          this.authService = authService;
          this.router = router;
          this.refreshedSubjects$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](true);
        }

        _createClass(SubjectsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.subjects$ = this.refreshedSubjects$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (_) {
              return _this3.teacherService.getTeacherSubjects();
            }));
          }
        }, {
          key: "refreshSubjects",
          value: function refreshSubjects() {
            this.refreshedSubjects$.next(true);
          }
        }, {
          key: "logout",
          value: function logout() {
            this.authService.logout();
            this.router.navigate(['/home']);
          }
        }]);

        return SubjectsComponent;
      }();

      SubjectsComponent.ɵfac = function SubjectsComponent_Factory(t) {
        return new (t || SubjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_teacher_service__WEBPACK_IMPORTED_MODULE_3__["TeacherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      SubjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: SubjectsComponent,
        selectors: [["app-subjects"]],
        decls: 13,
        vars: 1,
        consts: [[1, "page-wrapper"], [1, "navbar"], [1, "heading-nav"], [1, "nav-heading"], [1, "hover", "white-button", "log-out-button", 3, "click"], ["routerLink", "/home", 1, "hover", "white-button", "log-out-button"], [1, "page"], [3, "subjects$", "refreshSubjectsEvent"]],
        template: function SubjectsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nav", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h2", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "SUBJECTS");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SubjectsComponent_Template_button_click_5_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Logout");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "main", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Your subjects");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "app-subject-list", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("refreshSubjectsEvent", function SubjectsComponent_Template_app_subject_list_refreshSubjectsEvent_12_listener() {
              return ctx.refreshSubjects();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("subjects$", ctx.subjects$);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _shared_subject_list_subject_list_component__WEBPACK_IMPORTED_MODULE_6__["SubjectListComponent"]],
        styles: [".log-out-button[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin: 0;\r\n    margin-right: 10px;\r\n}\r\n\r\n.white-button[_ngcontent-%COMP%] {\r\n    border-radius: 4px;\r\n}\r\n\r\n.nav-heading[_ngcontent-%COMP%] {\r\n    display: inline;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YmplY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osU0FBUztJQUNULGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3ViamVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2ctb3V0LWJ1dHRvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi53aGl0ZS1idXR0b24ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4ubmF2LWhlYWRpbmcge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "hPE9":
    /*!***************************************************!*\
      !*** ./src/app/teacher/teacher-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: TeacherRoutingModule */

    /***/
    function hPE9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TeacherRoutingModule", function () {
        return TeacherRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _add_subject_add_subject_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-subject/add-subject.component */
      "y8bY");
      /* harmony import */


      var _subject_details_subject_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./subject-details/subject-details.component */
      "XlUQ");
      /* harmony import */


      var _subject_edit_subject_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./subject-edit/subject-edit.component */
      "S2kx");
      /* harmony import */


      var _subjects_subjects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./subjects/subjects.component */
      "cZOe");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        children: [{
          path: ':subject-id/teachers',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | subject-teacher-subject-teacher-module */
            "subject-teacher-subject-teacher-module").then(__webpack_require__.bind(null,
            /*! ./subject-teacher/subject-teacher.module */
            "R5Su")).then(function (m) {
              return m.SubjectTeacherModule;
            });
          }
        }, {
          path: ':subject-id/topics',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | topic-topic-module */
            [__webpack_require__.e("common"), __webpack_require__.e("topic-topic-module")]).then(__webpack_require__.bind(null,
            /*! ./topic/topic.module */
            "QwAj")).then(function (m) {
              return m.TopicModule;
            });
          }
        }, {
          path: ':subject-id/exams',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | exam-exam-module */
            [__webpack_require__.e("common"), __webpack_require__.e("exam-exam-module")]).then(__webpack_require__.bind(null,
            /*! ./exam/exam.module */
            "x1SL")).then(function (m) {
              return m.ExamModule;
            });
          }
        }, {
          path: ':subject-id/students',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | subject-student-subject-student-module */
            "subject-student-subject-student-module").then(__webpack_require__.bind(null,
            /*! ./subject-student/subject-student.module */
            "cP0F")).then(function (m) {
              return m.SubjectStudentModule;
            });
          }
        }, {
          path: ':subject-id/sessions',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | session-session-module */
            [__webpack_require__.e("common"), __webpack_require__.e("session-session-module")]).then(__webpack_require__.bind(null,
            /*! ./session/session.module */
            "otzT")).then(function (m) {
              return m.SessionModule;
            });
          }
        }, {
          path: 'add',
          component: _add_subject_add_subject_component__WEBPACK_IMPORTED_MODULE_1__["AddSubjectComponent"]
        }, {
          path: ':subject-id/edit',
          component: _subject_edit_subject_edit_component__WEBPACK_IMPORTED_MODULE_3__["SubjectEditComponent"]
        }, {
          path: ':subject-id',
          component: _subject_details_subject_details_component__WEBPACK_IMPORTED_MODULE_2__["SubjectDetailsComponent"]
        }, {
          path: '',
          component: _subjects_subjects_component__WEBPACK_IMPORTED_MODULE_4__["SubjectsComponent"],
          pathMatch: 'full'
        }]
      }];

      var TeacherRoutingModule = function TeacherRoutingModule() {
        _classCallCheck(this, TeacherRoutingModule);
      };

      TeacherRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: TeacherRoutingModule
      });
      TeacherRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        factory: function TeacherRoutingModule_Factory(t) {
          return new (t || TeacherRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](TeacherRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "y8bY":
    /*!**************************************************************!*\
      !*** ./src/app/teacher/add-subject/add-subject.component.ts ***!
      \**************************************************************/

    /*! exports provided: AddSubjectComponent */

    /***/
    function y8bY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddSubjectComponent", function () {
        return AddSubjectComponent;
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


      var _services_subject_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/subject.service */
      "2rDX");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AddSubjectComponent = /*#__PURE__*/function () {
        function AddSubjectComponent(fb, subjectService, router) {
          _classCallCheck(this, AddSubjectComponent);

          this.fb = fb;
          this.subjectService = subjectService;
          this.router = router;
          this.subjectForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
          });
        }

        _createClass(AddSubjectComponent, [{
          key: "submit",
          value: function submit() {
            var _this4 = this;

            if (this.subjectForm.invalid) {
              return;
            }

            var _this$subjectForm$val = this.subjectForm.value,
                name = _this$subjectForm$val.name,
                description = _this$subjectForm$val.description;
            this.subjectService.createSubject(name, description).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function () {
              _this4.router.navigate(['/teacher/subjects']);
            });
          }
        }]);

        return AddSubjectComponent;
      }();

      AddSubjectComponent.ɵfac = function AddSubjectComponent_Factory(t) {
        return new (t || AddSubjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_subject_service__WEBPACK_IMPORTED_MODULE_3__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      AddSubjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: AddSubjectComponent,
        selectors: [["app-add-subject"]],
        decls: 10,
        vars: 2,
        consts: [[1, "form-wrapper"], [1, "center-form"], [1, "form-box", 3, "formGroup"], ["formControlName", "name", "type", "text", "placeholder", "Name", 1, "blue-input"], ["formControlName", "description", "type", "description", "placeholder", "Description", 1, "form-description"], ["type", "submit", 1, "hover", "form-blue-button", "bottom-button", 3, "disabled", "click"]],
        template: function AddSubjectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Create subject");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "textarea", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddSubjectComponent_Template_button_click_8_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Create ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.subjectForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.subjectForm.invalid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtc3ViamVjdC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=teacher-teacher-module-es5.js.map