import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})

export class ServicesComponent {

    constructor(private router: Router) {

    }

    services:any = [];
    creating_service:boolean = false;

    DisplayServicesForm() {
        this.router.navigate(['/home/services/create']);
    }
}
