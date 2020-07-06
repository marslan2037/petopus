import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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

    constructor(private formBuilder: FormBuilder) {
        this.CreateForm();
        // this.FormValueChanges();
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

        console.log(data);
    }
}