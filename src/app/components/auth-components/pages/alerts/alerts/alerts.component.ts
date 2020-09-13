import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiServicesService } from './../../../../../services/api-services/api-services.service';

@Component({
  selector: 'alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})

export class AlertsComponent {

    loading:boolean = false;
    alerts:any = [];
    creating_alert:boolean = false;

    constructor(
        private router: Router,
        private toastr: ToastrService, 
        private apiServicesService: ApiServicesService) {
    }


    ngOnInit() {
        this.GetAllAlertsData();
    }

    DsiplayAlertForm() {
        // this.creating_alert = true;
        this.router.navigate(['/home/alerts/create']);
    }

    GetAllAlertsData() {
        this.loading = true;
        this.apiServicesService.GetAllAlerts().subscribe((response:any) => {
            console.log(response);
            this.loading = false;
        }, error => {
            console.log(error);
            this.loading = false;
        })
    }
}
