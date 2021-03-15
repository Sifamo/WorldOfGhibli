import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../Model/country';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Fan } from '../Model/fan';

@Injectable({
  providedIn: 'root'
})
export class MemorialService {

  constructor(private http: HttpClient) { }

  private restcountriesUrl = "https://restcountries.eu/rest/v2/all";
  private jsonServerUrl = "http://localhost:3000";
  
  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.restcountriesUrl)
    .pipe(
      catchError((error: any): Observable<Country[]> => {
        console.log(error);
        return of([] as Country[]);
      })
    );
  }

  getFans(): Observable<Fan[]> {
    return this.http.get<Fan[]>(`${this.jsonServerUrl}/contributions`);
  }

  addFan(fan: Fan) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(fan);
    return this.http.post(`${this.jsonServerUrl}/contributions`, body, {'headers': headers});
  }

}
