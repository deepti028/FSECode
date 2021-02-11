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
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  dashboardModel: DashboardModel;
  dataSource;
  serviceFlag: boolean = false;
  currentMatch: MatchDetails;
  statusCode: number;
  errorStatus: string;
  displayedColumns: string[] = ['unique_id', 'date', 'squad', 'matchStarted', 'toss-winner-team', 'winner-team'];
  @Input()
  match:MatchDetails;
  @Input()
  favoriteList:boolean;

  @Output()
  addToFavouriteList = new EventEmitter();

  @Output()
  deleteFromFavouriteList = new EventEmitter();

  @Output()
  updateFavouriteComments = new EventEmitter();


  constructor(public dialog: MatDialog, private router: Router, private route: ActivatedRoute) { 
    this.dashboardModel = new DashboardModel()
    this.route.params.subscribe((params: Params) => {
      this.dashboardModel.unique_id = params['id'];
    });
  }

  ngOnInit() {
  }

  addToFavourite(data: MatchDetails) {
    this.addToFavouriteList.emit(data);
  }

  deleteButtonClick(data: MatchDetails) {
    this.deleteFromFavouriteList.emit(data);
  }

  openSquad() {
    this.router.navigateByUrl('squad/' + this.dashboardModel.unique_id);

  }
}