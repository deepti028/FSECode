import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { NewMatchService } from '../new-match/services/new-match.service';
import { DashboardModel } from '../dashboard/model/dashboard.model';
import { DashboardService } from '../dashboard/services/dashboard.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { StatisticsComponent } from '../statistics/statistics.component';
import { SummaryComponent } from '../summary/summary.component';
import { CmatchesService } from '../cmatches.service';

@Component({
  selector: 'app-squad',
  templateUrl: './squad.component.html',
  styleUrls: ['./squad.component.css']
})
export class SquadComponent implements OnInit {

  dashboardModel: DashboardModel

  displayedColumns: string[] = ['pid', 'name', 'view'];
  dataSource;
  arrData: any;
  finalvalues: any
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private cmatchesService: CmatchesService, private router: Router, private route: ActivatedRoute, private _bottomSheet: MatBottomSheet) {
    this.dashboardModel = new DashboardModel();

    this.route.params.subscribe((params: Params) => {
      this.dashboardModel.id = params['id'];

    });
  }

  ngOnInit() {
    this.getSquadMatchInfo()
  }
  getSquadMatchInfo() {
    this.dashboardModel.apiKeyVal = 'AK69qyrbd9VR0nbvEcTo1y8muEU2';
    this.cmatchesService.getSquadDetails(this.dashboardModel.apiKeyVal, this.dashboardModel.id).subscribe((val: any) => {
      this.dashboardModel.playersInfo = [];
      this.dashboardModel.pid = [];
      val.squad.forEach(element => {
        this.dashboardModel.playersInfo.push(...element.players);
      });

      this.dataSource = new MatTableDataSource(this.dashboardModel.playersInfo);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, error => {
      console.log('error');
    })
  }

  openSummary(): void {
    this._bottomSheet.open(SummaryComponent);
  }

  onClick(row) {
    const pid: string = row.pid;
    this.router.navigate(['statistics', pid])

  }

}
