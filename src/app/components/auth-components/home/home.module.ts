import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HomeRoutes } from './home.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxLoadingModule } from 'ngx-loading';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../header/header.component';
import { FeedsMenuComponent } from '../feeds-menu/feeds-menu.component';
import { LeftMenuComponent } from '../left-menu/left-menu.component';
import { AboutComponent } from './../pages/about/about.component';
import { ServicesComponent } from './../pages/services/services/services.component';
import { ServicesFormComponent } from './../pages/services/services-form/services-form.component';
import { AlertsComponent } from './../pages/alerts/alerts/alerts.component';
import { AlertsFormComponent } from './../pages/alerts/alerts-form/alerts-form.component';
import { NewsFeedComponent } from './../pages/news-feed/news-feed.component';
import { EventsComponent } from './../pages/events/events/events.component';
import { EventsFormComponent } from './../pages/events/events-form/events-form.component';
import { ParksComponent } from './../pages/parks/parks/parks.component';
import { ParksFormComponent } from './../pages/parks/parks-form/parks-form.component';
import { NearByComponent } from './../pages/nearby/nearby.component';
import { AnnouncementsComponent } from './../pages/announcements/announcements/announcements.component';
import { AnnouncementsFormComponent } from './../pages/announcements/announcements-form/announcements-form.component';
import { RightMenuComponent } from '../right-menu/right-menu.component';
import { AlbumComponent } from './../pages/album/album/album.component';
import { AlbumFormComponent } from './../pages/album/album-form/album-form.component';
import { FriendsComponent } from './../pages/friends/friends.component';
import { PublishArticleComponent } from './../pages/publish-article/publish-article.component';
import { ChatComponent } from './../pages/chat/chat.component';
import { GroupsComponent } from './../pages/groups/groups.component';
import { AppointmentsComponent } from './../pages/appointments/appointments.component';
import { BreedersComponent } from './../pages/breeders/breeders/breeders.component';
import { BreedersFormComponent } from './../pages/breeders/breeders-form/breeders-form.component';
import { AdvertisementsComponent } from './../pages/advertisements/advertisements.component';
import { FeedbackComponent } from './../pages/feedback/feedback.component';

@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent,
        FeedsMenuComponent,
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
        BreedersFormComponent,
        AdvertisementsComponent,
        FeedbackComponent,
    ],
    imports: [
        HomeRoutes,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgxLoadingModule,
        ToastrModule,
        BsDatepickerModule.forRoot(),
        TimepickerModule.forRoot()
    ],
    exports: [
        HeaderComponent, 
        FeedsMenuComponent,
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
  