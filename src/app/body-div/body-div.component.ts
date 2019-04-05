import { Component, OnInit } from '@angular/core';
import { Modal } from '../modal';
import { Router } from '@angular/router';
import { PictureService } from '../picture.service';

@Component({
  selector: 'body-div',
  templateUrl: './body-div.component.html',
  styleUrls: ['./body-div.component.css'],
  providers: [PictureService]
})
export class BodyDivComponent implements OnInit {
  modals: Modal[];

  constructor(private router: Router, private pictureService: PictureService) { }

  ngOnInit() {
    this.modals = this.pictureService.getModals();
  }



}
