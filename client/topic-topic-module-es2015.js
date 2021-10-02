(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["topic-topic-module"],{

/***/ "6Vqd":
/*!**********************************************************!*\
  !*** ./src/app/teacher/topic/topics/topics.component.ts ***!
  \**********************************************************/
/*! exports provided: TopicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicsComponent", function() { return TopicsComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_subject_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/subject.service */ "2rDX");
/* harmony import */ var _services_topic_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/topic.service */ "Z/Et");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function TopicsComponent_ng_container_0_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TopicsComponent_ng_container_0_div_15_Template_div_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const topic_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); ctx_r4.deleteTopic(topic_r3.id); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const topic_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("routerLink", topic_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", topic_r3.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "", topic_r3.id, "/edit");
} }
function TopicsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Topics");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, TopicsComponent_ng_container_0_div_15_Template, 10, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const subject_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 2, subject_r1.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 4, ctx_r0.topics$));
} }
class TopicsComponent {
    constructor(route, subjectService, topicService) {
        this.route = route;
        this.subjectService = subjectService;
        this.topicService = topicService;
        this.refreshedTopics$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](true);
        this.subjectId = this.route.snapshot.paramMap.get('subject-id');
    }
    ngOnInit() {
        this.subject$ = this.subjectService.getSubject(this.subjectId);
        this.topics$ = this.refreshedTopics$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(_ => this.subjectService.getSubjectTopics(this.subjectId)));
    }
    refreshTopics() {
        this.refreshedTopics$.next(true);
    }
    deleteTopic(topicId) {
        this.topicService.deleteTopic(topicId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1))
            .subscribe(() => {
            this.refreshTopics();
        });
    }
}
TopicsComponent.ɵfac = function TopicsComponent_Factory(t) { return new (t || TopicsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_subject_service__WEBPACK_IMPORTED_MODULE_4__["SubjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_topic_service__WEBPACK_IMPORTED_MODULE_5__["TopicService"])); };
TopicsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TopicsComponent, selectors: [["app-topics"]], decls: 2, vars: 3, consts: [[4, "ngIf"], [1, "page-wrapper"], [1, "navbar"], [1, "heading-nav"], ["id", "heading"], [1, "page"], [1, "rectangle-flex-container"], ["id", "add-topic", "routerLink", "add", 1, "rectangle-flex-item", "hover", "box-shadow"], [1, "rectangle-content"], [1, "fas", "fa-plus"], ["class", "rectangle-flex-item hover box-shadow", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "rectangle-flex-item", "hover", "box-shadow", 3, "routerLink"], [1, "edit-strip", 3, "routerLink"], [1, "delete-strip", 3, "click"]], template: function TopicsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TopicsComponent_ng_container_0_Template, 17, 6, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx.subject$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["UpperCasePipe"]], styles: ["#add-topic[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n}\r\n\r\n#add-topic[_ngcontent-%COMP%] {\r\n    opacity: 0.7;\r\n}\r\n\r\n.rectangle-flex-item[_ngcontent-%COMP%] {\r\n    width: 400px;\r\n    min-height: 200px;\r\n    \r\n    background-color: #5C8686;\r\n}\r\n\r\n.rectangle-flex-item[_ngcontent-%COMP%]:hover {\r\n    background-color: #336868;\r\n}\r\n\r\n@media only screen and (min-width: 750px) {\r\n    .rectangle-flex-item[_ngcontent-%COMP%] {\r\n        width: calc(33.333% - 32px);\r\n         \r\n    }\r\n\r\n}\r\n\r\n@media only screen and (min-width: 1200px) {\r\n    .rectangle-flex-item[_ngcontent-%COMP%] {\r\n        width: calc(25% - 32px);\r\n        \r\n    }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcGljcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQiwwRUFBMEU7SUFDMUUseUJBQXlCO0FBQzdCOztBQUdBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0k7UUFDSSwyQkFBMkI7U0FDMUIsMEVBQTBFO0lBQy9FOztBQUVKOztBQUVBO0lBQ0k7UUFDSSx1QkFBdUI7UUFDdkIsMEVBQTBFO0lBQzlFOztBQUVKIiwiZmlsZSI6InRvcGljcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiNhZGQtdG9waWMgaSB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbiNhZGQtdG9waWMge1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG59XHJcblxyXG4ucmVjdGFuZ2xlLWZsZXgtaXRlbSB7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgIC8qIC0ycmVtIGJlY2F1c2UgdGhlcmVzIGEgbWFyZ2luIG9mIDEgcmVtIG9uIGVhY2ggc2lkZSBvZiBldmVyeSBmbGV4IGl0ZW0qL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVDODY4NjtcclxufVxyXG5cclxuXHJcbi5yZWN0YW5nbGUtZmxleC1pdGVtOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzY4Njg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzUwcHgpIHtcclxuICAgIC5yZWN0YW5nbGUtZmxleC1pdGVtIHtcclxuICAgICAgICB3aWR0aDogY2FsYygzMy4zMzMlIC0gMzJweCk7XHJcbiAgICAgICAgIC8qIC0ycmVtIGJlY2F1c2UgdGhlcmVzIGEgbWFyZ2luIG9mIDEgcmVtIG9uIGVhY2ggc2lkZSBvZiBldmVyeSBmbGV4IGl0ZW0qL1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC5yZWN0YW5nbGUtZmxleC1pdGVtIHtcclxuICAgICAgICB3aWR0aDogY2FsYygyNSUgLSAzMnB4KTtcclxuICAgICAgICAvKiAtMnJlbSBiZWNhdXNlIHRoZXJlcyBhIG1hcmdpbiBvZiAxIHJlbSBvbiBlYWNoIHNpZGUgb2YgZXZlcnkgZmxleCBpdGVtKi9cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "JKNI":
/*!**********************************************************************!*\
  !*** ./src/app/teacher/topic/add-question/add-question.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddQuestionComponent", function() { return AddQuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_question_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/question.service */ "mb4k");
/* harmony import */ var _services_question_type_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/question-type.service */ "sSzW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









function AddQuestionComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const questionType_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", questionType_r3.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](questionType_r3.type);
} }
function AddQuestionComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function AddQuestionComponent_div_7_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddQuestionComponent_div_7_div_5_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const i_r6 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.removeChoice(i_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("placeholder", "Choice \u2116", i_r6 + 1, "");
} }
function AddQuestionComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddQuestionComponent_div_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.addChoice(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add choice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Mark the checkbox of the choices that are correct");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AddQuestionComponent_div_7_div_5_Template, 6, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.choicesControls);
} }
class AddQuestionComponent {
    constructor(route, fb, questionService, questionTypeService) {
        this.route = route;
        this.fb = fb;
        this.questionService = questionService;
        this.questionTypeService = questionTypeService;
        this.questionForm = this.createForm();
        this.newQuestionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.topicId = this.route.snapshot.paramMap.get('topic-id');
    }
    ngOnInit() {
        this.questionTypes$ = this.questionTypeService.getQuestionTypes();
    }
    createForm() {
        return this.fb.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            maxPoints: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            choices: this.fb.array([])
        });
    }
    get choicesControls() {
        return this.questionForm.get("choices").controls;
    }
    choices() {
        return this.questionForm.get("choices");
    }
    createChoice() {
        return this.fb.group({
            text: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            isCorrect: [false]
        });
    }
    addChoice() {
        if (this.choices().length >= 5) {
            return;
        }
        this.choices().push(this.createChoice());
    }
    removeChoice(index) {
        this.choices().removeAt(index);
    }
    submitQuestion() {
        /*
        1. A closed question must have at least 2 choices.
        2. A closed question must have at least 1 correct choice.
        */
        let question = {};
        const formValue = this.questionForm.value;
        const questionType = formValue.type;
        if (questionType === 'open') {
            this.questionForm.removeControl('choices');
        }
        if (this.questionForm.invalid) {
            return;
        }
        if (questionType === 'open') {
            const { title, type, maxPoints } = formValue;
            question = { title, type, topicId: this.topicId, maxPoints };
        }
        else if (questionType === 'closed') {
            const { title, type, choices, maxPoints } = formValue;
            const atLeastOneRightChoice = choices.some((choice) => choice.isCorrect === true);
            if (choices.length < 2) {
                return;
            }
            else if (!atLeastOneRightChoice) {
                return;
            }
            question = { title, type, topicId: this.topicId, choices, maxPoints };
        }
        // return; 
        this.questionService.createQuestion(question)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1))
            .subscribe(() => {
            //inform parent that a question is created and refresh questions
            this.newQuestionEvent.emit();
            //refresh questionForm
            this.questionForm = this.createForm();
        });
    }
}
AddQuestionComponent.ɵfac = function AddQuestionComponent_Factory(t) { return new (t || AddQuestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_question_service__WEBPACK_IMPORTED_MODULE_4__["QuestionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_question_type_service__WEBPACK_IMPORTED_MODULE_5__["QuestionTypeService"])); };
AddQuestionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddQuestionComponent, selectors: [["app-add-question"]], outputs: { newQuestionEvent: "newQuestionEvent" }, decls: 10, vars: 6, consts: [[3, "formGroup"], ["id", "types"], ["class", "hover", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["id", "choices-list", 4, "ngIf"], [1, "hover", "form-blue-button", "submit-button", 3, "click"], [1, "hover"], ["type", "radio", "name", "type", "formControlName", "type", 3, "value"], ["for", "open-type"], ["placeholder", "Question's title", "formControlName", "title", 1, "blue-input"], ["placeholder", "Points for correct answer/s", "formControlName", "maxPoints", 1, "blue-input"], ["id", "choices-list"], ["id", "add-choice", 1, "hover", "white-button", 3, "click"], ["formArrayName", "choices", 4, "ngFor", "ngForOf"], ["formArrayName", "choices"], [3, "formGroupName"], ["type", "checkbox", "formControlName", "isCorrect", 1, "hover", "checkbox"], ["formControlName", "text", 1, "blue-input", "choice", 3, "placeholder"], [1, "hover", "remove-btn", 3, "click"]], template: function AddQuestionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Question type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AddQuestionComponent_div_4_Template, 4, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AddQuestionComponent_ng_container_6_Template, 3, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AddQuestionComponent_div_7_Template, 6, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddQuestionComponent_Template_button_click_8_listener() { return ctx.submitQuestion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Add question ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.questionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, ctx.questionTypes$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.questionForm.value.type != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.questionForm.value.type === "closed");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["#add-question-title[_ngcontent-%COMP%] {\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n#types[_ngcontent-%COMP%] {\r\n    margin: 1rem 0;\r\n}\r\n\r\n#add-choice[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n#choices-list[_ngcontent-%COMP%] {\r\n    margin-bottom: 12px 0; \r\n}\r\n\r\n.choice-box[_ngcontent-%COMP%] {\r\n    width: 10%;\r\n}\r\n\r\n.choice[_ngcontent-%COMP%] {\r\n    width: calc(70% - 20px); \r\n    margin: 0 10px;\r\n}\r\n\r\n.remove-btn[_ngcontent-%COMP%] {\r\n    padding: 0.2rem 0.4rem;\r\n}\r\n\r\n.choice-error[_ngcontent-%COMP%] {\r\n    margin-left: 28px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1xdWVzdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJhZGQtcXVlc3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhZGQtcXVlc3Rpb24tdGl0bGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuI3R5cGVzIHtcclxuICAgIG1hcmdpbjogMXJlbSAwO1xyXG59XHJcblxyXG4jYWRkLWNob2ljZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbiNjaG9pY2VzLWxpc3Qge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweCAwOyBcclxufVxyXG5cclxuLmNob2ljZS1ib3gge1xyXG4gICAgd2lkdGg6IDEwJTtcclxufVxyXG5cclxuLmNob2ljZSB7XHJcbiAgICB3aWR0aDogY2FsYyg3MCUgLSAyMHB4KTsgXHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxufVxyXG5cclxuLnJlbW92ZS1idG4ge1xyXG4gICAgcGFkZGluZzogMC4ycmVtIDAuNHJlbTtcclxufVxyXG5cclxuLmNob2ljZS1lcnJvciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjhweDtcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "OriK":
/*!******************************************************************!*\
  !*** ./src/app/teacher/topic/topic-edit/topic-edit.component.ts ***!
  \******************************************************************/
/*! exports provided: TopicEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicEditComponent", function() { return TopicEditComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_topic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/topic.service */ "Z/Et");






class TopicEditComponent {
    constructor(fb, route, router, topicService) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.topicService = topicService;
        this.topicEditForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
        });
        this.subjectId = this.route.snapshot.paramMap.get('subject-id');
        this.topicId = this.route.snapshot.paramMap.get('topic-id');
    }
    ngOnInit() {
        this.topicService.getTopic(this.topicId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1))
            .subscribe((topic) => {
            this.topicEditForm.patchValue({ name: topic.name });
        });
    }
    submit() {
        const { name } = this.topicEditForm.value;
        this.topicService.editTopic(this.topicId, name)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1))
            .subscribe(() => {
            this.router.navigate([`/teacher/subjects/${this.subjectId}/topics`]);
        });
    }
}
TopicEditComponent.ɵfac = function TopicEditComponent_Factory(t) { return new (t || TopicEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_topic_service__WEBPACK_IMPORTED_MODULE_4__["TopicService"])); };
TopicEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TopicEditComponent, selectors: [["app-topic-edit"]], decls: 9, vars: 2, consts: [[1, "form-wrapper"], [1, "center-form"], [1, "form-box", 3, "formGroup", "ngSubmit"], ["formControlName", "name", "type", "text", "placeholder", "Name", 1, "blue-input"], ["type", "submit", 1, "hover", "form-blue-button", "bottom-button", 3, "disabled"]], template: function TopicEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function TopicEditComponent_Template_form_ngSubmit_2_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Edit topic");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Edit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.topicEditForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.topicEditForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3BpYy1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "QwAj":
/*!***********************************************!*\
  !*** ./src/app/teacher/topic/topic.module.ts ***!
  \***********************************************/
