import { Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { NewMatchService } from '../new-match/services/new-match.service';
import { DashboardModel } from '../dashboard/model/dashboard.model';
import { DashboardService } from '../dashboard/services/dashboard.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CmatchesService } from '../cmatches.service';
@Component({
  selector: 'app-new-match',
  templateUrl: './new-match.component.html',
  styleUrls: ['./new-match.component.css']
})
export class NewMatchComponent implements OnInit {

  dashboardModel: DashboardModel

  displayedColumns: string[] = ['team-1', 'team-2', 'view'];
  dataSource;
  arrData: any;
  finalvalues: any
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private cmatchesservice: CmatchesService, private router: Router, private route: ActivatedRoute) { 
    this.dashboardModel = new DashboardModel();
  }

  ngOnInit() {
   this.getMatchInfo()
  }
  getMatchInfo() {
    this.dashboardModel.apiKeyVal = 'AK69qyrbd9VR0nbvEcTo1y8muEU2';
    this.cmatchesservice.getNewMatchDetails(this.dashboardModel.apiKeyVal).subscribe((val: any) => {
    this.dashboardModel.matchDetails = val.matches;
    this.dataSource = new MatTableDataSource(this.dashboardModel.matchDetails);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    }, error => {
      console.log('error');
    })
  }

  onClick(row) {
    const unique_id: string = row.unique_id;
    this.router.navigate(['../', 'newDetails', unique_id], {relativeTo: this.route})

  }
}