import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiServicesService } from './../../../../../services/api-services/api-services.service';

@Component({
    selector: 'parks-form',
    templateUrl: './parks-form.component.html',
    styleUrls: ['./parks-form.component.scss']
})

export class ParksFormComponent {

    form:any;
    latitude:any = '';
    longitude:any = '';
    loading:boolean = false;
    submitted:boolean = false;
    event_status_list:any = [
        {id: 1, name: 'Private Event', value: 'private_event'},
        {id: 2, name: 'Public Event', value: 'public_event'},
    ];
    location_status_list:any = [
        {id: 1, name: 'Outdoor', value: 'out_door'},
        {id: 2, name: 'Indoor', value: 'in_door'},
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
            'park_name': ['', Validators.required],
            'location_type': ['undefined', Validators.required],
            'status': ['undefined', Validators.required],
            'address': ['', Validators.required],
            'phone_number': ['', Validators.required],
            'opening_hour': ['', Validators.required],
            'closing_hour': ['', Validators.required],
            'free': ['', ],
            'price': ['', ],
            'pet_price_unit': ['undefined', ],
            'park_description': ['', Validators.required],
            'park_avatar': ['', Validators.required],
            'parking': ['', ],
            'fancy': ['', ],
            'off_leash': ['', ],
            'dog_area': ['', ],
            'bags': ['', ],
            'rest_room': ['', ],
            'lighting': ['', ],
            'water_station': ['', ],
            'park_pictures': ['', Validators.required],
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

            const params = [{
                authentication_token: sessionStorage.getItem("token"),
                professional_id: sessionStorage.getItem("professional_id"),
                park : {
                    name: data.park_name,
                    location: data.location_type,
                    is_public: data.status,
                    is_indoor: 'type',
                    is_fancy: data.fancy,
                    phone: data.phone_number,
                    parking: data.parking,
                    description: data.park_description,
                    opening_time: data.opening_hour,
                    closing_time: data.closing_hour,
                    field_price: data.pet_price_unit,
                    price: data.price,
                    off_leash: data.off_leash,
                    restroom: data.rest_room,
                    lighting: data.lighting,
                    bags: data.bags,
                    small_dog_area: data.dog_area,
                    water_stations: data.water_station,
                    lat: this.latitude,
                    long: this.longitude
                }   
            }];

            this.apiServicesService.CreateParks(params).subscribe((response:any) => {
                console.log(response);
                this.loading = false;
            }, error => {
                console.log(error);
                this.loading = false;
            })
        }
    }
}
