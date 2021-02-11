import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from  '@angular/common/http/testing';
import { AppModule } from 'src/app/app.module';
import { APP_BASE_HREF } from '@angular/common';

import { CmatchesinterceptorService } from './cmatchesinterceptor.service';

describe('CmatchesinterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [AppModule, RouterTestingModule, HttpClientTestingModule],
    declarations: [],
    providers: [CmatchesinterceptorService,
    {provide: APP_BASE_HREF, useValue: '/'}]
  }));

  it('should be created', () => {
    const service: CmatchesinterceptorService = TestBed.get(CmatchesinterceptorService);
    expect(service).toBeTruthy();
  });
});
