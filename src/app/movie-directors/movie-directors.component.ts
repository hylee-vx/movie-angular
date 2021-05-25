import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { GetDirectorsService } from '../fetch-api-data.service';

@Component({
  selector: 'app-movie-directors',
  templateUrl: './movie-directors.component.html',
  styleUrls: ['./movie-directors.component.scss']
})
export class MovieDirectorsComponent {
  // directors: any[] = [];

  constructor(
    // public fetchApiData: GetDirectorsService,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      Name: string,
    }
  ) { }

  // ngOnInit(): void {
  //   this.getDirectors();
  // }

  // getDirectors(): void {
  //   this.fetchApiData.getDirectors().subscribe((response: any) => {
  //     this.directors = response;
  //     return this.directors;
  //   });
  // }
}
