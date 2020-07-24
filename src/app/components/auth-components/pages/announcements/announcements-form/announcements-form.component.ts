import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'announcements-form',
    templateUrl: './announcements-form.component.html',
    styleUrls: ['./announcements-form.component.scss']
})

export class AnnouncementsFormComponent {

    form:any;
    loading:boolean = false;
    submitted:boolean = false;
    service_type_list:any = [
        {id: 1, name: 'Service A', value: 'service_a'},
        {id: 2, name: 'Service B', value: 'service_b'},
    ];
    pet_type_list:any = [
        {id: 1, name: 'Pet A', value: 'pet_a'},
        {id: 2, name: 'Pet B', value: 'pet_b'},
    ];
    price_unit_list:any = [
        {id: 1, name: 'Unit A', value: 'unit_a'},
        {id: 2, name: 'Unit B', value: 'unit_b'},
    ]

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.CreateForm();
        this.FormValueChanges();
    }
    
    CreateForm() {
        this.form = this.formBuilder.group({
            'company_name': ['', Validators.required],
            'province': ['', Validators.required],
            'service_type': ['undefined', Validators.required],
            'pet_type': ['undefined', Validators.required],
            'free': ['', ],
            'negotiable': ['', ],
            'call_for_price': ['', ],
            'price': ['', ],
            'price_unit': ['', ],
            'announcement_description': ['', Validators.required],
            'anouncement_avatar': ['', Validators.required],
            'announcement_pictures': ['', Validators.required],
        })
    }

    FormValueChanges() {
        this.form.controls['free'].valueChanges.subscribe((value:any) => {
            (value) ? this.form.get('price').disable() : this.form.get('price').enable();
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
