import { Component, OnInit } from '@angular/core';
import { EnvironmentTicketService } from 'src/app/services/environment-ticket.service';

@Component({
  selector: 'app-environment-ticket-list',
  templateUrl: './environment-ticket-list.component.html',
  styleUrls: ['./environment-ticket-list.component.css']
})
export class EnvironmentTicketListComponent implements OnInit {

  public ticketList:any;
  constructor(private ticketService: EnvironmentTicketService) {}
   

  ngOnInit() {
    this.ticketService.getAllTickets().subscribe(data=>
      {
        this.ticketList=data;
        console.log(data);
      })
  }

}
