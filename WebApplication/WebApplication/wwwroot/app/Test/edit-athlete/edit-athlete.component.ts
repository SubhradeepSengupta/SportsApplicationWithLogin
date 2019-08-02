import { Component, OnInit } from '@angular/core';
import { TestService } from '../shared/test.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-edit-athlete',
    templateUrl: './edit-athlete.component.html',
    styleUrls: []
})
export class EditAthleteComponent implements OnInit {

    TestId: number;
    AthleteId: string;
    Athlete: any;
    toDisplay: boolean;

    constructor(private _testService: TestService, private _route: ActivatedRoute, private _router: Router) {
        this.toDisplay = false;
    }

    ngOnInit() {
        this.TestId = +this._route.snapshot.paramMap.get('testId');
        this.AthleteId = this._route.snapshot.paramMap.get('userId');

        this._testService.getAthleteByTestId(this.TestId, this.AthleteId).subscribe(
            res => {
                this.Athlete = res;
                this.toDisplay = true;
                console.log(res);
            },
            err => {
                console.log(err);
            });
    }

    onSubmit() {
        this._testService.editAthlete(this.TestId, this.AthleteId, this.Athlete).subscribe(
            res => {
                console.log(res);
                this._router.navigate(['/test-details/', this.TestId]);
            },
            err => {
                console.log(err);
            })
    }
}
