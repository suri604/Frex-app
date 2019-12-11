import { async } from "@angular/core/testing";
import { LoginServiceService } from "./../../services/login-service.service";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";

import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validator,
  Validators
} from "@angular/forms";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  gradientForm: FormGroup;

  @Output() eventClicked = new EventEmitter<boolean>();

  constructor(
    private fb: FormBuilder,
    private service: LoginServiceService,
    private router: Router
  ) {}
  public body = {
    username: "",
    password: ""
  };
  logged = false;
  notlogged = true;
  private token;
  private username;
  

  public profile = {
    eMail: "",
    firstName: "",
    lastName: "",

    phoneNumber: "",

    username: "23"
  };
   err = false;
  ngOnInit() {
    this.gradientForm = this.fb.group({
      gradientFormEmailEx: ["", Validators.required],
      gradientFormPasswordEx: ["", Validators.required]
    });
  }

  onlogin() {
    console.log("onlogin");
    if (this.gradientForm.invalid) {
      console.log("invalid submission");
      return;
    }

    this.authenticate(
      this.gradientForm.value.gradientFormEmailEx,
      this.gradientForm.value.gradientFormPasswordEx
    );
  }

  async authenticate(name, pass) {
    this.body.username = name;

    
    this.body.password = pass;
    await this.service
      .authenticateUser(this.body)
      .toPromise()
      .then(async (data: any) => {
        console.log(data.token);
        this.token = data.token;
        console.log(atob(this.token.split(".")[1]));
        await this.service
          .getdetails(name)
          .toPromise()
          .then((data2: any) => {
            this.profile.eMail = data2.eMail;
            this.profile.firstName = data2.firstName;
            this.profile.lastName = data2.lastName;
            this.profile.phoneNumber = data2.phoneNumber;
            this.profile.username = data2.username;
            console.log(data2.username);
            console.log(this.profile);
          });
        this.err = false;
      })
      .catch(error => {
        console.log("in error" + error);
        this.err = true;
      });
    // () => {
    if (!this.err) {
      this.logged = true;
      this.notlogged = false;
      const key = "username";
      this.username = name;

      localStorage.setItem(key, this.username);
      console.log(this.profile);
      localStorage.setItem("newUser", JSON.stringify(this.profile));
      window.location.href = "http://localhost:4200/fitness";
    }

  }
}
