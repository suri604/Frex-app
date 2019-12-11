import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-fitness-focus',
  templateUrl: './fitness-focus.component.html',
  styleUrls: ['./fitness-focus.component.css']
})
export class FitnessFocusComponent implements OnInit {
  @Input() navigated: boolean;
  @Output() navigatedChange = new EventEmitter();

  actitivites = [
    {
      img: '../../../assets/jogging.png',
      title: 'Jogging'
    },
    {
      img: '../../../assets/biking.png',
      title: 'Biking'
    },
    {
      img: '../../../assets/others.png',
      title: 'Other'
    }
  ];
  actions = [

    {
      color: '#fce4ec',
      img: '../../../assets/rewards.svg',
      title: 'Rewards'
    },
    {
      color: '#ede7f6',
      img: '../../../assets/community.svg',
      title: 'Community'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onBackPressed() {
    this.navigatedChange.emit(true);
  }

}
