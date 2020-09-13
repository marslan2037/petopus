import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServicesService } from '../../../../../services/api-services/api-services.service';

@Component({
  selector: 'services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})

export class ServicesComponent {

    loading: boolean = false;
    services:any = [];
    creating_service:boolean = false;

    constructor(private router: Router, private apiServicesService: ApiServicesService) {}

    ngOnInit() {
        this.GetAllServicesData();
    }

    DisplayServicesForm() {
        this.router.navigate(['/home/services/create']);
    }

    GetAllServicesData() {
        this.loading = true;
        this.apiServicesService.GetAllServices().subscribe((response:any) => {
            console.log(response);
            this.loading = false;
            // this.services = response;
        }, error => {
            console.log(error);
            this.loading = false;
        })
    }
}
