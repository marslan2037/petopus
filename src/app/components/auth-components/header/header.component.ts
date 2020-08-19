import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'p-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
  
export class HeaderComponent {
    role : String;
    user : [];
    profilePicture : String;
    userdata : [];
    role_id:any;
    full_name:any;

    constructor(private router: Router) {}

    ngOnInit() {
        this.full_name = sessionStorage.getItem('full_name');
        this.role_id = sessionStorage.getItem('role_id');
    }

    Logout() {
        sessionStorage.clear();
        this.router.navigate(["/"]);
    }
}
  