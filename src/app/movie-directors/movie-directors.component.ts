import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-directors',
  templateUrl: './movie-directors.component.html',
  styleUrls: ['./movie-directors.component.scss']
})
export class MovieDirectorsComponent {

  /**
   * Injects directors array from movie-card object for use in movie-directors component
   * Maps over array to display all relevant details from each object
   * @param data - array of objects
   */
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      Directors: Array<{
        Name: string,
        BirthYear: string,
        DeathYear: string,
        ImagePath: string,
        Bio: string,
      }>
    }
  ) { }

}
