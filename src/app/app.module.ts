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
    ],
    providers: [LoginService, ApiServicesService, AuthService, ComponentsCommunicationService, {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}],
    bootstrap: [AppComponent]
})
export class AppModule { }
