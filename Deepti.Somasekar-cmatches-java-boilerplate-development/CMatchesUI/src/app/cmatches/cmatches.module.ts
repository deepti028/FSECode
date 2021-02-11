import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CMatchesRoutingModule } from './cmatches-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { FormControl, Validators} from '@angular/forms';
import { CmatchesService } from '../cmatches/cmatches.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatCardModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatButtonModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatBottomSheetModule,
  MatDialogModule
} from '@angular/material';
import { NewMatchComponent } from './new-match/new-match.component';
import { OldMatchComponent } from './old-match/old-match.component';
import { NewMatchDetailsComponent } from './new-match-details/new-match-details.component';
import { ScoreComponent } from './score/score.component';
import { SquadComponent } from './squad/squad.component';
import { SummaryComponent } from './summary/summary.component';
import { StatisticsComponent } from './statistics/statistics.component';
// import { DialogComponent } from './dialog/dialog.component';
import { CmatchesinterceptorService } from '../cmatches/cmatchesinterceptor.service';
import { DashboardService } from 'src/app/cmatches/dashboard/services/dashboard.service';
import { FavouritesComponent } from './favourites/favourites.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [DashboardComponent, HeaderComponent, FooterComponent, NewMatchComponent, OldMatchComponent, NewMatchDetailsComponent, ScoreComponent, SquadComponent, SummaryComponent, StatisticsComponent, FavouritesComponent, CardComponent],
  imports: [
    CommonModule,
    CMatchesRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatBottomSheetModule,
    MatDialogModule
  ],
  exports: [
    HeaderComponent,FooterComponent
],
})
export class CMatchesModule { }
