import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { ApiServicesService } from 'src/app/services/api-services/api-services.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'album',
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.scss']
})
  
export class AlbumComponent {
    // role : String;
    // user : [];
    // profilePicture : String;
    // userdata : [];
    // owner_profile:boolean = false;
    // nick_name:any;
    role_id:any;
    loading: boolean = false;

    constructor(
        private router: Router,
        private apiService: ApiServicesService,
        private toastr: ToastrService 
    ) {}
    url : any = this.apiService.url;

    // ngOnInit() {
    //     this.nick_name = sessionStorage.getItem('full_name');
    //     this.owner_profile = (sessionStorage.getItem('role') == '1') ? true : false;
    // }
    ngOnInit(){
        this.role_id = sessionStorage.getItem('role_id');
        console.log(this.role_id)

        this.GetAllAlbums();
    }

    DisplayAlbumForm() {
        this.router.navigate(['/home/album/create']);
    }
    albums_list : any  = [];
    GetAllAlbums(){
        this.loading = true;
        this.apiService.GetProfessionalAlbums().subscribe((response:any) => {
            console.log(response);
            this.loading = false;
            this.albums_list = response['albums'];
        }, error => {
            console.log(error)
            this.loading = false;
            if(error.status == 401) {
                this.toastr.error(error.error.error, "Authentication Error");
            }
            else {
                this.toastr.error("Network Faild! Unable to Connect to Server", "Network Error");
            }
        })

    }

}
  