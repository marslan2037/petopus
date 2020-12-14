import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

    live_server:any = "http://35.232.243.88";
    local_server:any = "https://a4d968bb9730.ngrok.io";

    url:any = this.live_server;
    
    constructor(private http: HttpClient) {  
        
    }

    DoLogin(data:any) {
        return this.http.post(this.url+'/api/v1/login/', data[0])
    }

    CreateNewAccount(data:any) {
        return this.http.post(this.url+'/api/v1/sign_up', data);
    }
    

    GetPets()
    {
        let token = sessionStorage.token
        let url = this.url+'/api/v1/pets?authentication_token='+token;
        return this.http.get(url);

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