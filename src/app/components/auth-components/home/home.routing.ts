import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './../feeds-menu/about/about.component';
import { ServicesComponent } from './../feeds-menu/services/services/services.component';
import { ServicesFormComponent } from './../feeds-menu/services/services-form/services-form.component';
import { NewsFeedComponent } from './../feeds-menu/news-feed/news-feed.component';
import { AlertsComponent } from './../feeds-menu/alerts/alerts/alerts.component';
import { AlertsFormComponent } from './../feeds-menu/alerts/alerts-form/alerts-form.component';
import { EventsComponent } from './../feeds-menu/events/events/events.component';
import { EventsFormComponent } from './../feeds-menu/events/events-form/events-form.component';
import { ParksComponent } from './../feeds-menu/parks/parks/parks.component';
import { ParksFormComponent } from './../feeds-menu/parks/parks-form/parks-form.component';
import { NearByComponent } from './../feeds-menu/nearby/nearby.component';
import { AnnouncementsComponent } from './../feeds-menu/announcements/announcements/announcements.component';
import { AnnouncementsFormComponent } from './../feeds-menu/announcements/announcements-form/announcements-form.component';
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

const routes: Routes = [

    {
        path: '',
        component: HomeComponent,

        children: [
            { path: '', component: NewsFeedComponent },
            { path: 'about', component: AboutComponent },

            { path: 'services', component: ServicesComponent },
            { path: 'services/create', component: ServicesFormComponent },
            
            { path: 'alerts', component: AlertsComponent },
            { path: 'alerts/create', component: AlertsFormComponent },

            { path: 'announcements', component: AnnouncementsComponent },
            { path: 'announcements/create', component: AnnouncementsFormComponent },

            { path: 'events', component: EventsComponent },
            { path: 'events/create', component: EventsFormComponent },
            
            { path: 'parks', component: ParksComponent },
            { path: 'parks/create', component: ParksFormComponent },
            
            { path: 'album', component: AlbumComponent },
            { path: 'album/create', component: AlbumFormComponent },

            { path: 'news-feed', component: NewsFeedComponent },
            { path: 'nearby', component: NearByComponent },

            { path: 'friends', component: FriendsComponent },
            { path: 'chat', component: ChatComponent },
            { path: 'admin-chat', component: ChatComponent },
            { path: 'groups', component: GroupsComponent },
            { path: 'appointments', component: AppointmentsComponent },
            { path: 'breeders', component: BreedersComponent },
            { path: 'advirtisement', component: AdvertisementsComponent },
            { path: 'feedback', component: FeedbackComponent },
            { path: 'publish-articles', component: PublishArticleComponent },
        ]
    },
];

export const HomeRoutes: ModuleWithProviders = RouterModule.forChild(routes);