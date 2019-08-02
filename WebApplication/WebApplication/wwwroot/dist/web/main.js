(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app/Test/add-athlete/add-athlete.component.html":
/*!*********************************************************!*\
  !*** ./app/Test/add-athlete/add-athlete.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" style=\"margin-top: 3%; text-align: center;\">\r\n    <h3>Add Athlete To Test</h3>\r\n\r\n    <div class=\"container\" *ngFor=\"let test of TestDetails\" style=\"margin-top: 5%;\">\r\n        <div *ngIf=\"test.TestType.Name === 'Cooper Test'; then coopertest else sprinttest\"></div>\r\n\r\n        <ng-template #coopertest>\r\n            <form #form=\"ngForm\" autocomplete=\"off\">\r\n\r\n                <div class=\"form-group\">\r\n                    <label>Athlete Name</label>\r\n                    <select id=\"name\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"FormData.name\" class=\"form-control\" required>\r\n                        <option disabled selected> --Select-- </option>\r\n                        <option *ngFor=\"let athlete of AthleteDetails\"> {{ athlete.Name }} </option>\r\n                    </select>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>Distance</label>\r\n                    <input type=\"text\" id=\"distance\" name=\"distance\" #distance=\"ngModel\" [(ngModel)]=\"FormData.distance\" class=\"form-control\" required />\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <button type=\"submit\" class=\"btn btn-success\" (click)=\"athleteSubmit(TestId)\" [disabled]=\"form.invalid\">Save</button>\r\n                </div>\r\n            </form>\r\n        </ng-template>\r\n\r\n        <ng-template #sprinttest>\r\n            <form #form=\"ngForm\" autocomplete=\"off\">\r\n                <div class=\"form-group\">\r\n                    <label>Athlete Name</label>\r\n                    <select id=\"name\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"FormData.name\" class=\"form-control\" required>\r\n                        <option disabled selected> --Select-- </option>\r\n                        <option *ngFor=\"let athlete of AthleteDetails\"> {{ athlete.Name }} </option>\r\n                    </select>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label>Time</label>\r\n                    <input type=\"text\" id=\"time\" name=\"time\" #time=\"ngModel\" [(ngModel)]=\"FormData.time\" class=\"form-control\" required />\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <button type=\"submit\" class=\"btn btn-success\" (click)=\"athleteSubmit(TestId)\" [disabled]=\"form.invalid\">Save</button>\r\n                </div>\r\n            </form>\r\n        </ng-template>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./app/Test/add-athlete/add-athlete.component.ts":
/*!*******************************************************!*\
  !*** ./app/Test/add-athlete/add-athlete.component.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const test_service_1 = __webpack_require__(/*! ../shared/test.service */ "./app/Test/shared/test.service.ts");
const router_1 = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");
let AddAthleteComponent = class AddAthleteComponent {
    constructor(_testService, _route, _router) {
        this._testService = _testService;
        this._route = _route;
        this._router = _router;
        this.TestId = +this._route.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        this.FormData = {
            name: '--Select--',
            distance: 0,
            time: 0
        };
        this._testService.getAthletes().subscribe(res => {
            console.log(res);
            this.AthleteDetails = res;
        }, err => {
            console.log(err);
        });
        this._testService.GetTestById(this.TestId).subscribe(res => {
            this.TestDetails = res;
        }, err => {
            console.log(err);
        });
    }
    athleteSubmit(id) {
        this._testService.addAthlete(id, this.FormData).subscribe(res => {
            this._router.navigate(['/test-details/', this.TestId]);
        }, err => {
            console.log(err);
        });
    }
};
AddAthleteComponent = __decorate([
    core_1.Component({
        selector: 'app-add-athlete',
        template: __webpack_require__(/*! ./add-athlete.component.html */ "./app/Test/add-athlete/add-athlete.component.html")
    }),
    __metadata("design:paramtypes", [test_service_1.TestService, router_1.ActivatedRoute, router_1.Router])
], AddAthleteComponent);
exports.AddAthleteComponent = AddAthleteComponent;


