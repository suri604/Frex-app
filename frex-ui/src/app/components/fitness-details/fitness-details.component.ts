import { Component, OnInit } from '@angular/core';
import {DisplayService} from '../../services/display.service';

@Component({
  selector: 'app-fitness-details',
  templateUrl: './fitness-details.component.html',
  styleUrls: ['./fitness-details.component.css']
})
export class FitnessDetailsComponent implements OnInit {

  constructor(
    private displayService: DisplayService
  ) { }

  ngOnInit() {
    this.displayService.changeNavBarState(false);
  }
}
