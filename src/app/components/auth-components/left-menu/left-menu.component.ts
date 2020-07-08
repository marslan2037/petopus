import { Component } from '@angular/core';

@Component({
    selector: 'p-left-menu',
    templateUrl: './left-menu.component.html',
    styleUrls: ['./left-menu.component.scss']
})
  
export class LeftMenuComponent {
    role : String;
    user : [];
    profilePicture : String;
    userdata : [];
    owner_profile:boolean = false;
    nick_name:any;

    constructor() {}

    ngOnInit() {
        this.nick_name = sessionStorage.getItem('nick_name');
        this.owner_profile = (sessionStorage.getItem('role') == '1') ? false : true;
    }
}
  