/***/ }),

/***/ "./app/Test/create-test/create-test.component.html":
/*!*********************************************************!*\
  !*** ./app/Test/create-test/create-test.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"jumbotron\" style=\"margin-top: 3%; text-align: center;\">\r\n    <h3>Create New Test</h3>\r\n\r\n    <form #form=\"ngForm\" (submit)=\"onSubmit()\" autocomplete=\"off\" style=\"margin-top: 5%;\">\r\n        <input type=\"text\" name=\"id\" [value]=\"FormData.id\" hidden>\r\n\r\n        <div class=\"form-group\">\r\n            <label>Test Date</label>\r\n            <input type=\"datetime-local\" name=\"date\" #date=\"ngModel\" [(ngModel)]=\"FormData.date\"\r\n                   class=\"form-control\" required>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label>Test Type</label>\r\n            <select name=\"testtype\" #testtype=\"ngModel\" [(ngModel)]=\"FormData.testtype\" class=\"form-control\"\r\n                    style=\"margin-bottom: 3%;\" required>\r\n                <option value=\"\">--Select--</option>\r\n                <option *ngFor=\"let test of TestType\"> {{ test.Name }} </option>\r\n            </select>\r\n        </div>\r\n        \r\n        <div class=\"form-group\">\r\n            <button class=\"btn btn-success btn-lg\" type=\"submit\" [disabled]=\"form.invalid\">Save</button>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['/test-list']\">back</a>\r\n        </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./app/Test/create-test/create-test.component.ts":
/*!*******************************************************!*\
  !*** ./app/Test/create-test/create-test.component.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const test_service_1 = __webpack_require__(/*! ../shared/test.service */ "./app/Test/shared/test.service.ts");
const router_1 = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");
let CreateTestComponent = class CreateTestComponent {
    constructor(_testService, _route) {
        this._testService = _testService;
        this._route = _route;
    }
    ngOnInit() {
        this.FormData = {
            id: 0,
            date: null,
            testtype: ''
        };
        this._testService.GetTestTypes().subscribe(res => {
            this.TestType = res;
            console.log(this.TestType);
        }, err => {
            console.log(err);
        });
    }
    onSubmit() {
        this._testService.createTest(this.FormData).subscribe(res => {
            this._route.navigate(['/test-list']);
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
};
CreateTestComponent = __decorate([
    core_1.Component({
        selector: 'app-create-test',
        template: __webpack_require__(/*! ./create-test.component.html */ "./app/Test/create-test/create-test.component.html")
    }),
    __metadata("design:paramtypes", [test_service_1.TestService, router_1.Router])
], CreateTestComponent);
exports.CreateTestComponent = CreateTestComponent;


/***/ }),

/***/ "./app/Test/edit-athlete/edit-athlete.component.html":
/*!***********************************************************!*\
  !*** ./app/Test/edit-athlete/edit-athlete.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" style=\"margin-top: 3%;\">\r\n    <h3>Edit Athlete</h3>\r\n    <div class=\"container\" *ngIf=\"toDisplay\" style=\"margin-top: 5%;\">\r\n        <div *ngIf=\"Athlete.CooperTestDistance !== null\">\r\n            <form (submit)=\"onSubmit()\" autocomplete=\"off\">\r\n                <input type=\"text\" name=\"id\" [value]=\"Athlete.UserID\" hidden>\r\n                <input type=\"text\" name=\"id\" [value]=\"Athlete.TestID\" hidden>\r\n                <div class=\"form-group\">\r\n                    <label>Athlete Name</label>\r\n                    <input id=\"username\" name=\"username\" #username=\"ngModel\" class=\"form-control\" [(ngModel)]=\"Athlete.Users.UserName\" />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label>Distance</label>\r\n                    <input id=\"coopertestdistance\" name=\"coopertestdistance\" #coopertestdistance=\"ngModel\" class=\"form-control\" [(ngModel)]=\"Athlete.CooperTestDistance\" />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <button type=\"submit\" class=\"btn btn-success\">Save</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div *ngIf=\"Athlete.CooperTestDistance === null\">\r\n            <form (submit)=\"onSubmit()\" autocomplete=\"off\">\r\n                <input type=\"text\" name=\"id\" [value]=\"Athlete.UserID\" hidden>\r\n                <input type=\"text\" name=\"id\" [value]=\"Athlete.TestID\" hidden>\r\n                <div class=\"form-group\">\r\n                    <label>Athlete Name</label>\r\n                    <input id=\"username\" name=\"username\" #username=\"ngModel\" class=\"form-control\" [(ngModel)]=\"Athlete.Users.UserName\" />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label>Time</label>\r\n                    <input id=\"sprinttesttime\" name=\"sprinttesttime\" #sprinttesttime=\"ngModel\" class=\"form-control\" [(ngModel)]=\"Athlete.SprintTestTime\" />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <button type=\"submit\" class=\"btn btn-success\">Save</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./app/Test/edit-athlete/edit-athlete.component.ts":
/*!*********************************************************!*\
  !*** ./app/Test/edit-athlete/edit-athlete.component.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const test_service_1 = __webpack_require__(/*! ../shared/test.service */ "./app/Test/shared/test.service.ts");
