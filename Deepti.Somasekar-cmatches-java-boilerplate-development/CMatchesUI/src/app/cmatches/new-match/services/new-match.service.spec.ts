// import { TestBed } from '@angular/core/testing';s
import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from  '@angular/common/http/testing';
import { AppModule } from 'src/app/app.module';
import { APP_BASE_HREF } from '@angular/common';
import { NewMatchService } from './new-match.service';

describe('NewMatchService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [AppModule, RouterTestingModule, HttpClientTestingModule],
    declarations: [],
    providers: [NewMatchService,
    {provide: APP_BASE_HREF, useValue: '/'}]
  }));

  it('should be created', () => {
    const service: NewMatchService = TestBed.get(NewMatchService);
    expect(service).toBeTruthy();
  });
});
