import { Component } from '@angular/core';

@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})

export class EventsComponent {

    services:any = [];
    events_formated:any = [];
    creating_event:boolean = false;

    DisplayEventForm() {
        this.creating_event = true;
    }
}
