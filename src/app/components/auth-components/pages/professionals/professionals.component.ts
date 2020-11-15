import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServicesService } from '../../../../services/api-services/api-services.service';

@Component({
  selector: 'professionals',
  templateUrl: './professionals.component.html',
  styleUrls: ['./professionals.component.scss']
})

export class ProfessionalsComponent {

    loading:boolean = false;
    services:any = [];
    creating_service:boolean = false;
    role_id:any;
    professionals_list:any = [];

    constructor(private router: Router, private apiServicesService: ApiServicesService) {}

    ngOnInit() {
        this.role_id = sessionStorage.getItem("role_id");
        this.GetAllProfessionals();
    }

    GetAllProfessionals() {
        this.loading = true;
        this.apiServicesService.GetAllProfessionals().subscribe((response:any) => {
            console.log(response);
            this.loading = false;
            this.professionals_list = response.professionals;
        }, error => {
            this.loading = false;
            console.log(error);
        })
    }
}
