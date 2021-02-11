import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { DashboardService } from '../dashboard/services/dashboard.service';
import { DashboardModel } from '../dashboard/model/dashboard.model';
import { CmatchesService } from '../cmatches.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashboardModel: DashboardModel

  displayedColumns: string[] = ['name', 'date', 'unique_id'];
  dataSource;
  arrData: any;
  finalvalues: any
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private cmatchesService: CmatchesService) {
    this.dashboardModel = new DashboardModel();
  }

  ngOnInit() {
    this.getCalendarInfo()
  }
  getCalendarInfo() {
    this.dashboardModel.apiKeyVal = 'AK69qyrbd9VR0nbvEcTo1y8muEU2';
    this.cmatchesService.getCalendarDetails(this.dashboardModel.apiKeyVal).subscribe((val: any) => {
      this.dashboardModel.calendarDetails = val.data;
      this.dataSource = new MatTableDataSource(this.dashboardModel.calendarDetails);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, error => {
      console.log('error');
    })
  }
}
