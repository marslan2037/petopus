import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './../feeds-menu/about/about.component';
import { ServicesComponent } from './../feeds-menu/services/services.component';
import { NewsFeedComponent } from './../feeds-menu/news-feed/news-feed.component';
import { AlertsComponent } from './../feeds-menu/alerts/alerts.component';
import { EventsComponent } from './../feeds-menu/events/events.component';

const routes: Routes = [

    {
        path: '',
        component: HomeComponent,

        children: [
            { path: '', component: NewsFeedComponent },
            { path: 'about', component: AboutComponent },
            { path: 'services', component: ServicesComponent },
            { path: 'alerts', component: AlertsComponent },
            { path: 'news-feed', component: NewsFeedComponent },
            { path: 'events', component: EventsComponent },
        ]
    },
];

export const HomeRoutes: ModuleWithProviders = RouterModule.forChild(routes);