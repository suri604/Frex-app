import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../../services/image.service';

@Component({
  selector: 'app-photolist',
  templateUrl: './photolist.component.html',
  styleUrls: ['./photolist.component.css']
})
export class PhotolistComponent implements OnInit {
  imageList: any;
  rowIndexArray: any[];
  imageslength:any[];
  public photolength:number = 5;
 


  constructor(private service: ImageService) { 
    var alphas:string[]; 
    alphas = ["1","2","3","4"] 
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
  }

}

