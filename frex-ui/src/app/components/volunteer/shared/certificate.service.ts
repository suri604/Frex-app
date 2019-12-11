// import { Injectable } from '@angular/core';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class CertificateService {
//
//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import 'rxjs/add/operator/switchMap';


@Injectable({
  providedIn: 'root'
})
export class CertificateService {
  certificateDetailList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getCertificateDetailList() {
    this.certificateDetailList = this.firebase.list('certificateDetails');
  }

  insertCertificateDetails(certificateDetails) {
    this.certificateDetailList.push(certificateDetails);
  }



}
