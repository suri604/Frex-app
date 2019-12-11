import { Component, OnInit } from "@angular/core";
import { RegisteruserService } from "./../../services/registeruser.service";

import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validator,
  Validators
} from "@angular/forms";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  profileForm: FormGroup;
  private loginBody2 = {
    eMail: "",
    firstName: "",
    lastName: "",
    password: "",
    phoneNumber: "",
    roles: "ROLE_USER",
    username: ""
  };
  private loginBody;
  err = false;
  constructor(private fb: FormBuilder, private service: RegisteruserService) {}

  ngOnInit() {
    this.profileForm = this.fb.group(
      {
        firstName: ["", Validators.required],
        lastName: [""],
        eMail: ["", [Validators.required, Validators.email]],
        passWord: ["", [Validators.required, Validators.minLength(6)]],
        confirmPassword: ["", Validators.required],
        username: ["", Validators.required],
        phoneNumber: ["", Validators.required]
      },
      {
        validator: this.MustMatch("passWord", "confirmPassword")
      }
    );
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.loginBody = this.profileForm.value;
    console.log(this.loginBody);
    this.loginBody2.eMail = this.loginBody.eMail;
    this.loginBody2.firstName = this.loginBody.firstName;
    this.loginBody2.lastName = this.loginBody.lastName;
    this.loginBody2.username = this.loginBody.username;
    this.loginBody2.phoneNumber = this.loginBody.phoneNumber;
    this.loginBody2.password = this.loginBody.passWord;

    if (this.profileForm.invalid) {
      console.log("invalid submission");
      return;
    }

  //  this.service.registerUser(this.loginBody2).subscribe();

    this.service
      .registerUser(this.loginBody2).subscribe((data:any)=>{
        console.log(data);
      })
      
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControlng  if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
}
