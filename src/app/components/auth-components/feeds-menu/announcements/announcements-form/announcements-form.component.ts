import { Component } from '@angular/core';

@Component({
    selector: 'announcements-form',
    templateUrl: './announcements-form.component.html',
    styleUrls: ['./announcements-form.component.scss']
})

export class AnnouncementsFormComponent {

    services:any = [];
    creating_service:boolean = false;

    announces:any = [];
    domain:any;
    Services_Array:any = [];
    Pets_Array:any = [];
    per_array:any = [];
    free:any;
    events_formated:any = [];
    creating_announcement:boolean = false;

    DisplayServicesForm() {
        this.creating_service = true;
    }
}
