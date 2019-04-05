import { Injectable } from '@angular/core';
import { Modal } from './modal';
import { MODALS } from './mock-modals';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PictureService {
  pictures: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.pictures = database.list('pictures');
  }

  getModals() {
    return this.pictures;
  }

}
