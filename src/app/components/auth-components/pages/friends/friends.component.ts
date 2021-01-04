import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServicesService } from 'src/app/services/api-services/api-services.service';
import { ComponentObservable } from 'src/app/services/compnent-observable/compnent-observable.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'friends',
    templateUrl: './friends.component.html',
    styleUrls: ['./friends.component.scss']
})
  
export class FriendsComponent {
    albumsType:any;
    imageArray:any;
    role : String;
    user : [];
    profilePicture : String;
    userdata : [];
    owner_profile:boolean = false;
    nick_name:any;
    url : any = "http://35.232.243.88";
    petsData : any = [];
    allPetsData : any = [];
    pet_id : any;
    friendRequests : any = [];
    sendingFriendRequests : any = [];
    friendsData : any = [];

    constructor(
        private router: Router, 
        private apiService: ApiServicesService,
        private componentObservable : ComponentObservable,
        private toastr: ToastrService
    ) {}

    ngOnInit() {
        this.pet_id = sessionStorage.pet_id;
        this.nick_name = sessionStorage.getItem('full_name');
        this.GetAllPets();
        //this.GetPendingRequests();
        //this.GetSendingPendingRequests();
        this.GetFriends();
        this.componentObservable.getIdClicked.subscribe((value)=>{
            this.pet_id = value;
            this.GetAllPets();
            
        })
        //this.owner_profile = (sessionStorage.getItem('role') == '1') ? true : false;
    }
    GetAllPets(){
        this.apiService.GETAllPets().subscribe((response)=>{
            this.allPetsData = [];
            this.petsData = [];
            let pets = response["pets"];
            if(pets.length > 0){
                pets.forEach(element => {
                    if(element.id != this.pet_id){
                        this.petsData.push({
                            name: element.name,
                            type: element.pet_type,
                            breed: element.breads || element.breed1 || element.breed2,
                            size: element.size,
                            city: element.city.name,
                            photo: element.profile_picture ? this.url + element.profile_picture : null,
                            id: element.id
                        });

                    }
                    
                });
                this.GetPendingRequests();
                this.GetSendingPendingRequests();
                this.allPetsData = this.petsData;
            }
            console.log(this.petsData);
        }, (error)=>{
            this.toastr.error("Unable to Fetch Pets Information")
        })
    }
    AddFriend(id){
        let token = sessionStorage.token;
        const params ={
            authentication_token: token,
            pet_id: this.pet_id,
            pet_friend_id: id
            
            
        };
        this.apiService.SendRequest(params).subscribe((response)=>{
            console.log(response);
            this.petsData.forEach((element, index, object) => {
                if(element.id == response["firend_id"]){
                    object.splice(index, 1);
                };
                
            });
            this.toastr.success(
                "Successfully added"
            );
        }, (error)=>{
            this.toastr.error(error);

        });

    }
    GetPendingRequests(){
        const params = {
            token: sessionStorage.token,
            id: this.pet_id
        };
        this.apiService.GetPandingRequests(params).subscribe((response)=>{
            console.log(response);
            this.friendRequests = [];
            let requests = response["friend_requests"];
            
            if(requests.length > 0){
                requests.forEach((request, index) => {
                   
                    this.petsData.forEach((pet, i, object) => {
                        if(request.friend_id == pet.id){
                            
                            let petData = pet;
                            this.friendRequests.push(petData);
                            object.splice(i, 1);
                        }
                        
                    });
                });
            }
            console.log("Geniune Request");
            console.log(this.friendRequests);

            

        }, (error)=>{
            this.toastr.error("Unable to Fetch Pending Requests");
        })
    }
    GetSendingPendingRequests(){
        const params = {
            token: sessionStorage.token,
            id: this.pet_id
        };
        this.apiService.GetSendFriendRequest(params).subscribe((response)=>{
            this.sendingFriendRequests = [];
            let requests = response["friend_requests"];
            if(requests.length > 0){
                requests.forEach((request, index) => {
                    this.petsData.forEach((pet, i, object) => {
                        if(request.friend_id == pet.id){
                            let petData = pet;
                            this.sendingFriendRequests.push(petData);
                            object.splice(i, 1);
                        }
                        
                    });
                });
            }
            console.log(this.sendingFriendRequests);
            

        }, (error)=>{
            this.toastr.error("Unable to Fetch Pending Requests");
        })

    }
    CancelRequest(id){
        
    }
    GetFriends(){
        let params = {
            token: sessionStorage.token,
            id: this.pet_id
        }
        this.apiService.GetFriends(params).subscribe((response)=>{
            console.log(response);
            //debugger;
            let friends = response["friend_requests"];
        }, (error)=>{
            this.toastr.error("Unable to Fetch Friends Information");
        })
    }
    
}
  