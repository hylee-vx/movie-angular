import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

// API URL that provides data for the client app
const apiUrl = 'https://mymusicalflix.herokuapp.com/';

/**
 * USER ROUTES  
 */
/**
 * API call to user registration endpoint
 * @param userDetails - registration details for new user
 */
@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
  // injects the HttpClient module to the constructor params 
  // provides module to the entire class, available via this.http
  constructor(private http: HttpClient) { }
  // API call for user registration endpoint
  public userRegistration(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http
      .post(apiUrl + 'users', userDetails)
      .pipe(catchError(this.handleError));
  }

  // error handling
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(
        `Error status code ${error.status}, ` + `Error body is: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later');
  }
}

/**
 * API call to user login endpoint
 * @param userDetails - login details for existing user
 */
@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  constructor(private http: HttpClient) { }

  public userLogin(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http
      .post(apiUrl + 'login', userDetails)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(
        `Error status code ${error.status}, ` + `Error body is ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later');
  }
}

/**
 * API call to fetch user account details
 * @param user - userID
 */
@Injectable({
  providedIn: 'root'
})
export class GetUserService {
  constructor(private http: HttpClient) { }

  public getUser(): Observable<any> {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    return this.http
      .get(`${apiUrl}users/${user}`, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        })
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }
  // non-typed response extraction
  private extractResponseData(res: Response | {}): Response | {} {
    const body = res;
    console.log(body);
    return body || {};
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(
        `Error status code ${error.status}, ` + `Error body is ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later');
  }
}

/**
 * API call to update user details
 * @param userDetails
 */
@Injectable({
  providedIn: 'root'
})
export class EditUserService {
  constructor(private http: HttpClient) { }

  public editUser(userDetails: any): Observable<any> {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    return this.http
      .put(`${apiUrl}users/${user}`, userDetails, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  private extractResponseData(res: Response | {}): Response | {} {
    const body = res;
    return body || {};
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(
        `Error status code ${error.status}, ` + `Error body is ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later');
  }
}

/**
 * API call to update user password
 * @param userPassword
 */
@Injectable({
  providedIn: 'root'
})
export class EditUserPasswordService {
  constructor(private http: HttpClient) { }

  public editUserPassword(userPassword: any): Observable<any> {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    return this.http
      .put(`${apiUrl}users/${user}/password`, userPassword, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        })
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  private extractResponseData(res: Response | {}): Response | {} {
    const body = res;
    return body || {};
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(
        `Error status code ${error.status}, ` + `Error body is ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later');
  }
}

/**
 * API call to add movie ID to favourite movies array in user account
 * @params id - movie ID
 */
@Injectable({
  providedIn: 'root'
})
export class AddFavouriteMovieService {
  constructor(private http: HttpClient) { }

  public addFavouriteMovie(id: string): Observable<any> {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    return this.http
      .post(`${apiUrl}users/${user}/movies/${id}`, id, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        })
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  private extractResponseData(res: Response | {}): Response | {} {
    const body = res;
    return body || {};
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(
        `Error status code ${error.status}, ` + `Error body is ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later');
  }
}

/**
 * API call to delete movie ID from favourite movies array in user account
 * @params id - movie ID
 */
@Injectable({
  providedIn: 'root'
})
export class DeleteFavouriteMovieService {
  constructor(private http: HttpClient) { }

  public deleteFavouriteMovie(id: string): Observable<any> {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    return this.http
      .put(`${apiUrl}users/${user}/movies/${id}`, id, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        })
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  private extractResponseData(res: Response | {}): Response | {} {
    const body = res;
    return body || {};
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(
        `Error status code ${error.status}, ` + `Error body is ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later');
  }
}

/**
 * API call to delete user account
 * @params user - user ID
 */
@Injectable({
  providedIn: 'root'
})
export class DeleteUserService {
  constructor(private http: HttpClient) { }

  public deleteUser(): Observable<any> {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    return this.http
      .delete(`${apiUrl}users/${user}/delete`, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        })
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  private extractResponseData(res: Response | {}): Response | {} {
    const body = res;
    return body || {};
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(
        `Error status code ${error.status}, ` + `Error body is ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later');
  }
}

/**
 * MOVIE ROUTES
 */
/**
 * API call to fetch all movie data
 */
@Injectable({
  providedIn: 'root'
})
export class GetAllMoviesService {
  constructor(private http: HttpClient) { }

