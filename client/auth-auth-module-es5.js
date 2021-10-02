(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"], {
    /***/
    "6epW":
    /*!*********************************************!*\
      !*** ./src/app/auth/auth-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: AuthRoutingModule */

    /***/
    function epW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function () {
        return AuthRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _student_login_student_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./student-login/student-login.component */
      "OgRU");
      /* harmony import */


      var _student_register_student_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./student-register/student-register.component */
      "BCBX");
      /* harmony import */


      var _teacher_login_teacher_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./teacher-login/teacher-login.component */
      "DEuz");
      /* harmony import */


      var _teacher_register_teacher_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./teacher-register/teacher-register.component */
      "ZZPz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        children: [{
          path: 'teacher-login',
          component: _teacher_login_teacher_login_component__WEBPACK_IMPORTED_MODULE_3__["TeacherLoginComponent"]
        }, {
          path: 'teacher-register',
          component: _teacher_register_teacher_register_component__WEBPACK_IMPORTED_MODULE_4__["TeacherRegisterComponent"]
        }, {
          path: 'student-login',
          component: _student_login_student_login_component__WEBPACK_IMPORTED_MODULE_1__["StudentLoginComponent"]
        }, {
          path: 'student-register',
          component: _student_register_student_register_component__WEBPACK_IMPORTED_MODULE_2__["StudentRegisterComponent"]
        }]
      }];

      var AuthRoutingModule = function AuthRoutingModule() {
        _classCallCheck(this, AuthRoutingModule);
      };

      AuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: AuthRoutingModule
      });
      AuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        factory: function AuthRoutingModule_Factory(t) {
          return new (t || AuthRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AuthRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "6j1z":
    /*!******************************************************!*\
      !*** ./src/app/helpers/match-passwords.validator.ts ***!
      \******************************************************/

    /*! exports provided: MatchPasswords */

    /***/
    function j1z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MatchPasswords", function () {
        return MatchPasswords;
      });

      function MatchPasswords(formGroup) {
        var password = formGroup.get('password');
        var confirmPassword = formGroup.get('confirmPassword');

        if ((confirmPassword === null || confirmPassword === void 0 ? void 0 : confirmPassword.errors) && !confirmPassword.errors.passwordMatch) {
          return;
        }

        if ((password === null || password === void 0 ? void 0 : password.value) !== (confirmPassword === null || confirmPassword === void 0 ? void 0 : confirmPassword.value)) {
          confirmPassword === null || confirmPassword === void 0 ? void 0 : confirmPassword.setErrors({
            passwordMatch: true
          });
        } else {
          confirmPassword === null || confirmPassword === void 0 ? void 0 : confirmPassword.setErrors(null);
        }
      }
      /***/

    },

    /***/
    "BCBX":
    /*!*********************************************************************!*\
      !*** ./src/app/auth/student-register/student-register.component.ts ***!
      \*********************************************************************/

    /*! exports provided: StudentRegisterComponent */

    /***/
    function BCBX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StudentRegisterComponent", function () {
        return StudentRegisterComponent;
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


      var src_app_helpers_match_passwords_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/helpers/match-passwords.validator */
      "6j1z");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/auth.service */
      "N/25");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var StudentRegisterComponent = /*#__PURE__*/function () {
        function StudentRegisterComponent(fb, authService, router) {
          _classCallCheck(this, StudentRegisterComponent);

          this.fb = fb;
          this.authService = authService;
          this.router = router;
          this.registerForm = this.fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            facultyNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
          }, {
            validator: src_app_helpers_match_passwords_validator__WEBPACK_IMPORTED_MODULE_2__["MatchPasswords"]
          });
        }

        _createClass(StudentRegisterComponent, [{
          key: "submit",
          value: function submit() {
            var _this = this;

            if (this.registerForm.invalid) {
              return;
            }

            var _this$registerForm$va = this.registerForm.value,
                username = _this$registerForm$va.username,
                email = _this$registerForm$va.email,
                facultyNumber = _this$registerForm$va.facultyNumber,
                password = _this$registerForm$va.password;
            this.authService.studentRegister(username, email, facultyNumber, password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function () {
              _this.router.navigate(['/auth/student-login']);
            });
          }
        }]);

        return StudentRegisterComponent;
      }();

      StudentRegisterComponent.ɵfac = function StudentRegisterComponent_Factory(t) {
        return new (t || StudentRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      StudentRegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: StudentRegisterComponent,
        selectors: [["app-student-register"]],
        decls: 18,
        vars: 2,
        consts: [[1, "form-wrapper"], [1, "center-form"], [1, "form-box", 3, "formGroup"], ["formControlName", "username", "type", "text", "placeholder", "Username", 1, "blue-input"], ["formControlName", "email", "type", "email", "placeholder", "Email", 1, "blue-input"], ["formControlName", "facultyNumber", "type", "text", "placeholder", "Faculty number", 1, "blue-input"], ["formControlName", "password", "type", "password", "placeholder", "Password", 1, "blue-input"], ["formControlName", "confirmPassword", "type", "password", "placeholder", "Confirm password", 1, "blue-input"], ["type", "submit", 1, "hover", "form-blue-button", "auth-bottom-button", 3, "disabled", "click"], [1, "form-bottom-text"], ["routerLink", "/auth/student-login", 1, "hover"]],
        template: function StudentRegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Student sign up");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StudentRegisterComponent_Template_button_click_11_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Sign up ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Already have a student account? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Sign in.");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.registerForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.registerForm.invalid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHVkZW50LXJlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "DEuz":
    /*!***************************************************************!*\
      !*** ./src/app/auth/teacher-login/teacher-login.component.ts ***!
      \***************************************************************/

    /*! exports provided: TeacherLoginComponent */

    /***/
    function DEuz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TeacherLoginComponent", function () {
        return TeacherLoginComponent;
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


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/auth.service */
      "N/25");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var TeacherLoginComponent = /*#__PURE__*/function () {
        function TeacherLoginComponent(fb, authService, router) {
          _classCallCheck(this, TeacherLoginComponent);

          this.fb = fb;
          this.authService = authService;
          this.router = router;
          this.loginForm = this.fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
          });
        }

        _createClass(TeacherLoginComponent, [{
          key: "submit",
          value: function submit() {
            var _this2 = this;

            if (this.loginForm.invalid) {
              return;
            }

            var _this$loginForm$value = this.loginForm.value,
                username = _this$loginForm$value.username,
                password = _this$loginForm$value.password;
            this.authService.teacherLogin(username, password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function (data) {
              localStorage.setItem("token_id", data.tokenId);

              _this2.router.navigate(['/teacher/subjects']);
            });
          }
        }]);

        return TeacherLoginComponent;
      }();

      TeacherLoginComponent.ɵfac = function TeacherLoginComponent_Factory(t) {
        return new (t || TeacherLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      TeacherLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: TeacherLoginComponent,
        selectors: [["app-teacher-login"]],
        decls: 15,
        vars: 2,
        consts: [[1, "form-wrapper"], [1, "center-form"], [1, "form-box", 3, "formGroup", "ngSubmit"], ["formControlName", "username", "type", "text", "placeholder", "Username", 1, "blue-input"], ["formControlName", "password", "type", "password", "placeholder", "Password", 1, "blue-input"], ["type", "submit", 1, "hover", "form-blue-button", "auth-bottom-button", 3, "disabled"], [1, "form-bottom-text"], ["routerLink", "/auth/teacher-register", 1, "hover"]],
        template: function TeacherLoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function TeacherLoginComponent_Template_form_ngSubmit_2_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Teacher sign in");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Sign in ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Don't have a teacher account? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Sign up.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loginForm.invalid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWFjaGVyLWxvZ2luLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "N/25":
    /*!***********************************************!*\
      !*** ./src/app/auth/services/auth.service.ts ***!
      \***********************************************/

    /*! exports provided: AuthService */

    /***/
    function N25(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
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

      var AuthService = /*#__PURE__*/function () {
        function AuthService(http) {
          _classCallCheck(this, AuthService);

          this.http = http;
          this.baseUrl = "".concat(src_app_core_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"].API_ENDPOINT, "/auth");
        }

        _createClass(AuthService, [{
          key: "studentLogin",
          value: function studentLogin(username, password) {
            return this.http.post("".concat(this.baseUrl, "/student-login"), {
              username: username,
              password: password
            });
          }
        }, {
          key: "studentRegister",
          value: function studentRegister(username, email, facultyNumber, password) {
            return this.http.post("".concat(this.baseUrl, "/student-register"), {
              username: username,
              email: email,
              facultyNumber: facultyNumber,
              password: password
            });
          }
        }, {
          key: "teacherRegister",
          value: function teacherRegister(username, password, email) {
            return this.http.post("".concat(this.baseUrl, "/teacher-register"), {
              username: username,
              password: password,
              email: email
            });
          }
        }, {
          key: "teacherLogin",
          value: function teacherLogin(username, password) {
            return this.http.post("".concat(this.baseUrl, "/teacher-login"), {
              username: username,
              password: password
            });
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac
      });
      /***/
    },

    /***/
    "OgRU":
    /*!***************************************************************!*\
      !*** ./src/app/auth/student-login/student-login.component.ts ***!
      \***************************************************************/

    /*! exports provided: StudentLoginComponent */

    /***/
    function OgRU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StudentLoginComponent", function () {
        return StudentLoginComponent;
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


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/auth.service */
      "N/25");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var StudentLoginComponent = /*#__PURE__*/function () {
        function StudentLoginComponent(fb, authService, router) {
          _classCallCheck(this, StudentLoginComponent);

          this.fb = fb;
          this.authService = authService;
          this.router = router;
          this.loginForm = this.fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
          });
        }

        _createClass(StudentLoginComponent, [{
          key: "submit",
          value: function submit() {
            var _this3 = this;

            if (this.loginForm.invalid) {
              return;
            }

            var _this$loginForm$value2 = this.loginForm.value,
                username = _this$loginForm$value2.username,
                password = _this$loginForm$value2.password;
            this.authService.studentLogin(username, password).subscribe(function (data) {
              localStorage.setItem("token_id", data.tokenId);

              _this3.router.navigate(['/student/subjects']);
            });
          }
        }]);

        return StudentLoginComponent;
      }();

      StudentLoginComponent.ɵfac = function StudentLoginComponent_Factory(t) {
        return new (t || StudentLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      StudentLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: StudentLoginComponent,
        selectors: [["app-student-login"]],
        decls: 15,
        vars: 2,
        consts: [[1, "form-wrapper"], [1, "center-form"], [1, "form-box", 3, "formGroup", "ngSubmit"], ["formControlName", "username", "type", "text", "placeholder", "Username", 1, "blue-input"], ["formControlName", "password", "type", "password", "placeholder", "Password", 1, "blue-input"], ["type", "submit", 1, "hover", "form-blue-button", "auth-bottom-button", 3, "disabled"], [1, "form-bottom-text"], ["routerLink", "/auth/student-register", 1, "hover"]],
        template: function StudentLoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function StudentLoginComponent_Template_form_ngSubmit_2_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Student sign in");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Sign in ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Don't have a student account? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Sign up.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loginForm.invalid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHVkZW50LWxvZ2luLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "Yj9t":
    /*!*************************************!*\
      !*** ./src/app/auth/auth.module.ts ***!
      \*************************************/

    /*! exports provided: AuthModule */

    /***/
    function Yj9t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
        return AuthModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _auth_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth-routing.module */
      "6epW");
      /* harmony import */


      var _teacher_login_teacher_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./teacher-login/teacher-login.component */
      "DEuz");
      /* harmony import */


      var _teacher_register_teacher_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./teacher-register/teacher-register.component */
      "ZZPz");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _student_login_student_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./student-login/student-login.component */
      "OgRU");
      /* harmony import */


      var _student_register_student_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./student-register/student-register.component */
      "BCBX");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./services/auth.service */
      "N/25");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AuthModule = function AuthModule() {
        _classCallCheck(this, AuthModule);
      };

      AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: AuthModule
      });
      AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        factory: function AuthModule_Factory(t) {
          return new (t || AuthModule)();
        },
        providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_1__["AuthRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AuthModule, {
          declarations: [_teacher_login_teacher_login_component__WEBPACK_IMPORTED_MODULE_2__["TeacherLoginComponent"], _teacher_register_teacher_register_component__WEBPACK_IMPORTED_MODULE_3__["TeacherRegisterComponent"], _student_login_student_login_component__WEBPACK_IMPORTED_MODULE_5__["StudentLoginComponent"], _student_register_student_register_component__WEBPACK_IMPORTED_MODULE_6__["StudentRegisterComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_1__["AuthRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]]
        });
      })();
      /***/

    },

    /***/
    "ZZPz":
    /*!*********************************************************************!*\
      !*** ./src/app/auth/teacher-register/teacher-register.component.ts ***!
      \*********************************************************************/

    /*! exports provided: TeacherRegisterComponent */

    /***/
    function ZZPz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TeacherRegisterComponent", function () {
        return TeacherRegisterComponent;
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


      var _helpers_match_passwords_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../helpers/match-passwords.validator */
      "6j1z");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/auth.service */
      "N/25");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var TeacherRegisterComponent = /*#__PURE__*/function () {
        function TeacherRegisterComponent(fb, authService, router) {
          _classCallCheck(this, TeacherRegisterComponent);

          this.fb = fb;
          this.authService = authService;
          this.router = router;
          this.registerForm = this.fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
          }, {
            validator: _helpers_match_passwords_validator__WEBPACK_IMPORTED_MODULE_2__["MatchPasswords"]
          });
        }

        _createClass(TeacherRegisterComponent, [{
          key: "submit",
          value: function submit() {
            var _this4 = this;

            if (this.registerForm.invalid) {
              return;
            }

            var _this$registerForm$va2 = this.registerForm.value,
                username = _this$registerForm$va2.username,
                password = _this$registerForm$va2.password,
                email = _this$registerForm$va2.email;
            this.authService.teacherRegister(username, password, email).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function () {
              _this4.router.navigate(['/auth/teacher-login']);
            });
          }
        }]);

        return TeacherRegisterComponent;
      }();

      TeacherRegisterComponent.ɵfac = function TeacherRegisterComponent_Factory(t) {
        return new (t || TeacherRegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      TeacherRegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: TeacherRegisterComponent,
        selectors: [["app-teacher-register"]],
        decls: 17,
        vars: 2,
        consts: [[1, "form-wrapper"], [1, "center-form"], [1, "form-box", 3, "formGroup"], ["formControlName", "username", "type", "text", "placeholder", "Username", 1, "blue-input"], ["formControlName", "email", "type", "email", "placeholder", "Email", 1, "blue-input"], ["formControlName", "password", "type", "password", "placeholder", "Password", 1, "blue-input"], ["formControlName", "confirmPassword", "type", "password", "placeholder", "Confirm password", 1, "blue-input"], ["type", "submit", 1, "hover", "form-blue-button", "auth-bottom-button", 3, "disabled", "click"], [1, "form-bottom-text"], ["routerLink", "/auth/teacher-login", 1, "hover"]],
        template: function TeacherRegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Teacher sign up");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TeacherRegisterComponent_Template_button_click_10_listener() {
              return ctx.submit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Sign up ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Already have a teacher account? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Sign in.");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.registerForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.registerForm.invalid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWFjaGVyLXJlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=auth-auth-module-es5.js.map