/*! exports provided: TopicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicModule", function() { return TopicModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _add_topic_add_topic_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-topic/add-topic.component */ "s/f0");
/* harmony import */ var _topic_details_topic_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./topic-details/topic-details.component */ "lVBI");
/* harmony import */ var _topics_topics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./topics/topics.component */ "6Vqd");
/* harmony import */ var _topic_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./topic-routing.module */ "eJ07");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _add_question_add_question_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-question/add-question.component */ "JKNI");
/* harmony import */ var _question_details_question_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./question-details/question-details.component */ "rW6X");
/* harmony import */ var _topic_edit_topic_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./topic-edit/topic-edit.component */ "OriK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class TopicModule {
}
TopicModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: TopicModule });
TopicModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ factory: function TopicModule_Factory(t) { return new (t || TopicModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _topic_routing_module__WEBPACK_IMPORTED_MODULE_4__["TopicRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](TopicModule, { declarations: [_add_topic_add_topic_component__WEBPACK_IMPORTED_MODULE_1__["AddTopicComponent"],
        _topic_details_topic_details_component__WEBPACK_IMPORTED_MODULE_2__["TopicDetailsComponent"],
        _topics_topics_component__WEBPACK_IMPORTED_MODULE_3__["TopicsComponent"],
        _add_question_add_question_component__WEBPACK_IMPORTED_MODULE_6__["AddQuestionComponent"],
        _question_details_question_details_component__WEBPACK_IMPORTED_MODULE_7__["QuestionDetailsComponent"],
        _topic_edit_topic_edit_component__WEBPACK_IMPORTED_MODULE_8__["TopicEditComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _topic_routing_module__WEBPACK_IMPORTED_MODULE_4__["TopicRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "eJ07":
/*!*******************************************************!*\
  !*** ./src/app/teacher/topic/topic-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: TopicRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicRoutingModule", function() { return TopicRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_topic_add_topic_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-topic/add-topic.component */ "s/f0");
/* harmony import */ var _topic_details_topic_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./topic-details/topic-details.component */ "lVBI");
/* harmony import */ var _topic_edit_topic_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./topic-edit/topic-edit.component */ "OriK");
/* harmony import */ var _topics_topics_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./topics/topics.component */ "6Vqd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: '', children: [
            { path: 'add', component: _add_topic_add_topic_component__WEBPACK_IMPORTED_MODULE_1__["AddTopicComponent"] },
            { path: ':topic-id/edit', component: _topic_edit_topic_edit_component__WEBPACK_IMPORTED_MODULE_3__["TopicEditComponent"] },
            { path: ':topic-id', component: _topic_details_topic_details_component__WEBPACK_IMPORTED_MODULE_2__["TopicDetailsComponent"] },
            { path: '', component: _topics_topics_component__WEBPACK_IMPORTED_MODULE_4__["TopicsComponent"], pathMatch: 'full' },
        ] }
];
class TopicRoutingModule {
}
TopicRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: TopicRoutingModule });
TopicRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function TopicRoutingModule_Factory(t) { return new (t || TopicRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](TopicRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "lVBI":
/*!************************************************************************!*\
  !*** ./src/app/teacher/topic/topic-details/topic-details.component.ts ***!
  \************************************************************************/
/*! exports provided: TopicDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicDetailsComponent", function() { return TopicDetailsComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_topic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/topic.service */ "Z/Et");
/* harmony import */ var _services_question_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/question.service */ "mb4k");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _add_question_add_question_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../add-question/add-question.component */ "JKNI");
/* harmony import */ var _question_details_question_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../question-details/question-details.component */ "rW6X");








