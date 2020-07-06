import { throwError as observableThrowError } from 'rxjs';
// import { catchError } from 'rxjs/operators/catchError';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ComponentsCommunicationService {
    
    constructor(private http: HttpClient) {  
        
    }
}