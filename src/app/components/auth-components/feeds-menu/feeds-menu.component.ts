import { Component } from '@angular/core';

@Component({
    selector: 'feeds-menu',
    templateUrl: './feeds-menu.component.html',
    styleUrls: ['./feeds-menu.component.scss']
})
  
export class FeedsMenuComponent {
    role : String;
    user : [];
    profilePicture : String;
    userdata : [];
    owner_profile:boolean = false;
    nick_name:any;

    constructor() {}

    ngOnInit() {
        this.nick_name = sessionStorage.getItem('nick_name');
        this.owner_profile = (sessionStorage.getItem('role') == '1') ? true : false;
    }
}
  