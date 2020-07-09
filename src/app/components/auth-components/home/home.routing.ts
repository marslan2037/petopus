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

            { path: 'news-feed', component: NewsFeedComponent },

            { path: 'events', component: EventsComponent },
            { path: 'events/create', component: EventsFormComponent },
            
            { path: 'parks', component: ParksComponent },
            { path: 'parks/create', component: ParksFormComponent },

            { path: 'nearby', component: NearByComponent },

            { path: 'announcements', component: AnnouncementsComponent },
            { path: 'announcements/create', component: AnnouncementsFormComponent },
        ]
    },
];

export const HomeRoutes: ModuleWithProviders = RouterModule.forChild(routes);