const router_1 = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");
let EditAthleteComponent = class EditAthleteComponent {
    constructor(_testService, _route, _router) {
        this._testService = _testService;
        this._route = _route;
        this._router = _router;
        this.toDisplay = false;
    }
    ngOnInit() {
        this.TestId = +this._route.snapshot.paramMap.get('testId');
        this.AthleteId = this._route.snapshot.paramMap.get('userId');
        this._testService.getAthleteByTestId(this.TestId, this.AthleteId).subscribe(res => {
            this.Athlete = res;
            this.toDisplay = true;
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
    onSubmit() {
        this._testService.editAthlete(this.TestId, this.AthleteId, this.Athlete).subscribe(res => {
            console.log(res);
            this._router.navigate(['/test-details/', this.TestId]);
        }, err => {
            console.log(err);
        });
    }
};
EditAthleteComponent = __decorate([
    core_1.Component({
        selector: 'app-edit-athlete',
        template: __webpack_require__(/*! ./edit-athlete.component.html */ "./app/Test/edit-athlete/edit-athlete.component.html")
    }),
    __metadata("design:paramtypes", [test_service_1.TestService, router_1.ActivatedRoute, router_1.Router])
], EditAthleteComponent);
exports.EditAthleteComponent = EditAthleteComponent;


/***/ }),

/***/ "./app/Test/shared/test.service.ts":
/*!*****************************************!*\
  !*** ./app/Test/shared/test.service.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const http_1 = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm2015/http.js");
let TestService = class TestService {
    constructor(_http) {
        this._http = _http;
        this.URL = "http://localhost:55950/api/Test";
    }
    getTestList() {
        return this._http.get(this.URL + "/GetAllTests");
    }
    GetTestTypes() {
        return this._http.get(this.URL + "/GetTestTypes");
    }
    GetTestById(id) {
        return this._http.get(this.URL + "/GetTestById/" + id);
    }
    createTest(data) {
        return this._http.post(this.URL + '/CreateTest', data);
    }
    deleteTest(testID) {
        return this._http.delete(this.URL + "/DeleteTest/" + testID);
    }
    getAthletes() {
        return this._http.get(this.URL + "/GetAthletes");
    }
    addAthlete(id, data) {
        return this._http.post(this.URL + "/AddAthlete/" + id, data);
    }
    getAthleteByTestId(testId, athleteId) {
        return this._http.get(this.URL + "/GetAthleteByTest/" + testId + "/" + athleteId);
    }
    editAthlete(testId, athleteId, data) {
        return this._http.put(this.URL + "/EditAthlete/" + testId + "/" + athleteId, data);
    }
};
TestService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [http_1.HttpClient])
], TestService);
exports.TestService = TestService;


/***/ }),

