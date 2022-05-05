import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Category } from '../models/category.model';
import { Language } from '../models/language.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public languageDetails: any = [];
  public categoryDetails: any = [];

  public subject = new Subject<any>();

  private language = new BehaviorSubject(this.languageDetails);

  private category = new BehaviorSubject(this.categoryDetails);

  newLanguage = this.language.asObservable();

  newCategory = this.category.asObservable();

  changeLanguage(language: Language): void {
    this.language.next(language);
  }

  changeCategory(category: Category): void {
    this.category.next(category);
  }
}
