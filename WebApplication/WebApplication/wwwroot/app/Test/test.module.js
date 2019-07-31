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
const test_list_component_1 = require("./test-list/test-list.component");
const create_test_component_1 = require("./create-test/create-test.component");
const test_details_component_1 = require("./test-details/test-details.component");
const test_service_1 = require("./shared/test.service");
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
const http_1 = require("@angular/common/http");
const platform_browser_1 = require("@angular/platform-browser");
const add_athlete_component_1 = require("./add-athlete/add-athlete.component");
const edit_athlete_component_1 = require("./edit-athlete/edit-athlete.component");
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
//# sourceMappingURL=test.module.js.map