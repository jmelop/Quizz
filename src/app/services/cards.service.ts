import { Injectable } from '@angular/core';
import { Card, CardStatus } from '../models/card.model';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private apiUrl = 'http://localhost:8080/api/cards';

  constructor(private http: HttpClient) { }

  getAllCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.apiUrl)
      .pipe(
        catchError(e => {
          return throwError(e);
        })
      );
  }

  getAllByCategoryId(id: number): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.apiUrl}/cat/${id}`)
      .pipe(
        catchError(e => {
          return throwError(e);
        })
      );
  }

  post(card: Card): Observable<CardStatus> {
    return this.http.post<CardStatus>(this.apiUrl, card).pipe(
      catchError(e => {
        return throwError(e);
      })
    );
  }

  getCard(id: number): Observable<Card> {
    return this.http.get<Card>(`${this.apiUrl}/${id}`).pipe(
      catchError(e => {
        return throwError(e);
      })
    );
  }

  updateCard(id: number, card: Card): Observable<CardStatus> {
    return this.http.put<CardStatus>(`${this.apiUrl}/${id}`, card);
  }

  deleteCard(id: number): Observable<CardStatus> {
    return this.http.delete<CardStatus>(`${this.apiUrl}/${id}`).pipe(
      catchError(e => {
        return throwError(e);
      })
    );
  }
}
