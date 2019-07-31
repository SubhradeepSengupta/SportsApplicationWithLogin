import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TestService {

    URL = "http://localhost:55950/api/Test";

    constructor(private _http: HttpClient) { }

    getTestList() {
        return this._http.get(this.URL + "/GetAllTests");
    }

    GetTestTypes() {
        return this._http.get(this.URL + "/GetTestTypes");
    }

    GetTestById(id: number) {
        return this._http.get(this.URL + "/GetTestById/" + id);
    }

    createTest(data: any) {
        return this._http.post(this.URL + '/CreateTest', data);
    }

    deleteTest(testID: number) {
        return this._http.delete(this.URL + "/DeleteTest/" + testID);
    }

    getAthletes() {
        return this._http.get(this.URL + "/GetAthletes");
    }

    addAthlete(id : number, data: any) {
        return this._http.post(this.URL + "/AddAthlete/" + id, data);
    }
}
