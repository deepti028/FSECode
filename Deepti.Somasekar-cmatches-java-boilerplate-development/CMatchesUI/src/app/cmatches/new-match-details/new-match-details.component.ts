import { Component, OnInit, ViewChild, Input, Output, EventEmitter} from '@angular/core';
import { DashboardService } from '../dashboard/services/dashboard.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { DashboardModel } from '../dashboard/model/dashboard.model';
import { MatchDetails } from '../matchdetail';
import { DataSource } from '@angular/cdk/collections';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material';
import { MatchService } from '../match.service';
import { parse } from 'url';
import { parseIntAutoRadix } from '@angular/common/src/i18n/format_number';
// import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material';
import { CmatchesService } from '../cmatches.service';
@Component({
  selector: 'app-new-match-details',
  templateUrl: './new-match-details.component.html',
  styleUrls: ['./new-match-details.component.css']
})
export class NewMatchDetailsComponent implements OnInit {
  dashboardModel: DashboardModel;
  dataSource;
  serviceFlag: boolean = false;
  currentMatch: MatchDetails;
  statusCode: number;
  errorStatus: string;
  match: any;
  favMatch: any;
  displayedColumns: string[] = ['unique_id', 'date', 'squad', 'matchStarted', 'toss-winner-team', 'winner-team'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar,
    private cmatchesService: CmatchesService, private matchService: MatchService, public dialog: MatDialog) {
    this.dashboardModel = new DashboardModel()
    this.route.params.subscribe((params: Params) => {
      this.dashboardModel.unique_id = params['id'];
    });
  }

  ngOnInit() {
    this.getMatchDetailsInfo();
  }

  getMatchDetailsInfo() {
    this.dashboardModel.apiKeyVal = 'AK69qyrbd9VR0nbvEcTo1y8muEU2';
    this.cmatchesService.getNewMatchDetails(this.dashboardModel.apiKeyVal).subscribe((val: any) => {
      this.currentMatch = val.matches;
      this.match = val.matches.filter(a => { return a.unique_id == this.dashboardModel.unique_id })[0];

       this.match = {
        'uniqueId': this.match.unique_id,
        'date': this.match.date,
        'dateTimeGMT': this.match.dateTimeGMT,
        'team-1': this.match["team-1"],
        'team-2': this.match["team-2"],
        'type': this.match.type,
        'squad': this.match.squad,
        'matchStarted': this.match.matchStarted
      };
     
    }, error => {
      console.log('error');
    })
  }

  addToFavourite(match) {
    this.matchService.addToFavouriteList(match).subscribe(data => {
      this.statusCode = data.status;
      if (this.statusCode === 201) {
        this.snackBar.open(data.body.message, " ", { duration: 1000 });
      }

    },

      error => {
        console.log(error);
         this.errorStatus = `${error.status}`;
        const errorMsg = `${error.error.message}`;
        this.statusCode = parseInt(this.errorStatus, 10);
        if (this.statusCode === 409) {
          this.snackBar.open(errorMsg, "", {
            duration: 1000
          });
          this.statusCode = 0;
        }
      });

  }

  

}
