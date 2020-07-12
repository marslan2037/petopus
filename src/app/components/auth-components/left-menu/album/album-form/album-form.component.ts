import { Component } from '@angular/core';

@Component({
    selector: 'album-form',
    templateUrl: './album-form.component.html',
    styleUrls: ['./album-form.component.scss']
})
  
export class AlbumFormComponent {
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
  