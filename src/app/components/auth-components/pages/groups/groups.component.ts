import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'groups',
    templateUrl: './groups.component.html',
    styleUrls: ['./groups.component.scss']
})
  
export class GroupsComponent {
    albumsType:any;
    imageArray:any;
    // role : String;
    // user : [];
    // profilePicture : String;
    // userdata : [];
    // owner_profile:boolean = false;
    // nick_name:any;

    constructor(
        private router: Router
    ) {}

    // ngOnInit() {
    //     this.nick_name = sessionStorage.getItem('full_name');
    //     this.owner_profile = (sessionStorage.getItem('role') == '1') ? true : false;
    // }

    DisplayGroupForm(){
        this.router.navigate(["/home/groups/create"]);

    }
}
  