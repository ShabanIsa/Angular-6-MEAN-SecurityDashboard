import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    uri = 'http://localhost:4000';

    constructor(private http: HttpClient) {

    }
    getUserById(id) {
        console.log("getUserById");
        return this.http.get(`${this.uri}/users/${id}`);
    }

    findUser(userName)
    {
        
    }

    addUser(userName, password, company) {
        console.log("addUser");
        const user = {
            userName: userName,
            password: password,
            company: company
        };
        return this.http.post(`${this.uri}/users/add`, user);
    }

    updateUser(id: String, userName, password) {
        console.log("updateUser");
        const user = {
            userName: userName,
            password: password
        };
        console.log(`${this.uri}/users/update/${id}`);
        return this.http.post(`${this.uri}/users/update/${id}`, user);
    }

    deleteUser(id) {
        console.log("deleteUser");
        console.log(`${this.uri}/users/delete/${id}`);
        return this.http.get(`${this.uri}/users/delete/${id}`);
    }


}
