import { Component, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiServicesService } from 'src/app/services/api-services/api-services.service';
import { Router } from '@angular/router';

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
        private toastr: ToastrService, 
        private apiServicesService: ApiServicesService,
        private router: Router
    ){
        this.CreateForm();

    }
    pro_profession_type:any = [
        {id: 1, name: "Non Profit Organization", value: "Non Profit Organization" },
        {id: 2, name: "Veterinary", value: "Veterinary" },
        {id: 3, name: "Shop", value: "Shop" },
        {id: 4, name: "Pet Hospital", value: "Pet Hospital" },
        {id: 5, name: "Pet Groomer", value: "Pet Groomer" },
        {id: 6, name: "Pet Breeder", value: "Pet Breeder" },
        {id: 7, name: "Pet Sitters", value: "Pet Sitters" },
        {id: 8, name: "Pet Trainers", value: "Pet Trainers" },
        {id: 9, name: "Pet Walker", value: "Pet Walker" },
        {id: 10, name: "Therapists", value: "Therapists" },
        {id: 11, name: "Insureance", value: "Insureance" },
        {id: 12, name: "Local animal control", value: "Local animal control" },
        {id: 13, name: "Local police pet", value: "Local police pet" },
    ]

    CreateForm() {
        this.form = this.formBuilder.group({
            'professional_name': [''],
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
            'profession_type': ['undefined', Validators.required],
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
        
        if(this.form.valid){

            const user = {
                
                authentication_token: sessionStorage.getItem("token"),
                
                user: {
                    
                    city: this.form.value.city, 
                    province: this.form.value.state, 
                    country: this.form.value.country, 
                    postal_code: this.form.value.postal
                }
            
                
            };
            const  pro_company = {
                authentication_token: sessionStorage.getItem("token"),
                professional_id: sessionStorage.professional_id,
                professional:{
                    professional_name: this.form.value.professional_name,
                    company_name : this.form.value.company_name,
                    business_information: this.form.value.business_name,
                    profession_type: this.form.value.profession_tyoe,
                    opening_hours: "12:00",
                    closing_hours: "14:00",
                    contact: this.form.value.contact,
        
                }

            };
            // const params = [{
            //     authentication_token: sessionStorage.getItem("token"),
            //     dayable_type : "Professional",
            //     dayable_id : sessionStorage.professional_id,
            //     days :{
            //       days : days,
            //       opening : opening,
            //       closing : closing
            //     } 
            //   },{
            //     id: this.auth.getProfessional()
            //   }];


            this.apiServicesService.UpdateProfessional(pro_company).subscribe((data)=>{
                debugger;
                this.apiServicesService.onUpdateUser(user).subscribe(
                    (response)=>{
                        this.router.navigate(["/home"]);
                        
                    }, (error)=>{
                        this.toastr.error("Error", "Something Wrong Please try again!" );
                    }
    
    
                );
                
            }, (error)=>{
                this.toastr.error("Error", "Something Wrong Please try again!" );
            });

            

        }

      
    }
    
}