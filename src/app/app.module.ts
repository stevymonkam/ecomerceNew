import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {  MatInputModule } from "@angular/material/input";
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConfigService } from './service/config/config.service';
import { AuthService } from './service/auth/auth.service';
import { AuthentificationInterceptor } from './security/authentification.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatBadgeModule,
    MatSlideToggleModule,
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    AppRoutingModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    HttpClientModule,
    ConfigService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthentificationInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  exports: [
   
    BrowserAnimationsModule,
    // angular material modules
    MatInputModule,

   
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
