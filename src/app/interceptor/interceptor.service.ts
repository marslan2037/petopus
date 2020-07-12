import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    
    token:any;
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${sessionStorage.getItem('token')}`,
            }
        });
        return next.handle(request);
    }
}