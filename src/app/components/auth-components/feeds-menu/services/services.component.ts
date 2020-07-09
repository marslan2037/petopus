import { Component } from '@angular/core';

@Component({
  selector: 'services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})

export class ServicesComponent {

    services:any = [];
    creating_service:boolean = false;

    DisplayServicesForm() {
        this.creating_service = true;
    }
}
