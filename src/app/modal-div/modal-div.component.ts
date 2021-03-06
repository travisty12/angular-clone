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
  id: number;
  modalToDisplay: any;
  items: string[];
  source: string;
  overlay: string;
  usage: string;
  description: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private pictureService: PictureService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.id = parseInt(urlParameters['id']);
    });
    this.pictureService.getModalsByFilename(this.id).subscribe(modal => {
      this.modalToDisplay = modal;
      this.items = this.modalToDisplay.resources;
      this.source = this.modalToDisplay.source;
      this.description = this.modalToDisplay.description;
      this.usage = this.modalToDisplay.usage;
      this.overlay = this.modalToDisplay.overlay;
    });
  }

}
