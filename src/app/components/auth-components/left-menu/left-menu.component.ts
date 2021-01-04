import { Component } from '@angular/core';
import { ComponentObservable } from 'src/app/services/compnent-observable/compnent-observable.service';

@Component({
    selector: 'p-left-menu',
    templateUrl: './left-menu.component.html',
    styleUrls: ['./left-menu.component.scss']
})
  
export class LeftMenuComponent {

    profilePicture:any;
    role : String;
    user : [];
    userdata : [];
    role_id:any;
    nick_name:any;
    company_name: any;
    activePet: any = {};
    url: any = "http://35.232.243.88";

    constructor(
        private componentObservable : ComponentObservable
    ) {}

    ngOnInit() {
        this.nick_name = sessionStorage.getItem('full_name');
        this.company_name = sessionStorage.company_name;
        this.role_id = sessionStorage.getItem('role_id');
        if(this.role_id == 2){

            let pets = JSON.parse(sessionStorage.pets);
            if(pets.length > 1){
                this.userdata = pets;
                
                this.activePet = pets[0]; 
                if(this.activePet["profile_picture"]){
                    this.profilePicture = this.url + this.activePet["profile_picture"];
                }
                this.nick_name = this.activePet["name"];
            }

            this.componentObservable.getIdClicked.subscribe((response:any) =>{
                console.log(response + "---LEFT");
                let id = response;
                this.userdata.forEach((data)=>{
                    if(data["id"] == id){
        
                        this.activePet = data; 
                        if(this.activePet["profile_picture"]){
                            this.profilePicture = this.url + this.activePet["profile_picture"];
                        }
                        else{
                            this.profilePicture = "/assets/images/3_03.png";
                        }
                        this.nick_name = this.activePet["name"];
        
                    }
                    
                });
            });

        }
        
        
    }
    
}
  