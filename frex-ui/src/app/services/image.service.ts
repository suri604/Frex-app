import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
//import { database } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  imageDetailList: any;
  value: "checking update";
  ref = this.firebase.database.ref('imageDetails');
  key: string;

  constructor(private firebase: AngularFireDatabase) { }


  getImageDetailList() {
   
    this.imageDetailList = this.firebase.list('imageDetails',ref => ref.orderByChild('like'));
    
    // this.ref.on('child_added',(snapshot)=> {
    //   console.log(snapshot.key);
    //   this.key = snapshot.key;
    //   this.ref.child(this.key).update({
    //     caption: 'pdhsf'
    //   })
    // })
    return this.imageDetailList;
    

    console.log(this.firebase.list('imageDetails'));
    console.log("after image list erro");

  }
  increaselikes(key,prelike)
  {
    this.ref = this.firebase.database.ref('imageDetails');
    this.ref.child(key).update({
        like: prelike+1
      })

  }
  decreaselikes(key,prelike)
  {
    this.ref = this.firebase.database.ref('imageDetails');
    this.ref.child(key).update({
      like: prelike-1
    })
  }

  insertImageDetails(imageDetails) {
    console.log("insert error");
    this.imageDetailList.push(imageDetails);
    console.log("insent image details ");
  }
  // updateItem(key: "caption", value: any): void {
  //   this.imageDetailList.update(key, this.value);
  // }
}