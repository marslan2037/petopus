import { Component } from '@angular/core';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

export class RegisterComponent {

    owner_registration: boolean = true;
    ToggleRegistrationType(type:any) {
        this.owner_registration = (type == 'owner') ? true : false; 
    }
}