import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiServicesService } from '../../../../../services/api-services/api-services.service';

@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})

export class EventsComponent {

    constructor(
        private router: Router, 
        private apiService: ApiServicesService,
        private toastr: ToastrService) {

    }

    loading: boolean = false;
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

    events_list:any = [];
    GetAllEvents() {
        this.loading = true;
        this.apiService.GetAllProfessionalEvents().subscribe((response:any) => {
            console.log(response);
            this.loading = false;
            this.events_list = response.activities;
        }, error => {
            console.log(error)
            this.loading = false;
            if(error.status == 401) {
                this.toastr.error(error.error.error, "Authentication Error");
            }
            else {
                this.toastr.error("Network Faild! Unable to Connect to Server", "Network Error");
            }
        })
    }
}
