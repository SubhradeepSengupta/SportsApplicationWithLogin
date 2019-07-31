"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const platform_browser_1 = require("@angular/platform-browser");
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const animations_1 = require("@angular/platform-browser/animations");
const http_1 = require("@angular/common/http");
const app_component_1 = require("./app.component");
const router_1 = require("@angular/router");
const user_module_1 = require("./User/user.module");
const user_list_component_1 = require("./User/user-list/user-list.component");
const user_edit_component_1 = require("./User/user-edit/user-edit.component");
const test_list_component_1 = require("./Test/test-list/test-list.component");
const create_test_component_1 = require("./Test/create-test/create-test.component");
const test_details_component_1 = require("./Test/test-details/test-details.component");
const add_athlete_component_1 = require("./Test/add-athlete/add-athlete.component");
const edit_athlete_component_1 = require("./Test/edit-athlete/edit-athlete.component");
const test_module_1 = require("./Test/test.module");
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
//# sourceMappingURL=app.module.js.map