/***/ "./app/Test/test-details/test-details.component.html":
/*!***********************************************************!*\
  !*** ./app/Test/test-details/test-details.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" style=\"margin-top: 3%; text-align: center;\">\r\n    <h2 style=\"font-weight: bold;\">Test Details</h2>\r\n\r\n    <div class=\"container\" *ngFor=\"let test of testDetails\">\r\n        <h2> {{ test.TestType.Name }} </h2>\r\n        <h3> {{ test.Test.Date | date: 'dd/MM/yyyy' }} </h3>\r\n\r\n        <div *ngIf=\"test.TestType.Name === 'Cooper Test'; then coopertest else sprinttest\">\r\n        </div>\r\n\r\n        <ng-template #coopertest>\r\n            <table class=\"table table-striped table-hover\" style=\"margin-top: 5%;\">\r\n                <thead>\r\n                    <tr style=\"font-weight: bold\">\r\n                        <td>Ranking</td>\r\n                        <td>Distance(meter)</td>\r\n                        <td>Fitness Rating</td>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let user of test.Test.UserTestMappers\">\r\n                        <td>\r\n                            <a [routerLink]=\"['/edit-athlete/', test.TestID, user.UserID]\" style=\"display: block; text-decoration: none;\r\n                            color: black;\">{{ user.Users.UserName }}</a>\r\n                        </td>\r\n                        <td>\r\n                            <a [routerLink]=\"['/edit-athlete/', test.TestID, user.UserID]\" style=\"display: block; text-decoration: none;\r\n                                color: black;\">{{ user.CooperTestDistance }}</a>\r\n                        </td>\r\n                        <td>\r\n                            <a [routerLink]=\"['/edit-athlete/', test.TestID, user.UserID]\" style=\"display: block; text-decoration: none;\r\n                            color: black;\">{{ user.FitnessRating }}</a>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td colspan=\"3\">\r\n                            <a class=\"btn btn-success\"\r\n                               [routerLink]=\"['/test-details/', test.TestID, 'add-athlete']\">Add Athlete To Test</a>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td colspan=\"3\">\r\n                            <button type=\"submit\" class=\"btn btn-danger\"\r\n                                    (click)=\"deleteTest(test.TestID)\">\r\n                                Delete\r\n                                Test\r\n                            </button>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </ng-template>\r\n\r\n        <ng-template #sprinttest>\r\n            <table class=\"table table-striped table-hover\" style=\"margin-top: 5%;\">\r\n                <thead>\r\n                    <tr style=\"font-weight: bold;\">\r\n                        <td>Ranking</td>\r\n                        <td>Time(Seconds)</td>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let user of test.Test.UserTestMappers\">\r\n                        <td>\r\n                            <a [routerLink]=\"['/edit-athlete/', test.TestID, user.UserID]\" style=\"display: block; text-decoration: none;\r\n                        color: black;\">{{ user.Users.UserName }}</a>\r\n                        </td>\r\n                        <td>\r\n                            <a [routerLink]=\"['/edit-athlete/', test.TestID, user.UserID]\" style=\"display: block; text-decoration: none;\r\n                            color: black;\">{{ user.SprintTestTime }}</a>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td colspan=\"3\">\r\n                            <a class=\"btn btn-success\"\r\n                               [routerLink]=\"['/test-details/', test.TestID, 'add-athlete']\">Add Athlete To Test</a>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td colspan=\"3\">\r\n                            <button type=\"submit\" class=\"btn btn-danger\"\r\n                                    (click)=\"deleteTest(test.TestID)\">\r\n                                Delete\r\n                                Test\r\n                            </button>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </ng-template>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./app/Test/test-details/test-details.component.ts":
/*!*********************************************************!*\
  !*** ./app/Test/test-details/test-details.component.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const test_service_1 = __webpack_require__(/*! ../shared/test.service */ "./app/Test/shared/test.service.ts");
