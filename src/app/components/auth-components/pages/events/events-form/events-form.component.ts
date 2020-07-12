import { Component } from '@angular/core';

@Component({
    selector: 'events-form',
    templateUrl: './events-form.component.html',
    styleUrls: ['./events-form.component.scss']
})

export class EventsFormComponent {

    services:any = [];
    creating_service:boolean = false;

    DisplayServicesForm() {
        this.creating_service = true;
    }
}
