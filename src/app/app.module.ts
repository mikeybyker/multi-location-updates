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
  apiKey: "AIzaSyAFQsGrDWsrcJIghRaOckIs_R4D_mudXOM",
  authDomain: "multi-path.firebaseapp.com",
  databaseURL: "https://multi-path.firebaseio.com",
  storageBucket: "multi-path.appspot.com",
  messagingSenderId: "601546706060"
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
