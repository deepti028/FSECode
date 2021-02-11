import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material';
import { AuthenticationService } from "../authentication.service";
export const TOKEN_NAME = "jwt_token";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  message: string = 'Enter valid credentials';
  actionButtonLabel: string = 'Retry';
  action: boolean = true;
  setAutoHide: boolean = true;
  autoHide: number = 2000;
  MatSnackBarHorizontalPosition = 'top';
  MatSnackBarVerticalPosition = 'right';

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  pwdFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor(private router: Router, public snackBar: MatSnackBar, private authService: AuthenticationService,
  ) {
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

  login() {
    this.authService.loginUser(this.user).subscribe(data => {
      if (data) {
        console.log("JWTToken", data.body["token"]);
        localStorage.setItem(TOKEN_NAME, data.body["token"]);
        this.snackBar.open(data.body["message"], "", {
          duration: 1000
        });
        this.router.navigate(['/dashboard']);
      }
    },
      error => {
        console.log(error);
        if (error.status === 409) {
          const errorMsg = error.error.message;
          this.snackBar.open(errorMsg, "", {
            duration: 1000

          });
        }
      })
  }

}
