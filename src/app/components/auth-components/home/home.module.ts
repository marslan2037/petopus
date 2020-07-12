import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { HomeRoutes } from './home.routing';


import { HomeComponent } from './home.component';
import { HeaderComponent } from '../header/header.component';
import { FeedMenuComponent } from '../feeds-menu/feed-menu/feed-menu.component';
import { LeftMenuComponent } from '../left-menu/left-menu/left-menu.component';
import { AboutComponent } from './../feeds-menu/about/about.component';
import { ServicesComponent } from './../feeds-menu/services/services/services.component';
import { ServicesFormComponent } from './../feeds-menu/services/services-form/services-form.component';
import { AlertsComponent } from './../feeds-menu/alerts/alerts/alerts.component';
import { AlertsFormComponent } from './../feeds-menu/alerts/alerts-form/alerts-form.component';
import { NewsFeedComponent } from './../feeds-menu/news-feed/news-feed.component';
import { EventsComponent } from './../feeds-menu/events/events/events.component';
import { EventsFormComponent } from './../feeds-menu/events/events-form/events-form.component';
import { ParksComponent } from './../feeds-menu/parks/parks/parks.component';
import { ParksFormComponent } from './../feeds-menu/parks/parks-form/parks-form.component';
import { NearByComponent } from './../feeds-menu/nearby/nearby.component';
import { AnnouncementsComponent } from './../feeds-menu/announcements/announcements/announcements.component';
import { AnnouncementsFormComponent } from './../feeds-menu/announcements/announcements-form/announcements-form.component';
import { RightMenuComponent } from '../right-menu/right-menu.component';
import { AlbumComponent } from './../left-menu/album/album/album.component';
import { AlbumFormComponent } from './../left-menu/album/album-form/album-form.component';
import { FriendsComponent } from './../left-menu/friends/friends.component';
import { PublishArticleComponent } from './../left-menu/publish-article/publish-article.component';
import { ChatComponent } from './../left-menu/chat/chat.component';
import { GroupsComponent } from './../left-menu/groups/groups.component';
import { AppointmentsComponent } from './../left-menu/appointments/appointments.component';
import { BreedersComponent } from './../left-menu/breeders/breeders.component';
import { AdvertisementsComponent } from './../left-menu/advertisements/advertisements.component';
import { FeedbackComponent } from './../left-menu/feedback/feedback.component';

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
        HeaderComponent,
        FeedMenuComponent,
        LeftMenuComponent,
        RightMenuComponent,
        AboutComponent,
        ServicesComponent,
        ServicesFormComponent,
        AlertsComponent,
        AlertsFormComponent,
        NewsFeedComponent,
        EventsComponent,
        EventsFormComponent,
        ParksComponent,
        ParksFormComponent,
        NearByComponent,
        AnnouncementsComponent,
        AnnouncementsFormComponent,
        AlbumComponent,
        AlbumFormComponent,
        FriendsComponent,
        PublishArticleComponent,
        ChatComponent,
        GroupsComponent,
        AppointmentsComponent,
        BreedersComponent,
        AdvertisementsComponent,
        FeedbackComponent,
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
        HomeRoutes,
        CommonModule
        // ProfessionalRoutes,
        // CommonModule,
        // petsAppModule,
    ],
    exports: [
        HeaderComponent, 
        FeedMenuComponent,
        LeftMenuComponent, 
        RightMenuComponent, 
        AlertsComponent, 
        EventsComponent, 
        ParksComponent, 
        AnnouncementsComponent, 
        NearByComponent
    ],
})
export class HomeModule { }
  