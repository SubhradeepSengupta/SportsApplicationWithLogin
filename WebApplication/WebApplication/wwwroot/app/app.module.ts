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
            }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
