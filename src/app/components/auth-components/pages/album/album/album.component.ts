import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
    selector: 'album',
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.scss']
})
  
export class AlbumComponent {
    // role : String;
    // user : [];
    // profilePicture : String;
    // userdata : [];
    // owner_profile:boolean = false;
    // nick_name:any;

    constructor(private router: Router) {

    }

    // ngOnInit() {
    //     this.nick_name = sessionStorage.getItem('full_name');
    //     this.owner_profile = (sessionStorage.getItem('role') == '1') ? true : false;
    // }

    DisplayAlbumForm() {
        this.router.navigate(['/home/album/create']);
    }
}
  