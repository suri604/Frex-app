import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-environment-dashboard-profile',
  templateUrl: './environment-dashboard-profile.component.html',
  styleUrls: ['./environment-dashboard-profile.component.css']
})
export class EnvironmentDashboardProfileComponent implements OnInit {

  @Input() navigated: boolean;
  @Output() navigatedChange = new EventEmitter();

  actitivites = [
    {
      img: '../../../assets/thumbnailEnv.jpg',
      title: 'Public Transport'
    },
    {
      img: '../../../assets/Swachh.jpg',
      title: 'Clean India'
    },
    // {
    //   img: '../../../assets/others.png',
    //   title: 'Other'
    // }
  ];
  actions = [

    {
      color: '#fce4ec',
      img: '../../../assets/envrewards.svg',
      title: 'Rewards'
    },
    {
      color: '#ede7f6',
      img: '../../../assets/envcommunity.svg',
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
