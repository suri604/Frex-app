import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../user';
import { UserServiceService } from '../../services/user-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from "@angular/router";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-profile-update-form',
  templateUrl: './user-profile-update-form.component.html',
  styleUrls: ['./user-profile-update-form.component.css'],
  providers: [DatePipe]
})
export class UserProfileUpdateFormComponent implements OnInit {

  userId: string;
  user = new User();
  date: string;
  value :string;

  constructor(private datePipe: DatePipe, private userservice: UserServiceService, private router: Router, private http: HttpClient,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId= params.id;
      this.demoMethod();
     
    })
  }

  async demoMethod() {
    const username = await this.userservice.view(this.userId).toPromise().then(
      data => {
        this.user = data;
        console.log("data : ", this.user);
        console.log(this.user.userName);
        return this.user.userName;
      }
    ).catch(
      (error) => {
        console.log(error);
        this.router.navigate(['']);
      }
    );
    console.log(username);
    console.log("inside else");
    this.date = this.datePipe.transform(this.user.dateOfBirth, 'dd/MM/yyyy');
    // this.userservice.view(username);
  }

  editForm() {
    console.log(this.userId);
    this.userservice.update(this.user);
    this.router.navigate(['details/update/' + this.user.userName])
  }

  deleteForm() {
    console.log(this.user.userName);
    if(confirm('Do you want to delete your profile?'))
    {
      this.userservice.delete(this.user.userName).subscribe();
      this.router.navigate(['']);
    }
    else {
      alert('Thank God :D')
    }
  }
}
