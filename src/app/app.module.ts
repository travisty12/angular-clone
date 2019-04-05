import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";


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
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
