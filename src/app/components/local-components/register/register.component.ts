import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

export class RegisterComponent {

    loader = false;

    constructor(
        private formBuilder: FormBuilder,
    ) {
        this.CreateForm();
    }

    owner_registration: boolean = true;
    ToggleRegistrationType(type:any) {
        this.owner_registration = (type == 'owner') ? true : false; 
    }

    form:any;
    CreateForm() {
        this.form = this.formBuilder.group({
            'full_name': ['', Validators.required],
            'email': ['', Validators.required],
            'password': ['', Validators.required],
            'country': ['', ],
            'province': ['', ],
            'city': ['', ],
            'postal_code': ['', ],
            'terms': ['', Validators.required],
        })
    }

    SubmitData() {}
}