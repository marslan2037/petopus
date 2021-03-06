import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
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
    returnUrl:any;

    constructor(
            private toastr: ToastrService,
            private formBuilder: FormBuilder, 
            private loginService: LoginService, 
            private router: Router,
            private route: ActivatedRoute,
            
        ) {
        this.CreateForm();
    }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
        
        if(this.loginService.isAuthenticated()) {
            this.router.navigateByUrl(this.returnUrl);
		} else {
			sessionStorage.clear();
			localStorage.clear();
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
        this.submitted = true;

        if(this.form.valid) {
            let data = this.form.value;
            this.loading = true;

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
    
                sessionStorage.setItem('account_id', response['account_id']);
                sessionStorage.setItem('user_id', response['user_id']);
                sessionStorage.setItem('token', response["authentication_token"]);
                sessionStorage.setItem('full_name', response["full_name"]);
                sessionStorage.setItem('role_id', (response["role"] == "Professional") ? '1' : '2');

                if(response["role"] == "Professional") {
                    sessionStorage.setItem('company_name', response["professional"].company_name);
                    sessionStorage.setItem('professional_id', response["professional"].professional_id);
                    
                    if(!response['full_name']) return this.router.navigate(['/home/profile/create']);
                    this.router.navigateByUrl(this.returnUrl);
                }
                if(response["role"] == "Owner") {
                    
                    this.loginService.GetPets().subscribe((response)=>{
                        sessionStorage.setItem("pets", JSON.stringify(response["pets"]));
                        if(response['pets'].length == 0)  return this.router.navigate(['/home/pets/create']);
                        this.router.navigateByUrl(this.returnUrl);

                    }, (error)=>{
                        
                        this.router.navigateByUrl(this.returnUrl);
                    })
                    //if(!response['full_name']) return this.router.navigate(['/home/profile/create']);

                }

    
                // this.router.navigate(['/home']);
                
            }, error => {
                this.loading = false;
                this.submitted = false;
                
                if(error.status == 401) {
                    this.toastr.error(error.error.message, "Authentication Error");
                }
                else {
                    this.toastr.error("Network Faild! Unable to Connect to Server", "Network Error");
                }
            })
        }
    }
}