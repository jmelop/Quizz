import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Language } from '../models/language.model';
import { LanguageStatus } from '../models/languageStatus.model';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

  private apiUrl = 'http://localhost:8080/api/languages';

  constructor(private http: HttpClient) { }

  getAllLanguages(): Observable<Language[]> {
    return this.http.get<Language[]>(this.apiUrl)
      .pipe(
        catchError(e => {
          return throwError(e);
        })
      );
  }

  saveLanguage(language: Language): Observable<LanguageStatus> {
    return this.http.post<LanguageStatus>(this.apiUrl, language).pipe(
      catchError(e => {
        return throwError(e);
      })
    );
  }
}
