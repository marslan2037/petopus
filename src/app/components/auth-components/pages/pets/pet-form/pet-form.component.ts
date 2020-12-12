import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'pet-form',
    templateUrl: './pet-form.component.html',
    styleUrls: ['./pet-form.component.scss']
})
  
export class PetFormComponent {

	form:any;
    loading:boolean = false;
    submitted:boolean = false;
     constructor(
            private formBuilder: FormBuilder,
            
        ) {}
   

 CreateForm() {
        this.form = this.formBuilder.group({
            'status': ['undefined', Validators.required],
            'name': ['', Validators.required],
            'gender': ['', Validators.required],
            'email': ['', Validators.required],
            'age': ['', Validators.required],
            'breed': ['', Validators.required],
            'date': ['', Validators.required],
            'email2': ['', Validators.required],
            'register': ['', Validators.required],
            'name2': ['', Validators.required],
            'gender2': ['', Validators.required],
            'status2': ['', Validators.required],
            'reserve': ['', Validators.required],
            'price': ['', Validators.required],
            

        })
    }
    SubmitData(){}

}
  