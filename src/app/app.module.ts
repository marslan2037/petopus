import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TokenInterceptor } from './interceptor/interceptor.service';

import { NgxLoadingModule } from 'ngx-loading';
import { ToastrModule } from 'ngx-toastr';

import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/local-components/register/register.component';
import { LoginComponent } from './components/local-components/login/login.component';
import { LocalHeaderComponent } from './components/local-components/header/header.component';
import { LocalFooterComponent } from './components/local-components/footer/footer.component';

import { ApiServicesService } from './services/api-services/api-services.service';
import { AuthService } from './services/auth-services/auth-services.service';
import { LoginService } from './components/local-components/login/login.service';
import { ComponentsCommunicationService } from './services/component-communications/components-communication.service';
import { ComponentObservable } from './services/compnent-observable/compnent-observable.service';
import { AgmCoreModule } from '@agm/core';
import { GeocodeService } from './services/google-maps-services/google-maps-service';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        LocalHeaderComponent,
        LocalFooterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        NgxLoadingModule.forRoot({}),
        ToastrModule.forRoot(),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBojNd0pQ-_0Or0zSIXtrOOIhUadDcbEZI',
            libraries: ["geometry","places"],
            
        }),

        
    ],
    providers: [LoginService, ApiServicesService, AuthService, ComponentsCommunicationService, ComponentObservable, GeocodeService, {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}],
    bootstrap: [AppComponent]
})
export class AppModule { }