  public getAllMovies(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .get(apiUrl + 'movies', {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        })
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }
  // non-typed response extraction
  private extractResponseData(res: Response | {}): Response | {} {
    console.log(res);
    const body = res;
    return body || {};
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(
        `Error status code ${error.status}, ` + `Error body is ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later');
  }
}

// // gets single movie data by title
// @Injectable({
//   providedIn: 'root'
// })
// export class GetMovieService {
//   constructor(private http: HttpClient) { }

//   public getMovie(): Observable<any> {
//     const token = localStorage.getItem('token');
//     return this.http
//       .get(apiUrl + 'movies/:Title', {
//         headers: new HttpHeaders({
//           Authorization: 'Bearer ' + token,
//         })
//       })
//       .pipe(map(this.extractResponseData), catchError(this.handleError));
//   }

//   private extractResponseData(res: Response | {}): Response | {} {
//     const body = res;
//     return body || {};
//   }

//   private handleError(error: HttpErrorResponse): any {
//     if (error.error instanceof ErrorEvent) {
//       console.error('An error occurred: ', error.error.message);
//     } else {
//       console.error(
//         `Error status code ${error.status}, ` + `Error body is ${error.error}`
//       );
//     }
//     return throwError('Something bad happened; please try again later');
//   }
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class GetDirectorsService {
//   constructor(private http: HttpClient) { }

//   public getDirectors(): Observable<any> {
//     const token = localStorage.getItem('token');
//     return this.http
//       .get(apiUrl + 'movies/directors/:name', {
//         headers: new HttpHeaders({
//           Authorization: 'Bearer ' + token,
//         })
//       })
//       .pipe(map(this.extractResponseData), catchError(this.handleError));
//   }

//   private extractResponseData(res: Response | {}): Response | {} {
//     const body = res;
//     return body || {};
//   }

//   private handleError(error: HttpErrorResponse): any {
//     if (error.error instanceof ErrorEvent) {
//       console.error('An error occurred: ', error.error.message);
//     } else {
//       console.error(
//         `Error status code ${error.status}, ` + `Error body is ${error.error}`
//       );
//     }
//     return throwError('Something bad happened; please try again later');
//   }
// }

// // gets actor data
// @Injectable({
//   providedIn: 'root'
// })
// export class GetActorsService {
//   constructor(private http: HttpClient) { }

//   public getActors(): Observable<any> {
//     const token = localStorage.getItem('token');
//     return this.http
//       .get(apiUrl + 'movies/actors/:name', {
//         headers: new HttpHeaders({
//           Authorization: 'Bearer ' + token,
//         })
//       })
//       .pipe(map(this.extractResponseData), catchError(this.handleError));
//   }

//   private extractResponseData(res: Response | {}): Response | {} {
//     const body = res;
//     return body || {};
//   }

//   private handleError(error: HttpErrorResponse): any {
//     if (error.error instanceof ErrorEvent) {
//       console.error('An error occurred: ', error.error.message);
//     } else {
//       console.error(
//         `Error status code ${error.status}, ` + `Error body is ${error.error}`
//       );
//     }
//     return throwError('Something bad happened; please try again later');
//   }
// }

// // gets genre data
// @Injectable({
//   providedIn: 'root'
// })
// export class GetGenreService {
//   constructor(private http: HttpClient) { }

//   public getGenre(): Observable<any> {
//     const token = localStorage.getItem('token');
//     return this.http
//       .get(apiUrl + 'movies/genres/:name', {
//         headers: new HttpHeaders({
//           Authorization: 'Bearer ' + token,
//         })
//       })
//       .pipe(map(this.extractResponseData), catchError(this.handleError));
//   }

//   private extractResponseData(res: Response | {}): Response | {} {
//     const body = res;
//     return body || {};
//   }

//   private handleError(error: HttpErrorResponse): any {
//     if (error.error instanceof ErrorEvent) {
//       console.error('An error occurred: ', error.error.message);
//     } else {
//       console.error(
//         `Error status code ${error.status}, ` + `Error body is ${error.error}`
//       );
//     }
//     return throwError('Something bad happened; please try again later');
//   }
// }