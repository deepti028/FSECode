// import { TestBed } from '@angular/core/testing';
import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from  '@angular/common/http/testing';
import { AppModule } from 'src/app/app.module';
import { APP_BASE_HREF } from '@angular/common';
import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  let authenticationService: AuthenticationService;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [AppModule, RouterTestingModule, HttpClientTestingModule],
    declarations: [],
    providers: [AuthenticationService,
    {provide: APP_BASE_HREF, useValue: '/'}]
  }));
  

  it('should be created', inject([AuthenticationService], () => {
    authenticationService = TestBed.get(AuthenticationService);
    expect(authenticationService).toBeTruthy();
  }));
});
