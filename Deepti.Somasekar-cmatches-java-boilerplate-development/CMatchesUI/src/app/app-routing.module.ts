import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { DashboardComponent } from './cmatches/dashboard/dashboard.component';
import { RegisterComponent } from './authentication/register/register.component';
import { NewMatchComponent } from './cmatches/new-match/new-match.component';
import { OldMatchComponent } from './cmatches/old-match/old-match.component';
import { NewMatchDetailsComponent } from './cmatches/new-match-details/new-match-details.component';
import { ScoreComponent } from './cmatches/score/score.component';
import { SquadComponent } from './cmatches/squad/squad.component';
import { SummaryComponent } from './cmatches/summary/summary.component';
import {StatisticsComponent} from './cmatches/statistics/statistics.component';
import { FavouritesComponent } from './cmatches/favourites/favourites.component';
const routes: Routes = [{
  path: '',
  component: LoginComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'dashboard',
  component: DashboardComponent
},
{
  path: 'register',
  component: RegisterComponent
},
{
  path: 'new',
  component: NewMatchComponent
},
{
  path: 'old',
  component: OldMatchComponent
},
{
  path: 'newDetails/:id',
  component: NewMatchDetailsComponent
},
{
  path: 'score',
  component: ScoreComponent
},
{
  path: 'squad/:id',
  component: SquadComponent
},
{
  path: 'summary',
  component: SummaryComponent
},
{
  path: 'statistics/:id',
  component: StatisticsComponent
},
{
  path: 'favourites',
  component: FavouritesComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
