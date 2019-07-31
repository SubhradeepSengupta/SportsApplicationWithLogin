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
//import { UserService } from '../shared/user.service';
const router_1 = require("@angular/router");
const user_service_1 = require("../shared/user.service");
let UserEditComponent = class UserEditComponent {
    constructor(_service, _route, _router) {
        this._service = _service;
        this._route = _route;
        this._router = _router;
    }
    ngOnInit() {
        this._service.GetUsersById(this._route.snapshot.paramMap.get('id')).subscribe(res => {
            this.UserDetails = res;
            this.IsAvailable = true;
        }, err => {
            console.log(err);
        });
    }
    UserEdit() {
        this._service.UpdateUser(this.UserDetails).subscribe(res => {
            debugger;
            this._router.navigate(['']);
        }, err => {
            debugger;
            console.log("Error: " + err);
        });
    }
};
UserEditComponent = __decorate([
    core_1.Component({
        selector: 'app-user-edit',
        templateUrl: './user-edit.component.html',
        styleUrls: []
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.ActivatedRoute, router_1.Router])
], UserEditComponent);
exports.UserEditComponent = UserEditComponent;
//# sourceMappingURL=user-edit.component.js.map