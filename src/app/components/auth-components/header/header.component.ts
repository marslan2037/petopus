import { Component } from '@angular/core';

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
    nick_name:any;

    constructor() {}

    ngOnInit() {
        this.nick_name = sessionStorage.getItem('nick_name');
        this.role_id = sessionStorage.getItem('role_id');
    }
}
  