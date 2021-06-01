import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-actors',
  templateUrl: './movie-actors.component.html',
  styleUrls: ['./movie-actors.component.scss']
})
export class MovieActorsComponent {

  /**
   * Injects actors array from movie-card object for use in movie-actors component
   * Maps over array to display all relevant details from each object
   * @param data - array of objects
   */
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      Actors: Array<{
        Name: string,
        BirthYear: string,
        DeathYear: string,
        ImagePath: string,
        Bio: string,
      }>
    }
  ) { }

}
