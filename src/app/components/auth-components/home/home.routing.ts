import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [

    {
        path: '',
        component: HomeComponent,

        children: [
            // { path: '', component: ViewInventoryNewComponent },
        ]
    },
];

export const HomeRoutes: ModuleWithProviders = RouterModule.forChild(routes);