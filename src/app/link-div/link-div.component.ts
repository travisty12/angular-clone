import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'link-div',
  templateUrl: './link-div.component.html',
  styleUrls: ['./link-div.component.css']
})
export class LinkDivComponent implements OnInit {
  width;
  wideEnough;
  dropDownClicked;
  constructor() { }

  ngOnInit() {
    this.width = window.innerWidth;
    if (this.width > 900) {
      this.wideEnough = true;
      this.dropDownClicked = false;
    } else {
      this.wideEnough = false;
    }
  }

  onResize(event) {
    this.width = event.target.innerWidth;
    if (this.width > 900) {
      this.wideEnough = true;
      this.dropDownClicked = false;
    } else {
      this.wideEnough = false;
    }
  }
}
