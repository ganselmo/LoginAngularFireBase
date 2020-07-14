import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { environment } from 'src/environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule,BUCKET} from "@angular/fire/storage";

import { SendEmailComponent } from './auth/send-email/send-email.component';
import { AuthService } from './auth/services/auth.service';


import { CanEditGuard } from './auth/guards/can-edit.guard';
import { CanAdminGuard } from './auth/guards/can-admin.guard';
import { CanSuscriptorGuard } from './auth/guards/can-suscriptor.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SendEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule

  ],
  providers: [AuthService,CanEditGuard,CanAdminGuard,CanSuscriptorGuard,
  {provide: BUCKET, useValue:'gs://login-ng-3dc2f.appspot.com/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
