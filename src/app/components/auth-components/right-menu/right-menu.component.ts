import { Component } from '@angular/core';

@Component({
    selector: 'p-right-menu',
    templateUrl: './right-menu.component.html',
    styleUrls: ['./right-menu.component.scss']
})
  
export class RightMenuComponent {
    role : String;
    user : [];
    profilePicture : String;
    userdata : [];
    owner_profile:boolean = false;
    nick_name:any;

    constructor() {}

    ngOnInit() {
        this.nick_name = sessionStorage.getItem('full_name');
        this.owner_profile = (sessionStorage.getItem('role') == '1') ? true : false;
    }
}
  