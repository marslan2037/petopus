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

    role_id:any;
    services:any = [];
    events_formated:any = [];
    creating_event:boolean = false;

    ngOnInit() {
        this.role_id = sessionStorage.getItem('role_id');
        console.log(this.role_id)
    }

    DisplayEventForm() {
        // this.creating_event = true;
        this.router.navigate(['/home/events/create']);
    }
}
