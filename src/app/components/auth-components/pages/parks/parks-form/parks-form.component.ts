import { Component } from '@angular/core';

@Component({
    selector: 'parks-form',
    templateUrl: './parks-form.component.html',
    styleUrls: ['./parks-form.component.scss']
})

export class ParksFormComponent {

    services:any = [];
    creating_service:boolean = false;

    DisplayServicesForm() {
        this.creating_service = true;
    }
}
