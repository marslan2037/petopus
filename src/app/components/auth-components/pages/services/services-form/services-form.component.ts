import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiServicesService } from './../../../../../services/api-services/api-services.service';

@Component({
    selector: 'services-form',
    templateUrl: './services-form.component.html',
    styleUrls: ['./services-form.component.scss']
})

export class ServicesFormComponent {

    submitted:boolean = false;
    loading:boolean = false;
    services:any = [];
    form:any;
    service_types:any = [
        { id: 1, name: "Adoption", value:"adoption" },
        { id: 2, name: "Medical Exam", value:"medical-exam" },
        { id: 3, name: "Spaying or Neutering", value:"spaying-neutering" },
        { id: 4, name: "Vaccinations/Titres", value:"vaccinations/titres" },
        { id: 5, name: "Healthcare", value:"healthcare" },
        { id: 6, name: "Pet Insurance", value:"pet-insurance" },
        { id: 7, name: "SPA", value:"spa" },
        { id: 8, name: "Dog Walking", value:"dog-walking" },
        { id: 9, name: "Rescue", value:"rescue" },
        { id: 10, name: "Training", value:"training" },
        { id: 11, name: "Sheltering", value:"sheltering" },
        { id: 12, name: "Pet Sitting", value:"pet-sitting" },
        { id: 13, name: "Pet Daycare", value:"pet-daycare" },
        { id: 14, name: "Pet Boarding", value:"pet-boarding" },
        { id: 15, name: "Pet Brooming", value:"pet-brooming" },
        { id: 16, name: "Dentistry", value:"dentistry" },
        { id: 17, name: "Surgery", value:"surgery" },
        { id: 18, name: "Orthopedics", value:"orthopedics" },
        { id: 19, name: "Pet Taxi", value:"pet-taxi" },
        { id: 20, name: "Crematory Services", value:"crematory-services" }
    ];
    pet_types:any =[
        {id: 1, name:"Dog", value:"dog" },
        {id: 2, name:"Cat", value:"cat" },
        {id: 3, name:"Horse", value:"horse" },
        {id: 4, name:"Camel", value:"camel" },
        {id: 5, name:"Bird", value:"bird" },
        {id: 6, name:"Reptile", value:"reptile" },
        {id: 7, name:"Fish", value:"fish" },
        {id: 8, name:"Rabbits", value:"rabbits" },
        {id: 9, name:"Guinea pigs", value:"guinea-pigs" },
        {id: 10, name:"Mice", value:"mice" },
        {id: 11, name:"Hamsters", value:"hamsters" },
        {id: 12, name:"Gerbils", value:"gerbils" },
        {id: 13, name:"Rats", value:"rats" },
        {id: 14, name:"Hedgehogs", value:"hedgehogs" },
        {id: 15, name:"Ferrets", value:"ferrets" },
        {id: 16, name:"Chinchillas", value:"chinchillas" },
        {id: 17, name:"Squirrels", value:"squirrels" },
        {id: 18, name:"Sugar gliders", value:"sugar gliders" },
        {id: 19, name:"Other", value:"other" }
    ];
    pet_price_unit:any = [
        {id: 1, name: "Visit", value: "visit" },
        {id: 2, name: "Walk", value: "walk" },
        {id: 3, name: "Ride", value: "ride" },
        {id: 4, name: "Hour", value: "hour" },
        {id: 5, name: "Day", value: "day" },
        {id: 6, name: "Night", value: "night" },
        {id: 7, name: "Week", value: "week" },
        {id: 8, name: "Month", value: "month" }
    ]
 
    constructor(
            private formBuilder: FormBuilder,
            private toastr: ToastrService, 
            private apiServicesService: ApiServicesService
        ) {}

    ngOnInit() {
        this.CreateForm();
        this.FormValueChanges();
    }
    
    CreateForm() {
        this.form = this.formBuilder.group({
            'service_name': ['', Validators.required],
            'service_type': ['undefined', Validators.required],
            'pet_type': ['undefined', Validators.required],
            'price': ['', ],
            'pet_price_unit': ['undefined', ],
            'negotiable': ['', ],
            'call_for_price': ['', ],
            'free': ['', ],
            'service_description': ['', Validators.required],
        })
    }

    FormValueChanges() {
        this.form.controls['free'].valueChanges.subscribe((value:any) => {
            (value) ? this.form.get('price').disable() : this.form.get('price').enable();
            (value) ? this.form.get('pet_price_unit').disable() : this.form.get('pet_price_unit').enable();
        });
    }

    SubmitData() {
        this.submitted = true;
        if(this.form.valid) {
            let data = this.form.value;
            this.loading = true;
            console.log(data);

            const params = [{
                authentication_token: sessionStorage.getItem("token"),
                professional_id: sessionStorage.getItem("professional_id"),
                name: data.service_name,
                service_type: data.service_type,
                pet_type: data.pet_type,
                free: data.free,
                price : data.price,
                negotiable: data.negotiable,
                description: data.service_description,
                call_for_price : data.call_for_price,
            }];

            this.apiServicesService.CreateService(params).subscribe((response:any) => {
                console.log(response);
                this.loading = false;
            }, error => {
                console.log(error);
                this.loading = false;
            })
        }
    }
}
