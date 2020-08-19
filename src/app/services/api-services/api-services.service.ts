import { catchError } from 'rxjs/internal/operators/catchError';
import {throwError as observableThrowError} from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApiServicesService {

    // url:any = "https://petopus-app.herokuapp.com";
    url:any = "http://35.232.243.88";
    
    constructor(private http: HttpClient) {  
        
    }

    GetAllServices() {
        let url = this.url+'/api/v1/users/';
        return this.http.get(url).pipe(
            catchError(error => {
                return observableThrowError(error)
            }));
    }

    GetAllEvents() {
        let user_id = sessionStorage.getItem("user_id");
        let professional_id = sessionStorage.getItem("professional_id");
        let token = sessionStorage.getItem("token");

        let url = this.url+'/api/v1/users/'+user_id+'/professionals/'+professional_id+'/activities?authentication_token='+token;
        return this.http.get(url).pipe(
            catchError(error => {
                return observableThrowError(error)
            }));
    }

    GetAllparks() {
        let token = sessionStorage.getItem("token");

        let url = this.url+'/api/v1/professional/parks?authentication_token='+token+'&list=true';
        return this.http.get(url).pipe(
            catchError(error => {
                return observableThrowError(error)
            }));
    }
}