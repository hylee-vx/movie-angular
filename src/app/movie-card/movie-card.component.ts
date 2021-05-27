import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import {
  GetAllMoviesService,
  GetUserService,
  AddFavouriteMovieService,
  DeleteFavouriteMovieService,
} from '../fetch-api-data.service';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { MovieGenreComponent } from '../movie-genre/movie-genre.component';
import { MovieDirectorsComponent } from '../movie-directors/movie-directors.component';
import { MovieActorsComponent } from '../movie-actors/movie-actors.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  movies: any[] = [];
  favouriteMovies: any[] = [];

  constructor(
    public fetchApiData: GetAllMoviesService,
    public fetchApiData2: GetUserService,
    public fetchApiData3: AddFavouriteMovieService,
    public fetchApiData4: DeleteFavouriteMovieService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.getMovies();
    this.getFavouriteMovies();
  }

  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((response: any) => {
      this.movies = response;
      return this.movies;
    });
  }

  getFavouriteMovies(): void {
    const user = localStorage.getItem('user');
    if (user) {
      this.fetchApiData2.getUser().subscribe((response: any) => {
        this.favouriteMovies = response.FavouriteMovies;
        return this.favouriteMovies;
      });
    }
  }

  addFavourite(id: string): void {
    this.fetchApiData3.addFavouriteMovie(id).subscribe((response: any) => {
      console.log(response);
      this.getFavouriteMovies();
    });
  }

  deleteFavourite(id: string): void {
    this.fetchApiData4.deleteFavouriteMovie(id).subscribe((response: any) => {
      console.log(response);
      this.getFavouriteMovies();
    });
  }

  openDetailsDialog(Title: string, ReleaseYear: string, Description: string): void {
    this.dialog.open(MovieDetailsComponent, {
      data: { Title, ReleaseYear, Description },
    });
  }

  openDirectorsDialog(Directors: []): void {
    this.dialog.open(MovieDirectorsComponent, {
      data: { Directors },
    })
  }

  openActorsDialog(Actors: []): void {
    this.dialog.open(MovieActorsComponent, {
      data: { Actors },
    })
  }

  openGenreDialog(Name: string, Description: string): void {
    this.dialog.open(MovieGenreComponent, {
      data: { Name, Description },
    });
  }
}
