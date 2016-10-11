import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  AngularFireModule,
  AuthProviders,
  AuthMethods,
  firebaseAuthConfig
} from 'angularfire2';
import * as firebase from 'firebase';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyDDKS0MOYvCywMR3o-2DdbhyjKbSdmsUbM",
  authDomain: "multi-location-updates.firebaseapp.com",
  databaseURL: "https://multi-location-updates.firebaseio.com",
  storageBucket: "multi-location-updates.appspot.com",
  messagingSenderId: "114444710995"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
