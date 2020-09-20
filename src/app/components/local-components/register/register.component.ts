import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

export class RegisterComponent {

    loading = false;
    submitted:boolean = false;
    role:any = 2;

    constructor(
        private formBuilder: FormBuilder,
        private loginService: LoginService, 
        private router: Router,
        private toastr: ToastrService
    ) {
        this.CreateForm();
    }

    ToggleRegistrationType(role:any) {
        this.role = role; 
    }

    form:any;
    CreateForm() {
        this.form = this.formBuilder.group({
            'full_name': ['', ],
            'nickname': ['', ],
            'email': ['', Validators.required],
            'password': ['', Validators.required],
            'password_confirmation': ['', ],
            'country': ['undefined', ],
            'province': ['', ],
            'city': ['undefined', ],
            'postal_code': ['', ],
            'terms': ['', Validators.required],
        })
    }

    SubmitData() {
        this.submitted = true;
        if(this.form.valid) {
            this.loading = true;
            let data = this.form.value;

            let form_data;

            if(this.role == 1) {
                form_data = { 
                    "users": {
                        "email": data.email,
                        "password": data.password,
                        "password_confirmation": data.password,
                        "state": "Punjab",
                        "city": "Lahore",
                        "message": "This is my slogan",
                        "country_id": 166,
                        "state_id" : 2728,
                        "city_id" : 31434,
                        "terms": data.terms,
                        "role": (this.role == 1) ? "Professional" : "Owner",
                        "postalcode": 54000,
                        "nickname": data.full_name,
                        "professional_attributes": {
                            "nick_name": data.full_name,
                            "company_name" : "Square63",
                            "address": "Lahore Pakistan"
                        }
                    }
                }
            } else {
                form_data = { 
                    "users": {
                        "email": data.email,
                        "password": data.password,
                        "password_confirmation": data.password,
                        "state": "Punjab",
                        "city": "Lahore",
                        "message": "This is my slogan",
                        "country_id": 166,
                        "state_id" : 2728,
                        "city_id" : 31434,
                        "terms": data.terms,
                        "role": (this.role == 1) ? "Professional" : "Owner",
                        "postalcode": 54000,
                        "nickname": data.full_name
                    }
                }
            }

            console.log(form_data);

            this.loginService.CreateNewAccount(form_data).subscribe((response:any) => {
                console.log(response);
                this.loading = false;
                this.toastr.success('Account is created! Please do login');
                this.router.navigate(['/login']);
            }, error => {
                this.loading = false;
                console.log(error);

                this.toastr.error(error.error.message[0]);
            })
        }
    }
}