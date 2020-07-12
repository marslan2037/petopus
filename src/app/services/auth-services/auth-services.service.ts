import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "../../components/local-components/login/login.service";

@Injectable()
export class AuthService implements CanActivate {

    constructor(private loginService: LoginService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        
        if((this.loginService.isAuthenticated())) {
        	return true;
        }

        sessionStorage.clear();
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        
        return false;
    }

    canLoad(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        
        if((this.loginService.isAuthenticated())) {
        	return true;
        }

        sessionStorage.clear();
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        
        return false;
    }
}
