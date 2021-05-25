import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import {
  GetUserService,
  EditUserService,
  EditUserPasswordService,
  GetAllMoviesService,
  DeleteFavouriteMovieService,
  DeleteUserService,
} from '../fetch-api-data.service';
import { UserProfileEditComponent } from '../user-profile-edit/user-profile-edit.component';
import { UserPasswordEditComponent } from '../user-password-edit/user-password-edit.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: any = {};
  movies: any = [];
  favourites: any = [];


  constructor(
    public fetchApiData: GetUserService,
    public fetchApiData2: EditUserService,
    public fetchApiData3: EditUserPasswordService,
    public fetchApiData4: GetAllMoviesService,
    public fetchApiData5: DeleteFavouriteMovieService,
    public fetchApiData6: DeleteUserService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.fetchApiData.getUser().subscribe((response: any) => {
      this.user = response;
    });
  }

  openUserProfileEditDialog(): void {
    this.dialog.open(UserProfileEditComponent, {
      width: '280px',
    });
  }

  openUserPasswordEditDialog(): void {
    this.dialog.open(UserPasswordEditComponent, {
      width: '280px',
    });
  }

}
