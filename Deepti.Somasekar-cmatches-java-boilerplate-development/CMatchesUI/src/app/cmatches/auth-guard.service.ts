import { Injectable } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private auth: AuthenticationService, private router: Router) { }

  canActivate(){
    if (this.auth.isTokenAlive()) {
      console.log('In CanActivate');
      return true;
    }
    this.router.navigate(['/login']);
    return false;

  }
}
