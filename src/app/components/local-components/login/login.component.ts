import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent {

    public token: any;
    public error: any;
    public error_state= false;
    loader = false;
    loadingScreen:boolean = false;
    model: any = {};
    loading:boolean = false;
    submitted:boolean = false;

    constructor(
            private toastr: ToastrService,
            private formBuilder: FormBuilder, 
            private loginService: LoginService, 
            private router: Router
        ) {
        this.CreateForm();
    }

    ngOnInit() {
		// this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
		if(this.loginService.isAuthenticated()) {
			this.router.navigate(['/home']);
		} else {
			sessionStorage.clear();
			// localStorage.clear();
			this.router.navigate(['/login']);
		}
	}

    form:any;
    CreateForm() {
        this.form = this.formBuilder.group({
            'email': ['', Validators.required],
            'password': ['', Validators.required],
        })
    }

    SubmitData() {
        this.loading = true;
        this.submitted = true;
        let data = this.form.value;

        const login_information = [{
            users: {
                email: data.email,
                password: data.password
            }
        }];

        this.loginService.DoLogin(login_information).subscribe((response) => {
            this.loading = false;
            this.submitted = false;
            this.toastr.success('Login Successfully');

            sessionStorage.setItem('user_id', response['user_id']);
            sessionStorage.setItem('token', response["authentication_token"]);
            sessionStorage.setItem('nick_name', response["nickname"]);
            sessionStorage.setItem('role', (response["role_id"] == "Professional") ? '2' : '1');

            this.router.navigate(['/home']);
        }, error => {
            this.loading = false;
            this.submitted = false;
            
            if(error.status == 401) {
                this.toastr.error(error.error.message, "Authentication Error");
            }
            else{
                this.toastr.error("Network Faild! Unable to Connect to Server", "Network Error");
            }
        })
    }
}