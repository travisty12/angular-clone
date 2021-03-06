import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { LinkDivComponent } from './link-div/link-div.component';
import { LogoDivComponent } from './logo-div/logo-div.component';
import { BodyDivComponent } from './body-div/body-div.component';
import { AboutDivComponent } from './about-div/about-div.component';
import { JoinDivComponent } from './join-div/join-div.component';
import { FootDivComponent } from './foot-div/foot-div.component';
import { ModalDivComponent } from './modal-div/modal-div.component';
import { MainComponent } from './main/main.component';
import { routing } from './app.routing';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
}

@NgModule({
  declarations: [
    AppComponent,
    LinkDivComponent,
    LogoDivComponent,
    BodyDivComponent,
    AboutDivComponent,
    JoinDivComponent,
    FootDivComponent,
    ModalDivComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
