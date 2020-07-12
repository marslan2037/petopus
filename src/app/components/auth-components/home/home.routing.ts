import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './../pages/about/about.component';
import { ServicesComponent } from './../pages/services/services/services.component';
import { ServicesFormComponent } from './../pages/services/services-form/services-form.component';
import { NewsFeedComponent } from './../pages/news-feed/news-feed.component';
import { AlertsComponent } from './../pages/alerts/alerts/alerts.component';
import { AlertsFormComponent } from './../pages/alerts/alerts-form/alerts-form.component';
import { EventsComponent } from './../pages/events/events/events.component';
import { EventsFormComponent } from './../pages/events/events-form/events-form.component';
import { ParksComponent } from './../pages/parks/parks/parks.component';
import { ParksFormComponent } from './../pages/parks/parks-form/parks-form.component';
import { NearByComponent } from './../pages/nearby/nearby.component';
import { AnnouncementsComponent } from './../pages/announcements/announcements/announcements.component';
import { AnnouncementsFormComponent } from './../pages/announcements/announcements-form/announcements-form.component';
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
            { path: 'breeders/create', component: BreedersFormComponent },
            
            { path: 'advirtisement', component: AdvertisementsComponent },
            { path: 'feedback', component: FeedbackComponent },
            { path: 'publish-articles', component: PublishArticleComponent },
        ]
    },
];

export const HomeRoutes: ModuleWithProviders = RouterModule.forChild(routes);