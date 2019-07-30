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

    constructor(private _service: UserService, private _router: Router) { }

    ngOnInit() {
        this._service.GetAllUsers().subscribe(
            res => {
                this.UserList = res as any[];
            },
            err => {
                console.log(err);
            })
    }

    DeleteUser(id: number) {
        if (confirm("Are you sure?")) {
            this._service.DeleteUser(id).subscribe(
                res => {
                    this._router.navigate(['/user-list']);
                },
                err => {
                    console.log(err);
                })
        }
    }
}