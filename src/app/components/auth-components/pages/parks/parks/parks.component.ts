import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'parks',
  templateUrl: './parks.component.html',
  styleUrls: ['./parks.component.scss']
})

export class ParksComponent {

    constructor(private router: Router) {

    }

    services:any = [];
    parks:any = [];
    url:any;
    events_formated:any = [];
    creating_park:boolean = false;

    DisplayEventForm() {
        // this.creating_park = true;
        this.router.navigate(['/home/parks/create']);
    }
}
