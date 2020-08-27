import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiServicesService } from './../../../../../services/api-services/api-services.service';

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

    constructor(private formBuilder: FormBuilder, private apiServicesService: ApiServicesService) {}

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
            'latitude': ['',],
            'longitude': ['', ],

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
            this.loading = true;
            let data = this.form.value;
            let token = sessionStorage.getItem("token");

            let event_data = {
                authentication_token: token,
                activity: {
                    name: data.name,
                    date: data.start_date,
                    end_date: data.end_date,
                    loccation: data.address,
                    activity_type: data.status,
                    start_time: data.start_time,
                    end_time: data.end_time,
                    price: data.price,
                    free: data.free,
                    lat: data.latitude,
                    long: data.longitude,
                    description: data.description,
                    friend_list: [ "a", "b" ]
                }
            };

            console.log(data)
            console.log(event_data)

            this.apiServicesService.CreateProfessionalEvent(event_data).subscribe((response:any) => {
                console.log(response)
                this.loading = false;

                if(response['activity_id']) {
                    if(this.imagesArraylist.length > 0) {
                        this.apiServicesService.UploadFile(this.imagesArraylist[0], 'Activity', response['activity_id'], token, true, false).subscribe((response:any) => {
                            console.log(response);
                        }, error => {
                            console.log(error)
                        })
                    }
                }
            }, error => {
                this.loading = false;
                console.log(error);
            });
        }
    }

    imagesArraylist:any = [];
    onFileChange(event:any) {
        if(event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            this.imagesArraylist.push(file);
            console.log(this.imagesArraylist);
            // const reader = new FileReader();
            // reader.onload = e => this.imageSrce = reader.result;
           
            // console.log(this.imageSrce);
            // reader.readAsDataURL(file);
            // setTimeout(() => {
            //   this.imageArray.push({pics: this.imageSrce, desc : ""});
            //   console.log(this.imageArray);
            // }, 2000);  
              
          }
    }
}
