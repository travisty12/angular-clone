import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LinkDivComponent } from './link-div/link-div.component';
import { LogoDivComponent } from './logo-div/logo-div.component';
import { BodyDivComponent } from './body-div/body-div.component';
import { AboutDivComponent } from './about-div/about-div.component';
import { JoinDivComponent } from './join-div/join-div.component';
import { FootDivComponent } from './foot-div/foot-div.component';
import { ModalDivComponent } from './modal-div/modal-div.component';


@NgModule({
  declarations: [
    AppComponent,
    LinkDivComponent,
    LogoDivComponent,
    BodyDivComponent,
    AboutDivComponent,
    JoinDivComponent,
    FootDivComponent,
    ModalDivComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
