import { Component, OnInit } from '@angular/core';
import { Modal } from './modal.ts';
import { MODALS } from './mock-modals.ts';

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
