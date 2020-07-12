import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'breeders',
    templateUrl: './breeders.component.html',
    styleUrls: ['./breeders.component.scss']
})
  
export class BreedersComponent {
    albumsType:any;
    imageArray:any;
    // role : String;
    // user : [];
    // profilePicture : String;
    // userdata : [];
    // owner_profile:boolean = false;
    // nick_name:any;

    constructor(private router: Router) {}

    // ngOnInit() {
    //     this.nick_name = sessionStorage.getItem('nick_name');
    //     this.owner_profile = (sessionStorage.getItem('role') == '1') ? true : false;
    // }

    DisplayBreederForm() {
        this.router.navigate(['/home/breeders/create']);
    }
}
  