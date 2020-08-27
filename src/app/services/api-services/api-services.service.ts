import { catchError } from 'rxjs/internal/operators/catchError';
import {throwError as observableThrowError, Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest, HttpEvent } from '@angular/common/http';

@Injectable()
export class ApiServicesService {

    // url:any = "https://petopus-app.herokuapp.com";
    url:any = "http://35.232.243.88";
    // url:any = "https://f9bb406d18e2.ngrok.io";
    
    constructor(private http: HttpClient) {  
        
    }

    GetAllServices() {
        let url = this.url+'/api/v1/users/';
        return this.http.get(url).pipe(
            catchError(error => {
                return observableThrowError(error)
            }));
    }

/*************************************************************************************/    
/********************* PROFESSIONAL EVENTS API"S CALL ********************************/    
/*************************************************************************************/    
    /* GET ALL PROFESSIONAL EVENTS */
    GetAllProfessionalEvents() {
        let user_id = sessionStorage.getItem("user_id");
        let professional_id = sessionStorage.getItem("professional_id");
        let token = sessionStorage.getItem("token");

        let url = this.url+'/api/v1/users/'+user_id+'/professionals/'+professional_id+'/activities?authentication_token='+token;
        return this.http.get(url).pipe(
            catchError(error => {
                return observableThrowError(error)
            }));
    }

    /* Create PROFESSIONAL EVENT */
    CreateProfessionalEvent(data:any) {
        let professional_id = sessionStorage.getItem("professional_id");
        let url = this.url+'/api/v1/professionals/'+professional_id+'/activity_create';
        return this.http.post(url, data).pipe(
            catchError(error => {
                return observableThrowError(error)
            }));
    }
/*************************************************************************************/    
/********************* PROFESSIONAL EVENTS API"S CALL ********************************/    
/*************************************************************************************/    

    /* PET OWNER GET EVENTS */
    GetAllPetEvents() {
        let user_id = sessionStorage.getItem("user_id");
        let professional_id = sessionStorage.getItem("professional_id");
        let token = sessionStorage.getItem("token");

        let url = this.url+'/api/v1/users/'+user_id+'/professionals/'+professional_id+'/activities?authentication_token='+token;
        return this.http.get(url).pipe(
            catchError(error => {
                return observableThrowError(error)
            }));
    }

    GetAllAnnouncements() {
        let professional_id = sessionStorage.getItem("professional_id");
        let token = sessionStorage.getItem("token");

        let url = this.url+'/api/v1/professionals/'+professional_id+'/announces?authentication_token='+token;
        return this.http.get(url).pipe(
            catchError(error => {
                return observableThrowError(error)
            }));
    }

    GetAllParks() {
        let token = sessionStorage.getItem("token");

        let url = this.url+'/api/v1/professional/parks?authentication_token='+token+'&list=true';
        return this.http.get(url).pipe(
            catchError(error => {
                return observableThrowError(error)
            }));
    }


    UploadFile(
            file: File,
            picture_ancestor,
            picture_ancestor_id,
            authentication_token, 
            isprofile: boolean, 
            isCover: boolean
        ): Observable<HttpEvent<any>> {

        let formData = new FormData();

        formData.append('authentication_token', authentication_token);
        formData.append('picture_ancestor', picture_ancestor);
        formData.append('picture_ancestor_id', picture_ancestor_id);
        formData.append('picture[image]', file);
        
        if(isprofile) formData.append('picture[is_profile]', "true");
        if(isCover) formData.append('picture[is_cover]', "true");

        let params = new HttpParams();
    
        const options = {
            params: params,
            reportProgress: true,
        };
        let url = this.url+'/api/v1/pictures';
        const req = new HttpRequest('POST', url, formData, options);
        return this.http.request(req);
    }
}