import { Component, OnInit } from '@angular/core';
import { TestService } from '../shared/test.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CreateTestModel } from '../shared/testmodel.model';

@Component({
    selector: 'app-create-test',
    templateUrl: './create-test.component.html',
    styleUrls: []
})
export class CreateTestComponent implements OnInit {

    TestType: any[];
    FormData: CreateTestModel;

    constructor(private _testService: TestService, private _route: Router) { }

    ngOnInit() {
        this.FormData = {
            id : 0,
            date: null,
            testtype: ''
        }

        this._testService.GetTestTypes().subscribe(
            res => {
                this.TestType = res as any[];
                console.log(this.TestType);
            },
            err => {
                console.log(err);
            })
    }

    onSubmit() {
        this._testService.createTest(this.FormData).subscribe(
            res => {
                this._route.navigate(['/test-list']);
                console.log(res);
            },
            err => {
                console.log(err);
            })
    }
}
