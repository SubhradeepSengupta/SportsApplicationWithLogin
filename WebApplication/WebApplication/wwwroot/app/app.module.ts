import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UserModule } from './User/user.module';
import { UserListComponent } from './User/user-list/user-list.component';
import { UserEditComponent } from './User/user-edit/user-edit.component';
import { TestListComponent } from './Test/test-list/test-list.component';
import { CreateTestComponent } from './Test/create-test/create-test.component';
import { TestDetailsComponent } from './Test/test-details/test-details.component';
import { AddAthleteComponent } from './Test/add-athlete/add-athlete.component';
import { EditAthleteComponent } from './Test/edit-athlete/edit-athlete.component';
import { TestModule } from './Test/test.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        UserModule,
        TestModule,
        RouterModule.forRoot([
            {
                path: '',
                component: UserListComponent,
                pathMatch: 'full'   
            },
            {
                path: 'user-list',
                component: UserListComponent
            },
            {
                path: 'user-edit/:id',
                component: UserEditComponent
            },
            {
                path: 'test-list',
                component: TestListComponent
            },
            {
                path: 'create-test',
                component: CreateTestComponent
            },
            {
                path: 'test-details/:id',
                component: TestDetailsComponent
            },
            {
                path: 'test-details/:id/add-athlete',
                component: AddAthleteComponent
            },
            {
                path: 'edit-athlete/:testId/:userId',
                component: EditAthleteComponent
            }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
