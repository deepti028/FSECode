import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from  '@angular/common/http/testing';
import { AppModule } from 'src/app/app.module';
import { APP_BASE_HREF } from '@angular/common';
// import { AuthenticationService } from './authentication.service';
import { DashboardService } from './dashboard.service';

describe('DashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [AppModule, RouterTestingModule, HttpClientTestingModule],
    declarations: [],
    providers: [DashboardService,
    {provide: APP_BASE_HREF, useValue: '/'}]
  }));

  it('should be created', () => {
    const service: DashboardService = TestBed.get(DashboardService);
    expect(service).toBeTruthy();
  });
});

