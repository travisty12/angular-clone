import { Component, OnInit } from '@angular/core';
import { PictureService } from '../picture.service';

@Component({
  selector: 'body-div',
  templateUrl: './body-div.component.html',
  styleUrls: ['./body-div.component.css'],
  providers: [PictureService]
})
export class BodyDivComponent implements OnInit {
  // modalList = MODALS;
  constructor(private pictureService: PictureService) { }

  ngOnInit() {
  }

}
