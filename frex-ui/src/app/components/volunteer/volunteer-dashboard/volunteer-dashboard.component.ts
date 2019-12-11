import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-volunteer-dashboard',
  templateUrl: './volunteer-dashboard.component.html',
  styleUrls: ['./volunteer-dashboard.component.css']
})
export class VolunteerDashboardComponent implements OnInit {

  // constructor() { }

  // ngOnInit() {
  // }


  @Output() navigatedChange = new EventEmitter();
  @Input() navigated: boolean;
  @Input() isSmall: boolean;

  constructor() {
  }

  ngOnInit() {

  }

  navigate() {
    this.navigatedChange.emit(false);
  }

}
