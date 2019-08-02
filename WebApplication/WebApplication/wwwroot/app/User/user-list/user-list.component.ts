import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: []
})
export class UserListComponent implements OnInit {

    UserList: any[];
    isValid: boolean;
    isCoach: boolean;

    constructor(private _service: UserService, private _router: Router) {
        this.isValid = false;
    }

    ngOnInit() {
        this._service.GetUsers().subscribe(
            res => {
                this.UserList = res as any[];
                console.log(this.UserList);
                this.isValid = true;
            },
            err => {
                console.log(err);
            })
    }

    DeleteUser(id: number) {
        if (confirm("Are you sure?")) {
            this._service.DeleteUser(id).subscribe(
                (res: any) => {
                    debugger
                    if (res.isCoach) {
                        location.href = "/Home/Login";
                    }
                    else
                    {
                        this._router.navigate(['/user-list']);
                    }
                },
                err => {
                    console.log(err);
                });
        }
    }

    //DeleteUser(id: number) {
    //    if (confirm("Are you sure?")) {
    //        this._service.DeleteUser(id);
    //    }
    //}
}