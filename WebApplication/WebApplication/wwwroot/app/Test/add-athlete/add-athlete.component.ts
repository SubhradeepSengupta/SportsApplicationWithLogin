import { Component, OnInit } from '@angular/core';
import { TestService } from '../shared/test.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateAthleteModel } from '../shared/testmodel.model';

@Component({
    selector: 'app-add-athlete',
    templateUrl: './add-athlete.component.html',
    styleUrls: []
})
export class AddAthleteComponent implements OnInit {

    TestId: number;
    AthleteDetails: any[];
    FormData: CreateAthleteModel;
    TestDetails: any[];

    constructor(private _testService: TestService, private _route: ActivatedRoute, private _router: Router) {
        this.TestId = +this._route.snapshot.paramMap.get('id');
    }

    ngOnInit() {
        this.FormData = {
            name: '--Select--',
            distance: 0,
            time: 0
        }

        this._testService.getAthletes().subscribe(
            res => {
                console.log(res);
                this.AthleteDetails = res as any[];
            },
            err => {
                console.log(err);
            })

        this._testService.GetTestById(this.TestId).subscribe(
            res => {
                this.TestDetails = res as any[];
            },
            err => {
                console.log(err);
            })
    }

    athleteSubmit(id: number) {
        this._testService.addAthlete(id, this.FormData).subscribe(
            res => {
                this._router.navigate(['/test-details/', this.TestId]);
            },
            err => {
                console.log(err);
            })
    }
}
