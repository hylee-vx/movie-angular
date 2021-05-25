import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EditUserService } from '../fetch-api-data.service';

@Component({
  selector: 'app-user-profile-edit',
  templateUrl: './user-profile-edit.component.html',
  styleUrls: ['./user-profile-edit.component.scss']
})
export class UserProfileEditComponent implements OnInit {
  @Input() userData = { Username: '', Email: '', DateOfBirth: '' };

  constructor(
    public fetchApiData: EditUserService,
    public dialogRef: MatDialogRef<UserProfileEditComponent>,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  editUser(): void {
    this.fetchApiData.editUser(this.userData).subscribe(response => {
      this.dialogRef.close();
      this.snackBar.open('Profile updated!', 'OK', {
        duration: 2000,
      });
    }, response => {
      this.snackBar.open(response, 'OK', {
        duration: 2000,
      });
    });
  }

}