function TopicDetailsComponent_ng_container_0_ng_container_11_ng_container_1_tr_9_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopicDetailsComponent_ng_container_0_ng_container_11_ng_container_1_tr_9_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const question_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r11.getQuestion(question_r10.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](question_r10.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 2, question_r10.questionType.type));
} }
function TopicDetailsComponent_ng_container_0_ng_container_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TopicDetailsComponent_ng_container_0_ng_container_11_ng_container_1_tr_9_Template, 6, 4, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const questions_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", questions_r7);
} }
function TopicDetailsComponent_ng_container_0_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TopicDetailsComponent_ng_container_0_ng_container_11_ng_container_1_Template, 10, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const questions_r7 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", questions_r7.length !== 0)("ngIfElse", _r3);
} }
function TopicDetailsComponent_ng_container_0_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No questions have been added to this topic yet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TopicDetailsComponent_ng_container_0_app_add_question_16_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-add-question", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("newQuestionEvent", function TopicDetailsComponent_ng_container_0_app_add_question_16_Template_app_add_question_newQuestionEvent_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r14.refreshQuestions(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TopicDetailsComponent_ng_container_0_app_question_details_17_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-question-details", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("closeQuestionDetailsEvent", function TopicDetailsComponent_ng_container_0_app_question_details_17_Template_app_question_details_closeQuestionDetailsEvent_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r16.closeQuestionDetails(); })("deleteQuestionEvent", function TopicDetailsComponent_ng_container_0_app_question_details_17_Template_app_question_details_deleteQuestionEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r18.deleteQuestion($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("question", ctx_r6.selectedQuestion);
} }
function TopicDetailsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nav", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Topic questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, TopicDetailsComponent_ng_container_0_ng_container_11_Template, 2, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, TopicDetailsComponent_ng_container_0_ng_template_13_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, TopicDetailsComponent_ng_container_0_app_add_question_16_Template, 1, 0, "app-add-question", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, TopicDetailsComponent_ng_container_0_app_question_details_17_Template, 1, 1, "app-question-details", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const topic_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 4, topic_r1.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 6, ctx_r0.questions$));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.showQuestionDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.showQuestionDetails);
} }
class TopicDetailsComponent {
    constructor(route, topicService, questionService) {
        this.route = route;
        this.topicService = topicService;
        this.questionService = questionService;
        this.showQuestionDetails = false;
        this.subjectId = this.route.snapshot.paramMap.get('subject-id');
        this.topicId = this.route.snapshot.paramMap.get('topic-id');
    }
    ngOnInit() {
        this.topic$ = this.topicService.getTopic(this.topicId);
        this.questions$ = this.topicService.getTopicQuestions(this.topicId);
    }
    getQuestion(questionId) {
        this.questionService.getQuestion(questionId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1))
            .subscribe((question) => {
            this.showQuestionDetails = true;
            this.selectedQuestion = question;
        });
    }
    refreshQuestions() {
        this.questions$ = this.topicService.getTopicQuestions(this.topicId);
    }
    closeQuestionDetails() {
        this.showQuestionDetails = false;
    }
    deleteQuestion(questionId) {
        this.questionService.deleteQuestion(questionId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1))
            .subscribe(() => {
            this.refreshQuestions();
        });
    }
}
TopicDetailsComponent.ɵfac = function TopicDetailsComponent_Factory(t) { return new (t || TopicDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_topic_service__WEBPACK_IMPORTED_MODULE_3__["TopicService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_question_service__WEBPACK_IMPORTED_MODULE_4__["QuestionService"])); };
TopicDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TopicDetailsComponent, selectors: [["app-topic-details"]], decls: 2, vars: 3, consts: [[4, "ngIf"], [1, "page-wrapper"], [1, "navbar"], [1, "heading-nav"], ["id", "heading"], [1, "half-flex-container"], [1, "half-flex-item", "left"], [1, "subheading"], ["empty", ""], [1, "half-flex-item", "right", "box-shadow"], [3, "newQuestionEvent", 4, "ngIf"], [3, "question", "closeQuestionDetailsEvent", "deleteQuestionEvent", 4, "ngIf"], [4, "ngIf", "ngIfElse"], [1, "info-table"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], ["data-label", "Title"], ["data-label", "Type"], ["id", "empty"], [3, "newQuestionEvent"], [3, "question", "closeQuestionDetailsEvent", "deleteQuestionEvent"]], template: function TopicDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TopicDetailsComponent_ng_container_0_Template, 18, 8, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.topic$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _add_question_add_question_component__WEBPACK_IMPORTED_MODULE_6__["AddQuestionComponent"], _question_details_question_details_component__WEBPACK_IMPORTED_MODULE_7__["QuestionDetailsComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["UpperCasePipe"]], styles: ["#subheading[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n}\r\n\r\n#empty[_ngcontent-%COMP%] {\r\n    margin-top: 1rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcGljLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTs7Ozs7O0dBTUciLCJmaWxlIjoidG9waWMtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3N1YmhlYWRpbmcge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuI2VtcHR5IHtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbi8qIC5oYWxmLWZsZXgtaXRlbS5sZWZ0IHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbi5oYWxmLWZsZXgtaXRlbS5yaWdodCB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG59ICovXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "mb4k":
/*!******************************************************!*\
  !*** ./src/app/teacher/services/question.service.ts ***!
  \******************************************************/
/*! exports provided: QuestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionService", function() { return QuestionService; });
/* harmony import */ var src_app_core_app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/app-settings */ "1uUP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class QuestionService {
    constructor(http) {
        this.http = http;
        this.baseUrl = `${src_app_core_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"].API_ENDPOINT}/questions`;
    }
    createQuestion(question) {
        return this.http.post(`${this.baseUrl}`, question);
    }
    getQuestion(questionId) {
        return this.http.get(`${this.baseUrl}/${questionId}`);
    }
    deleteQuestion(questionId) {
        return this.http.delete(`${this.baseUrl}/${questionId}`);
    }
}
QuestionService.ɵfac = function QuestionService_Factory(t) { return new (t || QuestionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
QuestionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: QuestionService, factory: QuestionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "rW6X":
/*!******************************************************************************!*\
  !*** ./src/app/teacher/topic/question-details/question-details.component.ts ***!
  \******************************************************************************/
/*! exports provided: QuestionDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionDetailsComponent", function() { return QuestionDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function QuestionDetailsComponent_ng_container_10_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const choice_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", choice_r4.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", choice_r4.isCorrect, ")");
} }
function QuestionDetailsComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Choices: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, QuestionDetailsComponent_ng_container_10_p_4_Template, 4, 2, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.question.choices);
} }
function QuestionDetailsComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This is an open question");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class QuestionDetailsComponent {
    constructor() {
        this.closeQuestionDetailsEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteQuestionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    closeQuestionDetails() {
        this.closeQuestionDetailsEvent.emit();
    }
    deleteQuestion(questionId) {
        this.deleteQuestionEvent.emit(questionId);
        this.closeQuestionDetails();
    }
}
QuestionDetailsComponent.ɵfac = function QuestionDetailsComponent_Factory(t) { return new (t || QuestionDetailsComponent)(); };
QuestionDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuestionDetailsComponent, selectors: [["app-question-details"]], inputs: { question: "question" }, outputs: { closeQuestionDetailsEvent: "closeQuestionDetailsEvent", deleteQuestionEvent: "deleteQuestionEvent" }, decls: 15, vars: 4, consts: [[1, "clearfix"], [1, "far", "fa-times-circle", "hover", "close-cross", 3, "click"], [4, "ngIf", "ngIfElse"], ["openQuestion", ""], [1, "remove-btn", "hover", "submit-button", 3, "click"], [4, "ngFor", "ngForOf"]], template: function QuestionDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionDetailsComponent_Template_i_click_1_listener() { return ctx.closeQuestionDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Question title:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Max points:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, QuestionDetailsComponent_ng_container_10_Template, 5, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, QuestionDetailsComponent_ng_template_11_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuestionDetailsComponent_Template_button_click_13_listener() { return ctx.deleteQuestion(ctx.question.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Delete question");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.question.title, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.question.maxPoints, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.question.questionType.type === "closed")("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".close-cross[_ngcontent-%COMP%] {\r\n    font-size: 32px;\r\n    float: right;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0aW9uLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCIiwiZmlsZSI6InF1ZXN0aW9uLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbG9zZS1jcm9zcyB7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "s/f0":
/*!****************************************************************!*\
  !*** ./src/app/teacher/topic/add-topic/add-topic.component.ts ***!
  \****************************************************************/
/*! exports provided: AddTopicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTopicComponent", function() { return AddTopicComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_topic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/topic.service */ "Z/Et");






class AddTopicComponent {
    constructor(fb, route, router, topicService) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.topicService = topicService;
        this.topicForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
        });
    }
    ngOnInit() {
        this.subjectId = this.route.snapshot.paramMap.get('subject-id');
    }
    submit() {
        if (this.topicForm.invalid) {
            return;
        }
        const { name } = this.topicForm.value;
        this.topicService.createTopic(name, this.subjectId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1))
            .subscribe(() => {
            this.router.navigate([`/teacher/subjects/${this.subjectId}/topics`]);
        });
    }
}
AddTopicComponent.ɵfac = function AddTopicComponent_Factory(t) { return new (t || AddTopicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_topic_service__WEBPACK_IMPORTED_MODULE_4__["TopicService"])); };
AddTopicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AddTopicComponent, selectors: [["app-add-topic"]], decls: 9, vars: 2, consts: [[1, "form-wrapper"], [1, "center-form"], [1, "form-box", 3, "formGroup", "ngSubmit"], ["formControlName", "name", "type", "text", "placeholder", "Name", 1, "blue-input"], ["type", "submit", 1, "hover", "form-blue-button", "bottom-button", 3, "disabled"]], template: function AddTopicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AddTopicComponent_Template_form_ngSubmit_2_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Create topic");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Create ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.topicForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.topicForm.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtdG9waWMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "sSzW":
/*!***********************************************************!*\
  !*** ./src/app/teacher/services/question-type.service.ts ***!
  \***********************************************************/
/*! exports provided: QuestionTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionTypeService", function() { return QuestionTypeService; });
/* harmony import */ var src_app_core_app_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/app-settings */ "1uUP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class QuestionTypeService {
    constructor(http) {
        this.http = http;
        this.baseUrl = `${src_app_core_app_settings__WEBPACK_IMPORTED_MODULE_0__["AppSettings"].API_ENDPOINT}/question-types`;
    }
    getQuestionTypes() {
        return this.http.get(this.baseUrl);
    }
}
QuestionTypeService.ɵfac = function QuestionTypeService_Factory(t) { return new (t || QuestionTypeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
QuestionTypeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: QuestionTypeService, factory: QuestionTypeService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=topic-topic-module-es2015.js.map