import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { User } from '../../user';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-profile-details-form',
  templateUrl: './user-profile-details-form.component.html',
  styleUrls: ['./user-profile-details-form.component.css'],

})
export class UserProfileDetailsFormComponent implements OnInit {

  private userFile;
  selectedFile;
  selectedProof;
  date: any;
  envUrl = environment.userProfileUrl;
  url: any = '';
  userId;
  url1: any = '';
  user: User = new User();
  constructor(private userservice: UserServiceService, private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.userId = params.id;
        this.userservice.view(this.userId).toPromise().then(
          result => {
            this.user = result
          }
        )
      })
  }

  demoMethod(user: User) {
    console.log('ghfdsgfjhskdjfhsdkj',user)
    this.userservice.update(user).subscribe(
      data => {
        const updatedUser = data as User;
        console.log(updatedUser);
      }
    );
  }


  public fileuploads(event) {
    const file = event.target.files[0];
    this.userFile = file;
    console.log(this.userFile);
  }

  public onSelectFile(event) {
    this.selectedFile = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      let formData = new FormData();
      formData.append("file", this.selectedFile);
      console.log(this.selectedFile);
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);
      // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = reader.result;


        return this.userservice.uploadProfilePic(formData).subscribe();

      }
    }

  }

  public onSelectProof(event) {
    this.selectedProof = event.target.files[0];
    if (event.target.files && event.target.files[0]) {

      let formData = new FormData();
      formData.append("file", this.selectedProof);
      console.log(this.selectedProof);
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url1 = reader.result;
        return this.userservice.uploadGovtPic(formData).subscribe();
      }
    }

  }
  public delete() {
    this.url = null;
  }

  submitForm() {
    console.log(this.user, "Inside Submit");
    this.demoMethod(this.user);
    this.router.navigate(['details/' + this.user.userName]);
  }
}
