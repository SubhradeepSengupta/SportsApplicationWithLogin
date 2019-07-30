"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const user_edit_component_1 = require("./user-edit/user-edit.component");
const user_list_component_1 = require("./user-list/user-list.component");
const user_service_1 = require("./shared/user.service");
const platform_browser_1 = require("@angular/platform-browser");
const http_1 = require("@angular/common/http");
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
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
//# sourceMappingURL=user.module.js.map