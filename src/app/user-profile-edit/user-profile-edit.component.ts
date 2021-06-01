import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GetUserService, EditUserService } from '../fetch-api-data.service';

@Component({
  selector: 'app-user-profile-edit',
  templateUrl: './user-profile-edit.component.html',
  styleUrls: ['./user-profile-edit.component.scss']
})
export class UserProfileEditComponent implements OnInit {
  @Input() userData = { Username: '', Email: '', DateOfBirth: '' };
  user: any = {};

  constructor(
    public fetchApiData: GetUserService,
    public fetchApiData2: EditUserService,
    public dialogRef: MatDialogRef<UserProfileEditComponent>,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  // getUser(): void {
  //   this.fetchApiData.getUser().subscribe((response: any) => {
  //     this.user = response;
  //     return this.user;
  //   });
  // }

  /**
   * Function sending user profile form input to database to update user account details 
   */
  editUser(): void {
    this.fetchApiData2.editUser(this.userData).subscribe(() => {
      this.dialogRef.close();
      this.snackBar.open('Profile updated!', 'OK', {
        duration: 2000,
      });
      // this.getUser();
    }, response => {
      this.snackBar.open(response, 'OK', {
        duration: 2000,
      });
    });
  }

}
