import { Injectable } from '@angular/core';
import { Modal } from './modal';
import { MODALS } from './mock-modals';

@Injectable()
export class PictureService {

  constructor() { }

  getModals() {
    return MODALS;
  }

}
