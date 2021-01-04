import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentObservable } from 'src/app/services/compnent-observable/compnent-observable.service';

@Component({
    selector: 'p-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
  
export class HeaderComponent {
    role : String;
    user : [];
    profilePicture : String;
    userdata : [];
    role_id:any;
    full_name:any;
    activePet : {};
    url = "http://35.232.243.88";


    constructor(
        private router: Router,
        private componentObservable : ComponentObservable
        
        ) {}

    ngOnInit() {
        this.full_name = sessionStorage.getItem('full_name');
        this.role_id = sessionStorage.getItem('role_id');
        if(this.role_id == 2){
            let pets = JSON.parse(sessionStorage.pets);
            if(pets.length > 1){
                this.userdata = pets;
                
                this.activePet = pets[0]; 
                sessionStorage.setItem("pet_id", this.activePet["id"]);
                if(this.activePet["profile_picture"]){
                    this.profilePicture = this.url + this.activePet["profile_picture"];
                }
                this.full_name = this.activePet["name"];
            }
        }
    }
    ActivePet(id){
       
        this.userdata.forEach((data)=>{
            if(data["id"] == id){

                this.activePet = data; 
                if(this.activePet["profile_picture"]){
                    this.profilePicture = this.url + this.activePet["profile_picture"];
                }
                this.full_name = this.activePet["name"];

            }
            
        });
        this.componentObservable.PassIdClicked(id);
    }

    Logout() {
        sessionStorage.clear();
        this.router.navigate(["/"]);
    }
}
  