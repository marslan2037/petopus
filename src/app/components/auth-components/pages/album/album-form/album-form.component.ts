import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
        {id: 1, name: 'Album A', value: 'album_a'},
        {id: 2, name: 'Album B', value: 'album_b'},
    ];

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.CreateForm();
        this.FormValueChanges();
    }
    
    CreateForm() {
        this.form = this.formBuilder.group({
            'album_name': ['', Validators.required],
            'album_type': ['undefined', Validators.required],
            'album_images': ['', Validators.required],
        })
    }

    FormValueChanges() {
        this.form.controls['free'].valueChanges.subscribe((value:any) => {
            // (value) ? this.form.get('price').disable() : this.form.get('price').enable();
            // (value) ? this.form.get('pet_price_unit').disable() : this.form.get('pet_price_unit').enable();
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
  