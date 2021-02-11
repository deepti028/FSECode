import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CmatchesService } from './cmatches/cmatches.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatIconModule
} from '@angular/material';
import {CmatchesinterceptorService} from './cmatches/cmatchesinterceptor.service';
import { AuthenticationModule } from '../app/authentication/authentication.module';
import { HttpClientModule } from '@angular/common/http';
import { CMatchesModule } from './cmatches/cmatches.module';
import {DashboardService} from './cmatches/dashboard/services/dashboard.service';
import { NewMatchService } from './cmatches/new-match/services/new-match.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    CMatchesModule,
    HttpClientModule,
    MatIconModule,
    AuthenticationModule
  ],
  providers: [DashboardService, NewMatchService,
    CmatchesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CmatchesinterceptorService,
      multi: true      
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
