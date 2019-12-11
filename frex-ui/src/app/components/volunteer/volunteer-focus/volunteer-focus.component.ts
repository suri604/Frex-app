import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-volunteer-focus',
  templateUrl: './volunteer-focus.component.html',
  styleUrls: ['./volunteer-focus.component.css']
})
export class VolunteerFocusComponent implements OnInit {
  @Input() navigated: boolean;
  @Output() navigatedChange = new EventEmitter();

  actitivites = [
    {
      img: '../../../assets/jogging.png',
      title: 'Public Health'
    },
    {
      img: '../../../assets/biking.png',
      title: 'Political and Historical'
    },
    {
      img: '../../../assets/others.png',
      title: 'Children Elderly and Disabled'
    },
    {
      img: '../../../assets/others.png',
      title: 'Training Research and Environment'
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
