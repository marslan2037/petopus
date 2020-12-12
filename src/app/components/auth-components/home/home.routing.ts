import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './../pages/about/about.component';
import { ProfessionalsComponent } from './../pages/professionals/professionals.component';
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
import { PetsComponent } from './../pages/pets/pet/pet.component';
import { PetFormComponent } from './../pages/pets/pet-form/pet-form.component';
import { AuthService } from './../../../services/auth-services/auth-services.service';

const routes: Routes = [

    {
        path: '',
        component: HomeComponent,

        children: [
            { path: '', component: NewsFeedComponent, canActivate: [AuthService] },
            { path: 'about', component: AboutComponent, canActivate: [AuthService] },
            { path: 'professionals', component: ProfessionalsComponent, canActivate: [AuthService] },

            { path: 'pets', component: PetsComponent, canActivate: [AuthService] },
            { path: 'pets/create', component: PetFormComponent, canActivate: [AuthService] },

            { path: 'services', component: ServicesComponent, canActivate: [AuthService] },
            { path: 'services/create', component: ServicesFormComponent, canActivate: [AuthService] },
            
            { path: 'alerts', component: AlertsComponent, canActivate: [AuthService] },
            { path: 'alerts/create', component: AlertsFormComponent, canActivate: [AuthService] },

            { path: 'announcements', component: AnnouncementsComponent, canActivate: [AuthService] },
            { path: 'announcements/create', component: AnnouncementsFormComponent, canActivate: [AuthService] },

            { path: 'events', component: EventsComponent, canActivate: [AuthService] },
            { path: 'events/create', component: EventsFormComponent, canActivate: [AuthService] },
            
            { path: 'parks', component: ParksComponent, canActivate: [AuthService] },
            { path: 'parks/create', component: ParksFormComponent, canActivate: [AuthService] },
            
            { path: 'album', component: AlbumComponent, canActivate: [AuthService] },
            { path: 'album/create', component: AlbumFormComponent, canActivate: [AuthService] },

            { path: 'news-feed', component: NewsFeedComponent, canActivate: [AuthService] },
            { path: 'nearby', component: NearByComponent, canActivate: [AuthService] },

            { path: 'friends', component: FriendsComponent, canActivate: [AuthService] },
            { path: 'chat', component: ChatComponent, canActivate: [AuthService] },
            { path: 'admin-chat', component: ChatComponent, canActivate: [AuthService] },
            { path: 'groups', component: GroupsComponent, canActivate: [AuthService] },
            { path: 'appointments', component: AppointmentsComponent, canActivate: [AuthService] },

            { path: 'breeders', component: BreedersComponent, canActivate: [AuthService] },
            { path: 'breeders/create', component: BreedersFormComponent, canActivate: [AuthService] },
            
            { path: 'advirtisement', component: AdvertisementsComponent, canActivate: [AuthService] },
            { path: 'feedback', component: FeedbackComponent, canActivate: [AuthService] },
            { path: 'publish-articles', component: PublishArticleComponent, canActivate: [AuthService] },
        ]
    },
];

export const HomeRoutes: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);