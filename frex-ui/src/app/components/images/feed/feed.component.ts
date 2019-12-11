import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../../services/image.service';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  imageList;
  rowIndexArray: any[];
  imageslength:any[];
  public photolength:number = 5;
  name: string;
  _db:any;
  likestatus: boolean=false;
  
 


  constructor(private service: ImageService, db: AngularFireDatabase) { 
    // this.likestatus=false;

  }

  ngOnInit() {
    console.log("before sending ");
    this.service.imageDetailList.snapshotChanges().subscribe(
      list => {
        console.log("before sending ");
        this.imageList = list.map(item => { 
          const post = item.payload.val();
          post.key = item.key;
          return post; 
        });
        this.photolength=this.imageList.length;
        this.rowIndexArray =  Array.from(Array(Math.ceil((this.imageList.length+1) / 3)).keys());
        this.imageslength=Array(this.imageList.length);
        console.log("after sending ");
        console.log(this.photolength);
      }
    );
    this.imageList = this.service.getImageDetailList();
  }

  like(key,like)
  { console.log(this.likestatus);
    if(this.likestatus==true)
    {
      
      this.service.decreaselikes(key,like);
      this.likestatus=false;
    }
    else if(this.likestatus==false)
    {
      this.service.increaselikes(key,like);
      this.likestatus=true;
    }

    }
  }
  


