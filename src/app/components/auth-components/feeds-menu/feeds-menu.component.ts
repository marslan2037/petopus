import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
    role_id:any;
    nick_name:any;
    active_menu_list:any = [];
    feeds_menu_list:any = [
        {id: 1, name: 'About', url: '/home/about', is_active: false, professional: true, owner: true},
        {id: 2, name: 'Feeds', url: '/home/news-feed', is_active: true, professional: true, owner: true},
        {id: 3, name: 'Services', url: '/home/services', is_active: false, professional: true, owner: false},
        {id: 4, name: 'Professionals', url: '/home/professionals', is_active: false, professional: false, owner: true},
        {id: 5, name: 'Events', url: '/home/events', is_active: false, professional: false, owner: true},
        {id: 6, name: 'Parks', url: '/home/parks', is_active: false, professional: false, owner: true},
        {id: 7, name: 'Announces', url: '/home/announcements', is_active: false, professional: false, owner: true},
        {id: 8, name: 'Nearby', url: '/home/nearby', is_active: false, professional: false, owner: true},
        {id: 9, name: 'Alerts', url: '/home/alerts', is_active: false, professional: true, owner: true},
    ]

    constructor(private router: Router) {}

    ngOnInit() {
        this.nick_name = sessionStorage.getItem('nick_name');
        this.role_id = sessionStorage.getItem('role_id');
        
        this.GetActiveMenu();
        this.GetActiveFeedButton(this.router.url);
        this.GetActiveFeedButtonOnUrlChange();
    }

    GotoPage(url:any, id:any) {
        console.log(id);
        this.router.navigate([url]);
        for(let i=0; i<this.active_menu_list.length; i++) {
            this.active_menu_list[i].is_active = (this.active_menu_list[i].id == id) ? true : false;
        }
    }

    GetActiveMenu() {
        this.active_menu_list = [];
        for(let i=0; i<this.feeds_menu_list.length; i++) {
            if(this.role_id == '2') {
                if(this.feeds_menu_list[i].professional == false || this.feeds_menu_list[i].owner == true) {
                    this.active_menu_list.push(this.feeds_menu_list[i]);
                }
            } else {
                if(this.feeds_menu_list[i].professional == true) {
                    this.active_menu_list.push(this.feeds_menu_list[i]);
                }
            }
        }

        console.log(this.active_menu_list)
    }

    GetActiveFeedButtonOnUrlChange() {
        this.router.events.subscribe((route:any) => {
            this.GetActiveFeedButton(route.url);
        });
    }

    GetActiveFeedButton(url:any) {
        for(let i=0; i<this.active_menu_list.length; i++) {
            if(url == '/home/about') {
                this.active_menu_list[i].is_active = (this.active_menu_list[i].id == 1) ? true : false;
            } else if(url == '/home/news-feed' || url == '/home') {
                this.active_menu_list[i].is_active = (this.active_menu_list[i].id == 2) ? true : false;
            } else if(url == '/home/services' || url == '/home/services/create') {
                this.active_menu_list[i].is_active = (this.active_menu_list[i].id == 3) ? true : false;
            } else if(url == '/home/professionals') {
                this.active_menu_list[i].is_active = (this.active_menu_list[i].id == 4) ? true : false;
            } else if(url == '/home/events' || url == '/home/events/create') {
                this.active_menu_list[i].is_active = (this.active_menu_list[i].id == 5) ? true : false;
            } else if(url == '/home/parks' || url == '/home/parks/create') {
                this.active_menu_list[i].is_active = (this.active_menu_list[i].id == 6) ? true : false;
            } else if(url == '/home/announcements' || url == '/home/announcements/create') {
                this.active_menu_list[i].is_active = (this.active_menu_list[i].id == 7) ? true : false;
            } else if(url == '/home/nearby') {
                this.active_menu_list[i].is_active = (this.active_menu_list[i].id == 8) ? true : false;
            } else if(url == '/home/alerts' || url == '/home/alerts/create') {
                this.active_menu_list[i].is_active = (this.active_menu_list[i].id == 9) ? true : false;
            } else {
                this.active_menu_list[i].is_active = false;
            }
        }
    }
}
  