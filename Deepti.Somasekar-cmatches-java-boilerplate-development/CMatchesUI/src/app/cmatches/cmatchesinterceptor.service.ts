import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { HttpEvent } from '@angular/common/http';
import { AuthenticationService } from '../authentication/authentication.service';
import { HttpErrorService } from '../http-error.service';
@Injectable({
  providedIn: 'root'
})
export class CmatchesinterceptorService implements HttpInterceptor {

  apiKey: string;
  constructor(private auth: AuthenticationService, private errorService: HttpErrorService) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Inside interceptor");
    if (!req.url.includes("cricapi.com")) {
      console.log('header', this.auth.getToken());
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.auth.getToken()}`
        }
      });
    }

    return next.handle(req).pipe(catchError((err) => this.handleError(err)));
  }

  handleError(error: any) {
    this.errorService.showError(error);
    return throwError(error);
  }
}
