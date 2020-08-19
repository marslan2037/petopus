import { Component } from '@angular/core';

@Component({
    selector: 'friends',
    templateUrl: './friends.component.html',
    styleUrls: ['./friends.component.scss']
})
  
export class FriendsComponent {
    albumsType:any;
    imageArray:any;
    // role : String;
    // user : [];
    // profilePicture : String;
    // userdata : [];
    // owner_profile:boolean = false;
    // nick_name:any;

    // constructor() {}

    // ngOnInit() {
    //     this.nick_name = sessionStorage.getItem('full_name');
    //     this.owner_profile = (sessionStorage.getItem('role') == '1') ? true : false;
    // }
}
  