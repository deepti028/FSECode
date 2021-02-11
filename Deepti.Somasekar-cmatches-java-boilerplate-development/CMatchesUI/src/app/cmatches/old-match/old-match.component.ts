import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { NewMatchService } from '../new-match/services/new-match.service';
import { DashboardModel } from '../dashboard/model/dashboard.model';
import { DashboardService } from '../dashboard/services/dashboard.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CmatchesService } from '../cmatches.service';

@Component({
  selector: 'app-old-match',
  templateUrl: './old-match.component.html',
  styleUrls: ['./old-match.component.css']
})
export class OldMatchComponent implements OnInit {

  dashboardModel: DashboardModel

  displayedColumns: string[] = ['id', 'description'];
  dataSource;
  arrData: any;
  finalvalues: any
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private cmatchesService: CmatchesService, private router: Router, private route: ActivatedRoute) { 
    this.dashboardModel = new DashboardModel();
  }

  ngOnInit() {
   this.getOldMatchInfo()
  }
  getOldMatchInfo() {
    this.dashboardModel.apiKeyVal = 'AK69qyrbd9VR0nbvEcTo1y8muEU2';
    this.cmatchesService.getOldMatchDetails(this.dashboardModel.apiKeyVal).subscribe((val: any) => {
    this.dashboardModel.oldDetails = val.data;
    this.dataSource = new MatTableDataSource(this.dashboardModel.oldDetails);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    }, error => {
      console.log('error');
    })
  }

}
