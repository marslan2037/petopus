import { Component } from '@angular/core';

@Component({
    selector: 'alerts-form',
    templateUrl: './alerts-form.component.html',
    styleUrls: ['./alerts-form.component.scss']
})

export class AlertsFormComponent {

    services:any = [];
    creating_service:boolean = false;

    DisplayServicesForm() {
        this.creating_service = true;
    }
}
