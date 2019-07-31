import { Component, OnInit } from '@angular/core';
import { TestService } from '../shared/test.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-athlete',
  templateUrl: './edit-athlete.component.html',
  styleUrls: []
})
export class EditAthleteComponent implements OnInit {

  toDisplay: boolean;

  constructor(private _testService : TestService, private _route: ActivatedRoute, private _router : Router) { 
    this.toDisplay = false;
  }

  ngOnInit() {
  }
}
