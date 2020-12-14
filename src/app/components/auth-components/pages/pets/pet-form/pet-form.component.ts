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
            

        ) {
            this.CreateForm();
        }

    pet_type:any = [
        {id: 1, name: "Dog", value: "Dog" },
        {id: 2, name: "Cat", value: "Cat" },
        {id: 3, name: "Shop", value: "Shop" },
        {id: 4, name: "Horse", value: "Horse" },
        {id: 5, name: "Camel", value: "Camel" },
        {id: 6, name: "Bird", value: "Bird" },
        {id: 7, name: "Reptile", value: "Reptile" },
        {id: 8, name: "Fish", value: "Fish" },
        {id: 9, name: "Small Pets", value: "Small Pets" }
       
    ]
   

    CreateForm() {
        this.form = this.formBuilder.group({
            'status': ['', Validators.required],
            'name': ['', Validators.required],
            'gender': ['', Validators.required],
            'size': ['0', Validators.required],
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
            'mixedbreed': [''],
            'purebreed' : [''],
            '2ndbreed' : [''],
            'is_intact' : ['intect']
            

        })
    }
    SubmitData(){
        debugger;
    }

}
  