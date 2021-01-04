import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiServicesService } from 'src/app/services/api-services/api-services.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

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
            private apiServicesService: ApiServicesService,
            private toaster : ToastrService,
            private router: Router
            

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
            'type': ['', Validators.required],
            'name': ['', Validators.required],
            'gender': ['', Validators.required],
            'size': ['0', Validators.required],
            'age': ['', Validators.required],
            'breeds': ['', Validators.required],
            'breed1': ['', Validators.required],
            'breed2': ['', Validators.required],
            
            'mixedbreed': [''],
            'purebreed' : [''],
            '2ndbreed' : [''],
            'is_intact' : ['intect'],
            "pet_avator" : ['', Validators.required]
            

        })
    }
    SubmitData(){
        
        this.submitted = true;
        if(this.form.valid){
            this.toaster.show("Please Wait");
            let is_intact = false;//this.form.value.is_intact;
            (this.form.value.is_intact == "spayed") ? is_intact = true : is_intact = false;
            let data = this.form.value;
            this.loading = true;
            let params = {
                "authentication_token" : sessionStorage.token,
                "pet" : {
                    "name" : data.name,
                    "gender" : data.gender,
                    "pet_type" : data.type,
                    "size": data.size,
                    "age" : data.age,
                    "is_castrated" : false,
                    "is_intact": is_intact,
                    "breeds": data.breeds,
                    "is_pure_breed" : (data.purebreed) ? true : false,
                    "is_mixed_breed" : (data.mixedbreed) ? true : false,
                    "breed1": data.breed1,
                    "breed2": data.breed2
                     
                }
            }
            console.log(params);
            this.apiServicesService.CreatePet(params).subscribe((response)=>{
                this.loading = false;
                this.toaster.success("Pet successfully created");
                
                let pet_id = response["id"];
                
                if(pet_id) {
                    if(this.imagesArraylist.length > 0) {
                        
                        this.apiServicesService.UploadFile(this.imagesArraylist[0], 'Pet', pet_id, sessionStorage.token, true, false).subscribe((response:any) => {
                            console.log(response);
                            
                            this.router.navigate(['/home']);
                        }, error => {
                            
                            console.log(error)
                        })
                    }
                    else{
                        this.router.navigate(['/home/']);
                    }
                }
                else{
                    this.router.navigate(["/"]);
                }

                
                //this.router.navigate(["/"]);
            }, (error)=>{
               
                this.toaster.error(error);
                console.log(error);
                this.loading = false;

            }
            
            );

            

        }
    }
    imagesArraylist:any = [];
    onFileChange(event:any) {
        if(event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            this.imagesArraylist.push(file);
            console.log(this.imagesArraylist);
              
        }
    }

}
  