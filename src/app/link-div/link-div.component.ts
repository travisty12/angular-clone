import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'link-div',
  templateUrl: './link-div.component.html',
  styleUrls: ['./link-div.component.css']
})
export class LinkDivComponent implements OnInit {
  width;
  wideEnough;
  constructor() { }

  ngOnInit() {
  }

  onResize(event) {
    this.width = event.target.innerWidth;
    if (this.width > 900) {
      this.wideEnough = true;
    } else {
      this.wideEnough = false;
    }
  }
}
