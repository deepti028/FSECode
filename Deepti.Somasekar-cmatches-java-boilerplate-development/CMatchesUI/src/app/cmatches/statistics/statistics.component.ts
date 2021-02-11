import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard/services/dashboard.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { DashboardModel } from '../dashboard/model/dashboard.model';
import { MatchDetails } from '../dashboard/model/match';
import { DataSource } from '@angular/cdk/collections';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {Location} from '@angular/common';
import { CmatchesService } from '../cmatches.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  dashboardModel: DashboardModel;
  playerDetails: any;

  constructor(private router: Router, private route: ActivatedRoute, private cmatchesService: CmatchesService, private location: Location) { 
    this.dashboardModel = new DashboardModel();
    this.route.params.subscribe((params: Params) => {
      this.dashboardModel.pid = params['id'];
    });
  }

  ngOnInit() {
    this.getStatisticsDetailsInfo();
  }

  getStatisticsDetailsInfo() {
    this.dashboardModel.apiKeyVal = 'AK69qyrbd9VR0nbvEcTo1y8muEU2';
    this.cmatchesService.getStatisticDetails(this.dashboardModel.apiKeyVal, this.dashboardModel.pid).subscribe((val: any) => {
    this.playerDetails = val;
    }, error => {
      console.log('error');
    })
  }

  backClicked() {
    this.location.back();
  }

}
