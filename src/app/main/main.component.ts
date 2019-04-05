import { Component, OnInit } from '@angular/core';
import { LinkDivComponent } from '../link-div/link-div.component';
import { LogoDivComponent } from '../logo-div/logo-div.component';
import { BodyDivComponent } from '../body-div/body-div.component';
import { AboutDivComponent } from '../about-div/about-div.component';
import { JoinDivComponent } from '../join-div/join-div.component';
import { FootDivComponent } from '../foot-div/foot-div.component';
import { ModalDivComponent } from '../modal-div/modal-div.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