const router_1 = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");
let TestDetailsComponent = class TestDetailsComponent {
    constructor(_testService, _route, _router) {
        this._testService = _testService;
        this._route = _route;
        this._router = _router;
        this.testID = this._route.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        this._testService.GetTestById(+this.testID).subscribe(res => {
            this.testDetails = res;
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
    deleteTest(testID) {
        if (confirm("Are You Sure?")) {
            this._testService.deleteTest(testID).subscribe(res => {
                this._router.navigate(['/test-list']);
            }, err => {
                console.log(err);
            });
        }
    }
};
TestDetailsComponent = __decorate([
    core_1.Component({
        selector: 'app-test-details',
        template: __webpack_require__(/*! ./test-details.component.html */ "./app/Test/test-details/test-details.component.html")
    }),
    __metadata("design:paramtypes", [test_service_1.TestService, router_1.ActivatedRoute, router_1.Router])
], TestDetailsComponent);
exports.TestDetailsComponent = TestDetailsComponent;


/***/ }),

/***/ "./app/Test/test-list/test-list.component.html":
/*!*****************************************************!*\
  !*** ./app/Test/test-list/test-list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" style=\"margin-top: 3%; text-align: center;\">\r\n    <a class=\"btn btn-primary btn-lg\" [routerLink]=\"['/create-test']\" style=\"margin-bottom: 5%;\">Create new Test</a>\r\n\r\n    <table class=\"table table-hover\">\r\n        <thead>\r\n            <tr style=\"font-weight: bold;\">\r\n                <td>Date</td>\r\n                <td>Number Of Participants</td>\r\n                <td>Test Type</td>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let test of TestList\">\r\n                <td><a [routerLink]=\"['/test-details/', test.Test.ID]\" style=\"text-decoration: none; display: block; color: black;\"> {{ test.Test.Date | date: 'dd/MM/yyyy' }} </a></td>\r\n                <td><a [routerLink]=\"['/test-details/', test.Test.ID]\" style=\"text-decoration: none; display: block; color: black;\"> {{ test.Test.UserTestMappers.length }} </a></td>\r\n                <td><a [routerLink]=\"['/test-details/', test.Test.ID]\" style=\"text-decoration: none; display: block; color: black;\"> {{ test.TestType.Name }} </a></td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "./app/Test/test-list/test-list.component.ts":
/*!***************************************************!*\
  !*** ./app/Test/test-list/test-list.component.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const test_service_1 = __webpack_require__(/*! ../shared/test.service */ "./app/Test/shared/test.service.ts");
let TestListComponent = class TestListComponent {
    constructor(_testService) {
        this._testService = _testService;
    }
    ngOnInit() {
        this._testService.getTestList().subscribe(res => {
            this.TestList = res;
        }, err => {
            console.log(err);
        });
    }
};
TestListComponent = __decorate([
    core_1.Component({
        selector: 'app-test-list',
        template: __webpack_require__(/*! ./test-list.component.html */ "./app/Test/test-list/test-list.component.html")
    }),
    __metadata("design:paramtypes", [test_service_1.TestService])
], TestListComponent);
exports.TestListComponent = TestListComponent;


/***/ }),

/***/ "./app/Test/test.module.ts":
/*!*********************************!*\
  !*** ./app/Test/test.module.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const common_1 = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm2015/common.js");
const test_list_component_1 = __webpack_require__(/*! ./test-list/test-list.component */ "./app/Test/test-list/test-list.component.ts");
const create_test_component_1 = __webpack_require__(/*! ./create-test/create-test.component */ "./app/Test/create-test/create-test.component.ts");
const test_details_component_1 = __webpack_require__(/*! ./test-details/test-details.component */ "./app/Test/test-details/test-details.component.ts");
const test_service_1 = __webpack_require__(/*! ./shared/test.service */ "./app/Test/shared/test.service.ts");
const forms_1 = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm2015/forms.js");
const router_1 = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");
const http_1 = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm2015/http.js");
const platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
const add_athlete_component_1 = __webpack_require__(/*! ./add-athlete/add-athlete.component */ "./app/Test/add-athlete/add-athlete.component.ts");
const edit_athlete_component_1 = __webpack_require__(/*! ./edit-athlete/edit-athlete.component */ "./app/Test/edit-athlete/edit-athlete.component.ts");
let TestModule = class TestModule {
};
TestModule = __decorate([
    core_1.NgModule({
        declarations: [test_list_component_1.TestListComponent, create_test_component_1.CreateTestComponent, test_details_component_1.TestDetailsComponent, add_athlete_component_1.AddAthleteComponent, edit_athlete_component_1.EditAthleteComponent],
        imports: [
            common_1.CommonModule,
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpClientModule,
            router_1.RouterModule
        ],
        exports: [
            create_test_component_1.CreateTestComponent,
            test_details_component_1.TestDetailsComponent,
            test_list_component_1.TestListComponent,
            add_athlete_component_1.AddAthleteComponent,
            edit_athlete_component_1.EditAthleteComponent
        ],
        providers: [test_service_1.TestService]
    })
], TestModule);
exports.TestModule = TestModule;


