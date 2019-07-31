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
const core_1 = require("@angular/core");
const test_service_1 = require("../shared/test.service");
const router_1 = require("@angular/router");
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
        templateUrl: './create-test.component.html',
        styleUrls: []
    }),
    __metadata("design:paramtypes", [test_service_1.TestService, router_1.Router])
], CreateTestComponent);
exports.CreateTestComponent = CreateTestComponent;
//# sourceMappingURL=create-test.component.js.map