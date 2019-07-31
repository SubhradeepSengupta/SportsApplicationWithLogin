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
const http_1 = require("@angular/common/http");
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
};
TestService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [http_1.HttpClient])
], TestService);
exports.TestService = TestService;
//# sourceMappingURL=test.service.js.map