/***/ }),

/***/ "./app/User/shared/user.service.ts":
/*!*****************************************!*\
  !*** ./app/User/shared/user.service.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const http_1 = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm2015/http.js");
let UserService = class UserService {
    constructor(_http) {
        this._http = _http;
        this.URL = 'http://localhost:55950/api/User';
    }
    GetAllUsers() {
        return this._http.get(this.URL + "/GetAllUsers");
    }
    GetUsers() {
        return this._http.get(this.URL + "/GetUser");
    }
    GetUsersById(id) {
        return this._http.get(this.URL + "/GetUser/" + id);
    }
    UpdateUser(user) {
        return this._http.put(this.URL + "/EditUser/" + user.ID, user);
    }
    DeleteUser(id) {
        return this._http.delete(this.URL + "/DeleteUser/" + id);
    }
};
UserService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [http_1.HttpClient])
], UserService);
exports.UserService = UserService;


/***/ }),

/***/ "./app/User/user-edit/user-edit.component.html":
/*!*****************************************************!*\
  !*** ./app/User/user-edit/user-edit.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" style=\"text-align: center\">\r\n    <h3>Edit Athlete</h3>\r\n\r\n    <div class=\"container\" *ngIf=\"IsAvailable\">\r\n        <form #form=\"ngForm\" (submit)=\"UserEdit()\">\r\n            <input id=\"id\" name=\"id\" [(ngModel)]=\"UserDetails.ID\" hidden />\r\n            <div class=\"form-group\">\r\n                <label>User Name</label>\r\n                <input class=\"form-control\" id=\"username\" name=\"username\" [(ngModel)]=\"UserDetails.Name\"/>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>User Role</label>\r\n                <select class=\"form-control\" id=\"role\" name=\"role\" [(ngModel)]=\"UserDetails.Role\">\r\n                    <option>Coach</option>\r\n                    <option>Athlete</option>\r\n                </select>\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-success\">Save</button>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./app/User/user-edit/user-edit.component.ts":
/*!***************************************************!*\
  !*** ./app/User/user-edit/user-edit.component.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
//import { UserService } from '../shared/user.service';
const router_1 = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");
const user_service_1 = __webpack_require__(/*! ../shared/user.service */ "./app/User/shared/user.service.ts");
let UserEditComponent = class UserEditComponent {
    constructor(_service, _route, _router) {
        this._service = _service;
        this._route = _route;
        this._router = _router;
    }
    ngOnInit() {
        this._service.GetUsersById(this._route.snapshot.paramMap.get('id')).subscribe(res => {
            this.IsAvailable = true;
            this.UserDetails = res;
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
    UserEdit() {
        this._service.UpdateUser(this.UserDetails).subscribe(res => {
            this._router.navigate(['/user-list']);
        }, err => {
            console.log("Error: " + err);
        });
    }
};
UserEditComponent = __decorate([
    core_1.Component({
        selector: 'app-user-edit',
        template: __webpack_require__(/*! ./user-edit.component.html */ "./app/User/user-edit/user-edit.component.html")
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.ActivatedRoute, router_1.Router])
], UserEditComponent);
exports.UserEditComponent = UserEditComponent;


/***/ }),

/***/ "./app/User/user-list/user-list.component.html":
/*!*****************************************************!*\
  !*** ./app/User/user-list/user-list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" style=\"text-align: center;\" *ngIf=\"isValid\">\r\n    <div *ngIf=\"!UserList.isCoach\">\r\n        <div class=\"container\" *ngFor=\"let user of UserList.Users\">\r\n            <h3 style=\"font-weight: bold;\">Welcome {{ user.Name }}</h3>\r\n\r\n            <h3>Test Details</h3>\r\n\r\n            <div>\r\n                <table class=\"table table-striped\" style=\"margin-top:5%;\">\r\n                    <thead>\r\n                        <tr style=\"font-weight: bold;\">\r\n                            <td>Test Id</td>\r\n                            <td>Sprint Test Time</td>\r\n                            <td>Cooper Test Distance</td>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody *ngFor=\"let test of UserList.UserTest\">\r\n                        <tr>\r\n                            <td> {{ test.TestID }} </td>\r\n                            <td> {{ test.SprintTestTime }} </td>\r\n                            <td> {{ test.CooperTestDistance }} </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"UserList.isCoach\">\r\n        <h3>User List</h3>\r\n        <table class=\"table table-striped\" style=\"margin-top: 5%;\">\r\n            <thead>\r\n                <tr style=\"font-weight: bold; text-transform: uppercase\">\r\n                    <td>Name</td>\r\n                    <td>User Role</td>\r\n                    <td></td>\r\n                    <td></td>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let user of UserList.Users\">\r\n                    <td> {{ user.Name }} </td>\r\n                    <td> {{ user.Role }} </td>\r\n                    <td> <a class=\"btn btn-primary\" [routerLink]=\"['/user-edit/', user.ID]\">Edit</a> </td>\r\n                    <td> <button class=\"btn btn-danger\" (click)=\"DeleteUser(user.ID)\">Delete</button> </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n        <a class=\"btn btn-primary btn-lg\" [routerLink]=\"['/test-list']\">View All Tests</a>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./app/User/user-list/user-list.component.ts":
/*!***************************************************!*\
  !*** ./app/User/user-list/user-list.component.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const user_service_1 = __webpack_require__(/*! ../shared/user.service */ "./app/User/shared/user.service.ts");
