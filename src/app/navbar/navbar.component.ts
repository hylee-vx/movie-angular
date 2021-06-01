import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  /**
   * Function clearing user ID and bearer token from localStorage, logging user out of app
   */
  logoutUser(): void {
    localStorage.clear();
  }

}
