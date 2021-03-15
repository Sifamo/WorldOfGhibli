import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from '../Model/film';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  

  constructor(private http: HttpClient) { }

  private ghibliUrl = 'https://ghibliapi.herokuapp.com';

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(`${this.ghibliUrl}/films`)
    
  }
  
  getFilm(id: string) : Observable<Film> {
    return this.http.get<Film>(`${this.ghibliUrl}/films/${id}`)
    .pipe(
      catchError((error: any): Observable<Film> => of({} as Film))
    );
  }
}
