import { Component, OnInit } from '@angular/core';
import { TestService } from '../shared/test.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-test-details',
    templateUrl: './test-details.component.html',
    styleUrls: []
})
export class TestDetailsComponent implements OnInit {

    toDisplay: boolean;
    testID: string;
    testDetails: any[];

    constructor(private _testService: TestService, private _route: ActivatedRoute, private _router: Router) {
        this.testID = this._route.snapshot.paramMap.get('id');
    }

    ngOnInit() {
        this._testService.GetTestById(+this.testID).subscribe(
            res => {
                this.testDetails = res as any[];
                console.log(res);
            },
            err => {
                console.log(err);
            })
    }

    deleteTest(testID: number) {
        if (confirm("Are You Sure?")) {
            this._testService.deleteTest(testID).subscribe(
                res => {
                    this._router.navigate(['/test-list']);
                },
                err => {
                    console.log(err);
                }
            )
        }
    }
}
