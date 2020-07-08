import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

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

    constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) {
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
        let data = this.form.value;

        const login_information = [{
            users: {
                email: data.email,
                password: data.password
            }
        }];

        this.loginService.DoLogin(login_information).subscribe((response) => {
            sessionStorage.setItem('user_id', response['user_id']);
            sessionStorage.setItem('token', response["authentication_token"]);
            sessionStorage.setItem('nick_name', response["nickname"]);
            sessionStorage.setItem('role', (response["role_id"] == "Professional") ? '2' : '1');

            this.router.navigate(['/home']);
        }, error => {
            console.log(error);
            if(error.status == 401){
                // this.toastr.clear();
                //  this.toastr.error(error.error.message, "Authentication Error", {
                //          //timeOut: 2000
                //  })
            }
            else{
                // this.toastr.clear();
                // this.toastr.error("Network Faild! Unable to Connect to Server", "Network Error", {
                //     //timeOut: 2000
                // })
            }
        })
    }
}