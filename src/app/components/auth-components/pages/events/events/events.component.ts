import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServicesService } from '../../../../../services/api-services/api-services.service';

@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})

export class EventsComponent {

    constructor(private router: Router, private apiService: ApiServicesService) {

    }

    role_id:any;
    services:any = [];
    events_formated:any = [];
    creating_event:boolean = false;

    ngOnInit() {
        this.role_id = sessionStorage.getItem('role_id');
        console.log(this.role_id)

        this.GetAllEvents();
    }

    DisplayEventForm() {
        this.router.navigate(['/home/events/create']);
    }

    GetAllEvents() {
        this.apiService.GetAllEvents().subscribe((response => {
            console.log(response);
        }))
    }
}
