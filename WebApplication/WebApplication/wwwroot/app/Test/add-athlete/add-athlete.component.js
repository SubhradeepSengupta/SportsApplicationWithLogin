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
        templateUrl: './add-athlete.component.html',
        styleUrls: []
    }),
    __metadata("design:paramtypes", [test_service_1.TestService, router_1.ActivatedRoute, router_1.Router])
], AddAthleteComponent);
exports.AddAthleteComponent = AddAthleteComponent;
//# sourceMappingURL=add-athlete.component.js.map