const router_1 = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");
let UserListComponent = class UserListComponent {
    constructor(_service, _router) {
        this._service = _service;
        this._router = _router;
        this.isValid = false;
    }
    ngOnInit() {
        this._service.GetUsers().subscribe(res => {
            this.UserList = res;
            console.log(this.UserList);
            this.isValid = true;
        }, err => {
            console.log(err);
        });
    }
    DeleteUser(id) {
        if (confirm("Are you sure?")) {
            this._service.DeleteUser(id).subscribe((res) => {
                debugger;
                if (res.isCoach) {
                    location.href = "/Home/Login";
                }
                else {
                    this._router.navigate(['/user-list']);
                }
            }, err => {
                console.log(err);
            });
        }
    }
};
UserListComponent = __decorate([
    core_1.Component({
        selector: 'app-user-list',
        template: __webpack_require__(/*! ./user-list.component.html */ "./app/User/user-list/user-list.component.html")
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
], UserListComponent);
exports.UserListComponent = UserListComponent;


/***/ }),

/***/ "./app/User/user.module.ts":
/*!*********************************!*\
  !*** ./app/User/user.module.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const common_1 = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm2015/common.js");
const user_edit_component_1 = __webpack_require__(/*! ./user-edit/user-edit.component */ "./app/User/user-edit/user-edit.component.ts");
const user_list_component_1 = __webpack_require__(/*! ./user-list/user-list.component */ "./app/User/user-list/user-list.component.ts");
const user_service_1 = __webpack_require__(/*! ./shared/user.service */ "./app/User/shared/user.service.ts");
const platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
const http_1 = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm2015/http.js");
const forms_1 = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm2015/forms.js");
const router_1 = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");
let UserModule = class UserModule {
};
UserModule = __decorate([
    core_1.NgModule({
        declarations: [
            user_edit_component_1.UserEditComponent,
            user_list_component_1.UserListComponent
        ],
        imports: [
            common_1.CommonModule,
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpClientModule,
            router_1.RouterModule
        ],
        exports: [
            user_edit_component_1.UserEditComponent,
            user_list_component_1.UserListComponent
        ],
        providers: [user_service_1.UserService]
    })
], UserModule);
exports.UserModule = UserModule;


