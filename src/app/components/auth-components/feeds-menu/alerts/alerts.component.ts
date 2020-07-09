import { Component } from '@angular/core';

@Component({
  selector: 'alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})

export class AlertsComponent {

    alerts:any = [];
    creating_alert:boolean = false;

    DsiplayAlertForm() {
        this.creating_alert = true;
    }
}
