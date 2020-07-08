import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './../about/about.component';

const routes: Routes = [

    {
        path: '',
        component: HomeComponent,

        children: [
            // { path: '', component: ViewInventoryNewComponent },
            { path: 'about', component: AboutComponent },
        ]
    },
];

export const HomeRoutes: ModuleWithProviders = RouterModule.forChild(routes);