import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiServicesService } from './../../../../../services/api-services/api-services.service';

@Component({
  selector: 'parks',
  templateUrl: './parks.component.html',
  styleUrls: ['./parks.component.scss']
})

export class ParksComponent {
    
    services:any = [];
    parks:any = [];
    url:any;
    events_formated:any = [];
    creating_park:boolean = false;
    role_id:any;
    loading:boolean = false;

    constructor(
            private router: Router, 
            private apiService: ApiServicesService,
            private toastr: ToastrService, 
            private apiServicesService: ApiServicesService
        ) {
    }


    ngOnInit() {
        this.role_id = sessionStorage.getItem('role_id');
        
        this.GetAllParks();
    }

    DisplayEventForm() {
        this.router.navigate(['/home/parks/create']);
    }

    GetAllParks() {
        this.loading = true;
        this.apiService.GetAllParks().subscribe((response:any) => {
            console.log(response);
            this.loading = false;
        }, error => {
            console.log(error);
            this.loading = false;
        })
    }
}
