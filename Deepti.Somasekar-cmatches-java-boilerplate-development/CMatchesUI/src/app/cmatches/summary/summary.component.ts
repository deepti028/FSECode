import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { NewMatchService } from '../new-match/services/new-match.service';
import { DashboardModel } from '../dashboard/model/dashboard.model';
import { DashboardService } from '../dashboard/services/dashboard.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CmatchesService } from '../cmatches.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  dashboardModel: DashboardModel

  displayedColumns: string[] = ['pid', 'batsman', 'dismissal-info','R', 'B'];
  dataSource;
  arrData: any;
  finalvalues: any
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private cmatchesService: CmatchesService, private router: Router, private route: ActivatedRoute) { 
    this.dashboardModel = new DashboardModel();
  }

  ngOnInit() {
   this.getSummaryMatchInfo()
  }
  getSummaryMatchInfo() {
    this.dashboardModel.apiKeyVal = 'AK69qyrbd9VR0nbvEcTo1y8muEU2';
    this.dashboardModel.id = '1034809';
    this.cmatchesService.getSummaryDetails(this.dashboardModel.apiKeyVal, this.dashboardModel.id).subscribe((val: any) => {
    this.dashboardModel.summaryData = val;
    this.dashboardModel.summaryInfo = [];
    this.dashboardModel.bowling = [];
    val.data.batting.forEach(element => {
      this.dashboardModel.summaryInfo.push(...element.scores)
    });

    this.dataSource = new MatTableDataSource(this.dashboardModel.summaryInfo);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    }, error => {
      console.log('error');
    })
  }

}
