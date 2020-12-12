import { Component, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'about-form',
  templateUrl: './about-form.component.html',
  styleUrls: ['./about-form.component.scss']
})

export class AboutFormComponent {
    form:any;
    loading:boolean = false;
    submitted:boolean = false;
    constructor(
        private  elementRef:ElementRef,
        private formBuilder: FormBuilder,
    ){
        this.CreateForm();

    }


    CreateForm() {
        this.form = this.formBuilder.group({
            'day_mon': ['monday'],
            'day_tue': ['tuesday'],
            'day_wed': ['wednesday'],
            'day_thur': ['thursday'],
            'day_fri': ['friday'],
            'day_sat': ['saturday'],
            'day_sun': ['sunday'],
            'start_sun': [''],
            'start_mon': [''],
            'start_tue': [''],
            'start_wed': [''],
            'start_thur': [''],
            'start_fri': [''],
            'start_sat': [''],
            'end_sun': [''],
            'end_mon': [''],
            'end_tue': [''],
            'end_wed': [''],
            'end_thur': [''],
            'end_fri': [''],
            'end_sat': [''],
            'city': ['', Validators.required],
            'state': ['', Validators.required],
            'postal': ['', Validators.required],
            'country': ['', Validators.required],
            'contact': ['', Validators.required],
            'profession_tyoe': ['', Validators.required],
            'business_name': ['', Validators.required],
            'company_name': ['', Validators.required],
        })
    }
    

    AddInput(){
        //debugger;
        let div = this.elementRef.nativeElement.querySelector('.list');
     
        if(div.children.length < 7){

            let formOption = "mon";
            let formLabel = "Monday"
            if(div.children.length == 1){
                formOption = "tue";
                formLabel = "Tuesday"

            }
            if(div.children.length == 2){
                formOption = "wed";
                formLabel = "Wednesday"
                
            }
            if(div.children.length== 3){
                formOption = "thur";
                formLabel = "Thursday"
                
            }
            if(div.children.length == 4){
                formOption = "fri";
                formLabel = "Friday"
                
            }
            if(div.children.length == 5){
                formOption = "sat";
                formLabel = "Saturday"
                
            }
            if(div.children.length == 6){
                formOption = "sun";
                formLabel = "Sunday"
                
            }
            
            
            div.insertAdjacentHTML('beforeend', '<div class="mb-2 row justify-content-between px-3">' +
            '<select class="mob mb-2" formControlName="day-'+formOption+'">' +
                '<option selected value="'+formOption+'">'+formLabel+'</option>' +
                
                '</select>' +
            '<div class="mob">' +
                '<label class="text-grey mr-1">From</label>' +
                '<input class="ml-1" type="time" formControlName="start-'+formOption+'" name="from">' +
                '</div>' +
            '<div class="mob mb-2">' +
                '<label class="text-grey mr-4">To</label>' +
                '<input class="ml-1" type="time" formControlName="end-'+formOption+'" name="to">' +
                '</div>' +
            '<div class="mt-1 cancel fa fa-times text-danger">' +
                '</div>' +
            '</div>');


        }
        
    }
    SubmitData(){
        this.submitted = true;
        console.log(this.form);
    }
    
}