import { Component } from '@angular/core';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movie-angular';

  constructor(public dialog: MatDialog) { }

  openUserRegistrationDialog(): void {
    // opens dialog box when sign up button clicked
    this.dialog.open(UserRegistrationFormComponent, {
      width: '280px'
    });
  }
}
