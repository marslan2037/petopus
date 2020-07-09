import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})

export class EventsComponent {

    constructor(private router: Router) {

    }

    services:any = [];
    events_formated:any = [];
    creating_event:boolean = false;

    DisplayEventForm() {
        // this.creating_event = true;
        this.router.navigate(['/home/events/create']);
    }
}
