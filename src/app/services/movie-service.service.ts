import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviesInterface } from '../interface/movies-interface';
import { environment } from '../environments/environment.development';
import { Auth } from '../interface/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieServiceService {
  protected movies: MoviesInterface[] = [];
  protected series: MoviesInterface[] = [];
  protected movie: MoviesInterface[] = [];
  protected bookmarked: MoviesInterface[] = [];
  constructor(private http: HttpClient) {}

  registerUser(userDetails: Auth) {
    return this.http.post(`${environment.endPoint}/users`, userDetails);
  }
  getUserByEmail(email: string): Observable<Auth[]> {
    return this.http.get<Auth[]>(
      `${environment.endPoint}/users?email=${email}`,
    );
  }
  getAllMovies(): Observable<MoviesInterface[]> {
    return this.http.get<MoviesInterface[]>(`${environment.endPoint}/movies`);
  }
  addToBookmark(movie: MoviesInterface) {
    return this.http
      .put<MoviesInterface[]>(
        `${environment.endPoint}/movies/${movie.id}`,
        movie,
      )
      .subscribe(
        (response) => {},
        (error) => console.error('Error'),
      );
  }
}
