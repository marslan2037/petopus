import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServicesService } from '../../../../services/api-services/api-services.service';

@Component({
  selector: 'professionals',
  templateUrl: './professionals.component.html',
  styleUrls: ['./professionals.component.scss']
})

export class ProfessionalsComponent {

    services:any = [];
    creating_service:boolean = false;
    role_id:any;

    constructor(private router: Router, private apiServicesService: ApiServicesService) {}

    ngOnInit() {
        this.role_id = sessionStorage.getItem("role_id");
    }

    DisplayServicesForm() {
        this.router.navigate(['/home/services/create']);
    }

    GetAllServicesData() {
        this.apiServicesService.GetAllServices().subscribe((response:any) => {
            this.services = response;
        })
    }
}