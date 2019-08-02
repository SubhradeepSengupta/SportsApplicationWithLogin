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
        templateUrl: './edit-athlete.component.html',
        styleUrls: []
    }),
    __metadata("design:paramtypes", [test_service_1.TestService, router_1.ActivatedRoute, router_1.Router])
], EditAthleteComponent);
exports.EditAthleteComponent = EditAthleteComponent;
//# sourceMappingURL=edit-athlete.component.js.map