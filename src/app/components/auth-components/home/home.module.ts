import { NgModule } from '@angular/core';


import { HomeRoutes } from './home.routing';


import { HomeComponent } from './home.component';

// import { CreateEventComponent } from '../components/professional/professional-event/create-event/create-event.component';
// import { Article2Component } from '../components/professional/article2/article2.component';
// import { BreedersComponent } from '../components/professional/breeders/breeders.component';
// import { CreateBreedersComponent } from '../components/professional/breeders/create-breeders/create-breeders.component';
// import { StoreProfileComponent } from '../components/professional/store-profile/store-profile.component';
// import { ProfessionalAlertComponent } from '../components/professional/professional-alert/professional-alert.component';
// import { ProfessionalAlertDisplayComponent } from '../components/professional/professional-alert-display/professional-alert-display.component';
// import { ProfessionlArticleComponent } from '../components/professional/professionl-article/professionl-article.component';
// import { CreatearticleComponent } from '../components/professional/professionl-article/createarticle/createarticle.component';
// import { ProfesionalNearByComponent } from '../components/professional/profesional-near-by/profesional-near-by.component';
// import { ProfessionalAlbumComponent } from '../components/professional/professional-album/professional-album.component';
// import { ProfessionalEventsComponent } from '../components/professional/professional-events/professional-events.component';
// import { ProfessioanlPetparksComponent } from '../components/professional/professioanl-petparks/professioanl-petparks.component';
// import { CreatePetparksComponent } from '../components/professional/professioanlPetparks/create-petparks/create-petparks.component';
// import { LastMinuteAppointmentComponent } from '../components/professional/last-minute-appointment/last-minute-appointment.component';
// import { CreateMeetingComponent } from '../components/professional/lastMinuteMeeting/create-meeting/create-meeting.component';
// import { ProfessionalNewsFeedComponent } from '../components/professional/professional-news-feed/professional-news-feed.component';
// import { OurPetsComponent } from '../components/professional/our-pets/our-pets.component';
// import { FollowersComponent } from '../components/professional/followers/followers.component';
// import { ProfessionalFriendsComponent } from '../components/professional/professional-friends/professional-friends.component';
// import { ProfessionalGalleryComponent } from '../components/professional/professional-gallery/professional-gallery.component';
// import { ProfessionalPostDisplayComponent } from '../components/professional/professional-post-display/professional-post-display.component';
// import { CreateProfessionalAlertComponent } from '../components/professional/professional-alert/create-professional-alert/create-professional-alert.component';
// import { ProfessionalRoutes } from '../routes/professional.route';
// import { CommonModule } from '@angular/common';
// import { MainLayoutComponent } from '../components/petOwner/main-layout/main-layout.component';
// import { ServicesComponent } from '../components/professional/services/services.component';
// import { AnnouncesComponent } from '../components/professional/announces/announces.component';
// import { CreateAnnouncementComponent } from '../components/professional/announces/create-announcement/create-announcement.component';
// import { ProfessionalProfileFormComponent } from '../components/professional/professional-profile-form/professional-profile-form.component';
// import { ProfessionalEventComponent } from '../components/professional/professional-event/professional-event.component';
// import { LayoutComponent } from '../components/layout/layout.component';
// import { FeedMenuComponent } from '../components/feed-menu/feed-menu.component';
// import { LeftMenuComponent } from '../components/left-menu/left-menu.component';
// import { RightMenuComponent } from '../components/right-menu/right-menu.component';
// import { petsAppModule } from './pet.module';
// import { Professional } from '../services/professional.service';

@NgModule({
    declarations: [
        HomeComponent,
        // ServicesComponent,
        // CreateEventComponent,
        // ProfessionalEventComponent,
        // AnnouncesComponent,
        // CreateAnnouncementComponent,
        // ProfessionalProfileFormComponent,
        // CreateEventComponent,
        // Article2Component,
        // BreedersComponent,
        // CreateBreedersComponent,
        // StoreProfileComponent,
        // ProfessionalAlertComponent,
        // ProfessionalAlertDisplayComponent, 
        // ProfessionlArticleComponent, 
        // CreatearticleComponent, 
        // ProfesionalNearByComponent, 
        // ProfessionalAlbumComponent,
        // ProfessionalEventsComponent,
        // ProfessioanlPetparksComponent,
        // CreatePetparksComponent, 
        // LastMinuteAppointmentComponent, 
        // CreateMeetingComponent, 
        // ProfessionalNewsFeedComponent,
        // FollowersComponent, 
        // ProfessionalFriendsComponent,
        // ProfessionalGalleryComponent, 
        // ProfessionalPostDisplayComponent, 
        // CreateProfessionalAlertComponent,
    ],
    imports: [
        HomeRoutes
        // ProfessionalRoutes,
        // CommonModule,
        // petsAppModule,
    ],
    exports:[],
})
export class HomeModule { }
  