/***/ }),

/***/ "./app/app.component.ts":
/*!******************************!*\
  !*** ./app/app.component.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
let AppComponent = class AppComponent {
    ngOnInit() {
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: __webpack_require__(/*! ./app.html */ "./app/app.html")
    })
], AppComponent);
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./app/app.html":
/*!**********************!*\
  !*** ./app/app.html ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 3%;\">\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./app/app.module.ts":
/*!***************************!*\
  !*** ./app/app.module.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const forms_1 = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm2015/forms.js");
const animations_1 = __webpack_require__(/*! @angular/platform-browser/animations */ "../node_modules/@angular/platform-browser/fesm2015/animations.js");
const http_1 = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm2015/http.js");
const app_component_1 = __webpack_require__(/*! ./app.component */ "./app/app.component.ts");
const router_1 = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm2015/router.js");
const user_module_1 = __webpack_require__(/*! ./User/user.module */ "./app/User/user.module.ts");
const user_list_component_1 = __webpack_require__(/*! ./User/user-list/user-list.component */ "./app/User/user-list/user-list.component.ts");
const user_edit_component_1 = __webpack_require__(/*! ./User/user-edit/user-edit.component */ "./app/User/user-edit/user-edit.component.ts");
const test_list_component_1 = __webpack_require__(/*! ./Test/test-list/test-list.component */ "./app/Test/test-list/test-list.component.ts");
const create_test_component_1 = __webpack_require__(/*! ./Test/create-test/create-test.component */ "./app/Test/create-test/create-test.component.ts");
const test_details_component_1 = __webpack_require__(/*! ./Test/test-details/test-details.component */ "./app/Test/test-details/test-details.component.ts");
const add_athlete_component_1 = __webpack_require__(/*! ./Test/add-athlete/add-athlete.component */ "./app/Test/add-athlete/add-athlete.component.ts");
const edit_athlete_component_1 = __webpack_require__(/*! ./Test/edit-athlete/edit-athlete.component */ "./app/Test/edit-athlete/edit-athlete.component.ts");
const test_module_1 = __webpack_require__(/*! ./Test/test.module */ "./app/Test/test.module.ts");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpClientModule,
            animations_1.BrowserAnimationsModule,
            user_module_1.UserModule,
            test_module_1.TestModule,
            router_1.RouterModule.forRoot([
                {
                    path: '',
                    component: user_list_component_1.UserListComponent,
                    pathMatch: 'full'
                },
                {
                    path: 'user-list',
                    component: user_list_component_1.UserListComponent
                },
                {
                    path: 'user-edit/:id',
                    component: user_edit_component_1.UserEditComponent
                },
                {
                    path: 'test-list',
                    component: test_list_component_1.TestListComponent
                },
                {
                    path: 'create-test',
                    component: create_test_component_1.CreateTestComponent
                },
                {
                    path: 'test-details/:id',
                    component: test_details_component_1.TestDetailsComponent
                },
                {
                    path: 'test-details/:id/add-athlete',
                    component: add_athlete_component_1.AddAthleteComponent
                },
                {
                    path: 'edit-athlete/:testId/:userId',
                    component: edit_athlete_component_1.EditAthleteComponent
                }
            ])
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./app/main.ts":
/*!*********************!*\
  !*** ./app/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm2015/core.js");
const platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./app/app.module.ts");
const environment_1 = __webpack_require__(/*! ../environments/environment */ "./environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ "./environments/environment.ts":
/*!*************************************!*\
  !*** ./environments/environment.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./app/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\subhradeep\Desktop\Asp.net Core Test\SportsApplicationWithLogin\WebApplication\WebApplication\wwwroot\app\main.ts */"./app/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map