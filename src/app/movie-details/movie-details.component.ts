import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {

  /**
 * Injects movie title, release year and description from movie-card component for use in movie-details component dialog
 * @param data - object 
 */
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      Title: string,
      ReleaseYear: string,
      Description: string,
    }
  ) { }
}
