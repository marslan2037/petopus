import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'events-form',
    templateUrl: './events-form.component.html',
    styleUrls: ['./events-form.component.scss']
})

export class EventsFormComponent {

    services:any = [];
    form:any;
    loading:boolean = false;
    submitted:boolean = false;
    creating_service:boolean = false;
    event_status_list:any = [
        {id: 1, name: 'Private Event', value: 'private_event'},
        {id: 2, name: 'Public Event', value: 'public_event'},
    ]

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.CreateForm();
        this.FormValueChanges();
    }
    
    CreateForm() {
        this.form = this.formBuilder.group({
            'status': ['undefined', Validators.required],
            'name': ['', Validators.required],
            'address': ['', Validators.required],
            'start_date': ['', Validators.required],
            'end_date': ['', Validators.required],
            'start_time': ['', Validators.required],
            'end_time': ['', Validators.required],
            'free': ['', ],
            'price': ['', ],
            'invite_followers': ['', ],
            'event_description': ['', Validators.required],
            'event_avatar': ['', Validators.required],
            'event_pictures': ['', Validators.required],
        })
    }

    FormValueChanges() {
        this.form.controls['free'].valueChanges.subscribe((value:any) => {
            (value) ? this.form.get('price').disable() : this.form.get('price').enable();
            // (value) ? this.form.get('pet_price_unit').disable() : this.form.get('pet_price_unit').enable();
        });
    }

    SubmitData() {
        this.submitted = true;
        if(this.form.valid) {
            let data = this.form.value;
            this.loading = true;
        }
    }
}
