import { Component } from '@angular/core';

@Component({
    selector: 'p-left-menu',
    templateUrl: './left-menu.component.html',
    styleUrls: ['./left-menu.component.scss']
})
  
export class LeftMenuComponent {

    profilePicture:any;
    role : String;
    user : [];
    userdata : [];
    role_id:any;
    nick_name:any;
    company_name: any;

    constructor() {}

    ngOnInit() {
        this.nick_name = sessionStorage.getItem('full_name');
        this.company_name = sessionStorage.company_name;
        this.role_id = sessionStorage.getItem('role_id');
    }
}
  