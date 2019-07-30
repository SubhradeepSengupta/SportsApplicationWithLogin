import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class UserService {

    URL = 'http://localhost:55950/api/User';

    constructor(private _http: HttpClient) {
    }

    GetAllUsers()
    {
        return this._http.get(this.URL + "/GetAllUsers");
    }

    GetUsersById(id: string)
    {
        return this._http.get(this.URL + "/GetUser/" + id);
    }

    UpdateUser(user: any)
    {
        return this._http.put(this.URL + "/EditUser/" + user.ID, user);
    }

    DeleteUser(id : number)
    {
        return this._http.delete(this.URL + "/DeleteUser/" + id);
    }
}