import { catchError } from 'rxjs/internal/operators/catchError';
import {throwError as observableThrowError} from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApiServicesService {

    // url:any = "https://petopus-app.herokuapp.com";
    url:any = "http://35.232.243.88/";
    
    constructor(private http: HttpClient) {  
        
    }

    GetAllServices() {
        let url = this.url+'/api/v1/users/';
        return this.http.get(url).pipe(
            catchError(error => {
                return observableThrowError(error)
            }));
    }
}