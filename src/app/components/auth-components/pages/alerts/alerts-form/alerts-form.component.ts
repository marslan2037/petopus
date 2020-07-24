import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'alerts-form',
    templateUrl: './alerts-form.component.html',
    styleUrls: ['./alerts-form.component.scss']
})

export class AlertsFormComponent {

    form:any;
    loading:boolean = false;
    submitted:boolean = false;
    alert_type_list:any = [
        {id: 1, name: 'Lost Pet', value: 'lost_pet'},
        {id: 2, name: 'Found Pet', value: 'found_pet'},
    ]

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.CreateForm();
        this.FormValueChanges();
    }
    
    CreateForm() {
        this.form = this.formBuilder.group({
            'alert_type': ['undefined', Validators.required],
            'location': ['', Validators.required],
            'address': ['', Validators.required],
            'date': ['', Validators.required],
            'time': ['', Validators.required],
            'profile_link': ['', ],
            'detail_situation': ['', Validators.required],
            'pet_avatar': ['', Validators.required],
        })
    }

    FormValueChanges() {
        // this.form.controls['free'].valueChanges.subscribe((value:any) => {
        //     (value) ? this.form.get('price').disable() : this.form.get('price').enable();
        //     // (value) ? this.form.get('pet_price_unit').disable() : this.form.get('pet_price_unit').enable();
        // });
    }

    SubmitData() {
        this.submitted = true;
        if(this.form.valid) {
            let data = this.form.value;
            this.loading = true;
        }
    }
}
