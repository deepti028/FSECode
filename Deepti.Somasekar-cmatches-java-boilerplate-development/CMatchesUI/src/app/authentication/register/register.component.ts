import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from "../authentication.service";
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  message: string = 'Enter valid credentials';
  validMsg: string = 'Successfully Registered';
  actionButtonLabel: string = 'Retry';
  action: boolean = true;
  setAutoHide: boolean = true;
  autoHide: number = 2000;
  horizontalposition: MatSnackBarHorizontalPosition = 'right';
  verticalposition: MatSnackBarVerticalPosition = 'top';

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  pwdFormControl = new FormControl('', [
    Validators.required
  ]);

  nameFormControl = new FormControl('', [
    Validators.required
  ]);
  user: User;

  constructor(private router: Router, public snackBar: MatSnackBar, private authService: AuthenticationService) {
    this.user = new User();
  }

  ngOnInit() {
  }

  getEmailErrorMessage() {
    return this.emailFormControl.hasError('required') ? 'You must enter a value' :
      this.emailFormControl.hasError('email') ? 'Not a valid email' : '';
  }

  getPwdErrorMessage() {
    return this.pwdFormControl.hasError('required') ? 'You must enter a value' : '';
  }

  getNameErrorMessage() {
    return this.nameFormControl.hasError('required') ? 'You must enter a value' : '';
  }

  register() {
    this.authService.registerUser(this.user).subscribe(
      data => {
        if (data.status === 201) {
          this.snackBar.open(data.body["message"], " ", {
            duration: 1000
          });
        }
        this.router.navigate(["/login"]);
      },
      error => {
        if (error.status === 409) {
          const errorMsg = error.error.message;
          this.snackBar.open(errorMsg, "", {
            duration: 3000
          });
        }
      });
  }
}
