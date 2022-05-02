import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Language } from '../models/language.model';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

  private apiUrl: string = 'http://localhost:8080/api/languages';

  constructor(private http: HttpClient) { }

  getAllLanguages(): Observable<Language[]> {
    return this.http.get<Language[]>(this.apiUrl)
      .pipe(
        catchError(e => {
          return throwError(e);
        })
      );
  }
}
