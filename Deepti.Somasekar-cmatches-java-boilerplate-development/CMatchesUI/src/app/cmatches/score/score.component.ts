import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard/services/dashboard.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { DashboardModel } from '../dashboard/model/dashboard.model';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { SquadComponent } from '../squad/squad.component';
import { SummaryComponent } from '../summary/summary.component';
import { CmatchesService } from '../cmatches.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  dashboardModel: DashboardModel;

  constructor(private router: Router, private route: ActivatedRoute, private cmatchesService: CmatchesService, private _bottomSheet: MatBottomSheet) {
    this.dashboardModel = new DashboardModel();
  }

  ngOnInit() {
    this.getMatchDetailsInfo();
  }

  getMatchDetailsInfo() {
    this.dashboardModel.apiKeyVal = 'AK69qyrbd9VR0nbvEcTo1y8muEU2';
    this.dashboardModel.id = '1034809';
    this.cmatchesService.getScoreDetails(this.dashboardModel.apiKeyVal, this.dashboardModel.id).subscribe((val: any) => {
      this.dashboardModel.scoreDetails = val;
    }, error => {
      console.log('error');
    })
  }


  openSummary(): void {
    this._bottomSheet.open(SummaryComponent);
  }
  openSquad() {
    this.router.navigateByUrl('squad/' + 1034809);

  }
}
