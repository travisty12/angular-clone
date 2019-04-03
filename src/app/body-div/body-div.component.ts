import { Component, OnInit } from '@angular/core';
import { Modal } from './modal';
import { MODALS } from './mock-modals';

@Component({
  selector: 'body-div',
  templateUrl: './body-div.component.html',
  styleUrls: ['./body-div.component.css']
})
export class BodyDivComponent implements OnInit {
  modalList = MODALS;
  constructor() { }

  ngOnInit() {
  }

}
