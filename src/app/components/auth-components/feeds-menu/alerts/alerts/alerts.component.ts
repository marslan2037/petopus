import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})

export class AlertsComponent {

    constructor(private router: Router) {

    }

    alerts:any = [];
    creating_alert:boolean = false;

    DsiplayAlertForm() {
        // this.creating_alert = true;
        this.router.navigate(['/home/alerts/create']);
    }
}
