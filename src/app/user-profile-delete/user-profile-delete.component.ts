import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteUserService } from '../fetch-api-data.service';

@Component({
  selector: 'app-user-profile-delete',
  templateUrl: './user-profile-delete.component.html',
  styleUrls: ['./user-profile-delete.component.scss']
})
export class UserProfileDeleteComponent implements OnInit {

  constructor(
    public fetchApiData: DeleteUserService,
    public dialogRef: MatDialogRef<UserProfileDeleteComponent>,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  deleteUser(): void {
    this.fetchApiData.deleteUser().subscribe(() => {
      this.dialogRef.close();
      this.snackBar.open('Account deleted', 'OK', {
        duration: 2000
      });
      localStorage.clear();
    }, response => {
      this.snackBar.open(response, 'OK', {
        duration: 2000
      });
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
