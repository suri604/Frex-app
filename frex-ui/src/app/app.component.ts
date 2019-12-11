import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {DisplayService} from './services/display.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  public clickedEvent: boolean;
  displayNavBar = true;
  opacity=0;
  message=0;
  constructor(private displayService: DisplayService) {
  }
  ngOnInit(): void {
    this.displayService.currentNavBarState.subscribe(
      (state: boolean) => {
        this.displayNavBar = state;
      });
  }

   childEventClicked(logged: boolean) {
    this.clickedEvent = logged;
    console.log('event clicked');
  }

  
  
  receiveMessage($event){
    this.message=$event;
    // console.log(this.message);
}
  
   
}
