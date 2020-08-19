import { Component } from '@angular/core';

@Component({
    selector: 'publish-article',
    templateUrl: './publish-article.component.html',
    styleUrls: ['./publish-article.component.scss']
})
  
export class PublishArticleComponent {
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
  