import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from  '@angular/common/http/testing';
import { AppModule } from 'src/app/app.module';
import { APP_BASE_HREF } from '@angular/common';
// import { AuthGuardService } from './auth-guard.service';

import { CmatchesService } from './cmatches.service';

describe('CmatchesService', () => {
   beforeEach(() => TestBed.configureTestingModule({
    imports: [AppModule, RouterTestingModule, HttpClientTestingModule],
    declarations: [],
    providers: [CmatchesService,
    {provide: APP_BASE_HREF, useValue: '/'}]
  }));

  it('should be created', () => {
    const service: CmatchesService = TestBed.get(CmatchesService);
    expect(service).toBeTruthy();
  });
});
