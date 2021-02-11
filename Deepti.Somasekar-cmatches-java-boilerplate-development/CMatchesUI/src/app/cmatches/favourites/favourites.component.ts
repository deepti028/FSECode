import { Component, OnInit } from '@angular/core';
import { MatchDetails } from '../matchdetail';

import { MatSnackBar } from '@angular/material';
import { MatchService } from '../match.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  favoriteList: boolean = true;
  favouriteMatches: MatchDetails[];
  constructor(private matchService: MatchService, private matSnackBar: MatSnackBar, private location: Location) { }

  ngOnInit() {
    const message = "WishList is Empty";
    if (this.favouriteMatches === null) {
      this.matSnackBar.open(message, "", { duration: 1000 });
    }
    this.matchService.getFavouriteMatches().subscribe(data => {
      this.favouriteMatches = data;
      if (data.length === 0) {
        this.matSnackBar.open(message, "", { duration: 1000 });
      }
    })
  }

  backClicked() {
    this.location.back();
  }

  deleteFromFavouriteList(match: MatchDetails) {
    this.matchService.deleteFromFavouriteList(match).subscribe(data => {
      const index = this.favouriteMatches.indexOf(match);
      this.favouriteMatches.splice(index, 1);
      this.matSnackBar.open(data.message, "", { duration: 1000 });
    });
    return this.favouriteMatches;
  }

}
