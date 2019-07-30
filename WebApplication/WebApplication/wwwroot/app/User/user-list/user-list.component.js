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
const user_service_1 = require("../shared/user.service");
const router_1 = require("@angular/router");
let UserListComponent = class UserListComponent {
    constructor(_service, _router) {
        this._service = _service;
        this._router = _router;
    }
    ngOnInit() {
        this._service.GetAllUsers().subscribe(res => {
            this.UserList = res;
        }, err => {
            console.log(err);
        });
    }
    DeleteUser(id) {
        if (confirm("Are you sure?")) {
            this._service.DeleteUser(id).subscribe(res => {
                this._router.navigate(['/user-list']);
            }, err => {
                console.log(err);
            });
        }
    }
};
UserListComponent = __decorate([
    core_1.Component({
        selector: 'app-user-list',
        templateUrl: './user-list.component.html',
        styleUrls: []
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
], UserListComponent);
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=user-list.component.js.map