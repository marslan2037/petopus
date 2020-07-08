import { Component } from '@angular/core';

@Component({
    selector: 'p-feed-menu',
    templateUrl: './feed-menu.component.html',
    styleUrls: ['./feed-menu.component.scss']
})
  
export class FeedMenuComponent {
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
  