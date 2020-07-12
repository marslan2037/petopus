import { Component } from '@angular/core';

@Component({
    selector: 'chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss']
})
  
export class ChatComponent {
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
    //     this.nick_name = sessionStorage.getItem('nick_name');
    //     this.owner_profile = (sessionStorage.getItem('role') == '1') ? true : false;
    // }
}
  