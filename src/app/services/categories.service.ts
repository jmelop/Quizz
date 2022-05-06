import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Category, CategoryStatus } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private apiUrl = 'http://localhost:8080/api/categories';

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl)
      .pipe(
        catchError(e => {
          return throwError(e);
        })
      );
  }

  saveCategory(category: Category): Observable<CategoryStatus> {
    return this.http.post<CategoryStatus>(this.apiUrl, category).pipe(
      catchError(e => {
        return throwError(e);
      })
    );
  }

}
