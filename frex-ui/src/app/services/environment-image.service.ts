import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentImageService {
  imageDetailList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }
  getImageDetailList() {
    this.imageDetailList = this.firebase.list('imageenv');
  }

  insertImageDetails(imageenv) {
    this.imageDetailList.push(imageenv);
  }

}
