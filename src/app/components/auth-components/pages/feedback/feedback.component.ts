import { Component } from '@angular/core';

@Component({
    selector: 'feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.scss']
})
  
export class FeedbackComponent {
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
  