import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})

export class AnnouncementsComponent {

    constructor(private router: Router) {

    }

    announces:any = [];
    domain:any;
    Services_Array:any = [];
    Pets_Array:any = [];
    per_array:any = [];
    free:any;
    events_formated:any = [];
    creating_announcement:boolean = false;

    DisplayAnnouncementForm() {
        // this.creating_announcement = true;
        this.router.navigate(['/home/announcements/create']);
    }    
}

