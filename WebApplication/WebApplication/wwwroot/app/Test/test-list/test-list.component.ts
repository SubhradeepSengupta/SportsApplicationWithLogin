import { Component, OnInit } from '@angular/core';
import { TestService } from '../shared/test.service';

@Component({
    selector: 'app-test-list',
    templateUrl: './test-list.component.html',
    styleUrls: []
})
export class TestListComponent implements OnInit {

    TestList: any[];

    constructor(private _testService: TestService) {
    }

    ngOnInit() {
        this._testService.getTestList().subscribe(
            res => {
                this.TestList = res as any[];
            },
            err => {
                console.log(err);
            });
    }
}
