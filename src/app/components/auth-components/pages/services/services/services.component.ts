import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServicesService } from '../../../../../services/api-services/api-services.service';

@Component({
  selector: 'services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})

export class ServicesComponent {

    services:any = [];
    creating_service:boolean = false;

    constructor(private router: Router, private apiServicesService: ApiServicesService) {}

    DisplayServicesForm() {
        this.router.navigate(['/home/services/create']);
    }

    GetAllServicesData() {
        this.apiServicesService.GetAllServices().subscribe((response:any) => {
            this.services = response;
        })
    }
}
