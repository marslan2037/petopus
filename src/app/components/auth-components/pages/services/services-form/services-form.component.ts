import { Component } from '@angular/core';

@Component({
    selector: 'services-form',
    templateUrl: './services-form.component.html',
    styleUrls: ['./services-form.component.scss']
})

export class ServicesFormComponent {

    services:any = [];
    creating_service:boolean = false;

    DisplayServicesForm() {
        this.creating_service = true;
    }
}
