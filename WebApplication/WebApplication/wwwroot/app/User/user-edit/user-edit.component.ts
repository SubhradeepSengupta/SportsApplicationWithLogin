import { Component, OnInit } from '@angular/core';
//import { UserService } from '../shared/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: []
})
export class UserEditComponent implements OnInit {

    constructor(private _service: UserService, private _route: ActivatedRoute, private _router: Router) { }

    UserDetails: any[];
    IsAvailable: boolean;

    ngOnInit() {
        this._service.GetUsersById(this._route.snapshot.paramMap.get('id')).subscribe(
            res => {
                this.UserDetails = res as any[];
                this.IsAvailable = true;
            },
            err => {
                console.log(err)
            })
    }

    UserEdit() {
        this._service.UpdateUser(this.UserDetails).subscribe();
    }
}