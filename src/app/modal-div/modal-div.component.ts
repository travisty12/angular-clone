import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Modal } from '../modal';
import { PictureService } from '../picture.service';

@Component({
  selector: 'app-modal-div',
  templateUrl: './modal-div.component.html',
  styleUrls: ['./modal-div.component.css'],
  providers: [PictureService]
})
export class ModalDivComponent implements OnInit {
  source: string;
  modalToDisplay: Modal;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private pictureService: PictureService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.source = urlParameters['source'];
    });
    this.modalToDisplay = this.pictureService.getModalsByFilename(this.source);
  }

}
