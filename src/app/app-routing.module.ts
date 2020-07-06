import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/local-components/register/register.component';
import { LoginComponent } from './components/local-components/login/login.component';
import { AuthService } from './services/auth-services/auth-services.service';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', loadChildren: () => import('./components/auth-components/home/home.module').then(m => m.HomeModule), canActivate: [AuthService] },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
