import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

    url:any = 'https://petopus-app.herokuapp.com';
    
    constructor(private http: HttpClient) {  
        
    }

    DoLogin(data:any) {
        return this.http.post(this.url+'//api/v1/login/', data[0])
    }

    isAuthenticated() {
        let token = sessionStorage.getItem('token') !== null && sessionStorage.getItem('token') !== 'undefined';
        if (token) {
            return true;
        } else {
            return false;
        }
    }
}