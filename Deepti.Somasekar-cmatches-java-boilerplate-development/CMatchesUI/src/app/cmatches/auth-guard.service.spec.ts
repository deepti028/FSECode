import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from  '@angular/common/http/testing';
import { AppModule } from 'src/app/app.module';
import { APP_BASE_HREF } from '@angular/common';
import { AuthGuardService } from './auth-guard.service';

describe('AuthGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [AppModule, RouterTestingModule, HttpClientTestingModule],
    declarations: [],
    providers: [AuthGuardService,
    {provide: APP_BASE_HREF, useValue: '/'}]
  }));

  it('should be created', inject([AuthGuardService], () => {
    const service: AuthGuardService = TestBed.get(AuthGuardService);
    expect(service).toBeTruthy();
  }));
});
