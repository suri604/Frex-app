import { Component, OnInit } from '@angular/core';
import { CleanIndiaService } from 'src/app/services/clean-india.service';

@Component({
  selector: 'app-clean-image',
  templateUrl: './clean-image.component.html',
  styleUrls: ['./clean-image.component.css']
})
export class CleanImageComponent implements OnInit {

  imageList: any[];
  rowIndexArray: any[];

  constructor(private service: CleanIndiaService) { }

  ngOnInit() {
    this.service.imageDetailList.snapshotChanges().subscribe(
      list => {
        this.imageList = list.map(item => { return item.payload.val(); });
        this.rowIndexArray =  Array.from(Array(Math.ceil(this.imageList.length)).keys());
      }
    );
    }
}
