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
    role_id:any;

    ngOnInit() {
        this.role_id = sessionStorage.getItem('role_id');
    }

    DisplayEventForm() {
        // this.creating_park = true;
        this.router.navigate(['/home/parks/create']);
    }
}
