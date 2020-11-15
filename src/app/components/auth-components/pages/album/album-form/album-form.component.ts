import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiServicesService } from 'src/app/services/api-services/api-services.service';
import { Router } from '@angular/router';

@Component({
    selector: 'album-form',
    templateUrl: './album-form.component.html',
    styleUrls: ['./album-form.component.scss']
})
  
export class AlbumFormComponent {

    form:any;
    loading:boolean = false;
    submitted:boolean = false;
    album_type_list:any = [
        {id: 1, name: 'Daily Life', value: 'daily_life'},
        {id: 2, name: 'Play date', value: 'play_date'},
        {id: 3, name: 'Park', value: 'park'},
        {id: 2, name: 'Walking', value: 'walking'},
        {id: 2, name: 'Veterinary', value: 'veterinary'},
        {id: 2, name: 'Training', value: 'training'},
        {id: 2, name: 'Other', value: 'other'},
    ];

 
    constructor(
        private formBuilder: FormBuilder,
        private toastr: ToastrService, 
        private apiServicesService: ApiServicesService,
        private router: Router
        
        ) {}
        

    ngOnInit() {
        this.CreateForm();
        //this.FormValueChanges();
    }
    
    CreateForm() {
        this.form = this.formBuilder.group({
            'album_name': ['', Validators.required],
            'album_type': ['undefined', Validators.required],
            'album_images': ['', Validators.required],
        })
    }

    // FormValueChanges() {
    //     this.form.controls['free'].valueChanges.subscribe((value:any) => {
    //         // (value) ? this.form.get('price').disable() : this.form.get('price').enable();
    //         // (value) ? this.form.get('pet_price_unit').disable() : this.form.get('pet_price_unit').enable();
    //     });
    // }


    ResetForm() {
        this.form.reset();
    }

    SubmitData() {
        this.submitted = true;
        if(this.form.valid) {
            let data = this.form.value;
            let token = sessionStorage.getItem("token");
            
            this.loading = true;
            const albun_data = {
                authentication_token: token,
                album: {
                  name: data.album_name,
                  albumable_type: data.album_type
                  
                }
           
            };
            this.apiServicesService.CreateAlbumsProfessional(albun_data).subscribe((response:any) => {
                console.log(response)
                this.loading = false;
                this.ResetForm();
                this.toastr.success('Album is Created Successfully', "Success");
                let album_id = response['data']['id']
                
                if(album_id) {
                    if(this.imagesArraylist.length > 0) {
                        this.apiServicesService.UploadFile(this.imagesArraylist[0], 'Album', album_id, token, true, false).subscribe((response:any) => {
                            console.log(response);
                            this.router.navigate(['/home/album']);
                        }, error => {
                            console.log(error)
                        })
                    }
                    else{
                        this.router.navigate(['/home/album']);
                    }
                }
            }, error => {
                this.loading = false;
                this.toastr.error(error, "Error");
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
              
        }
    }
}
  