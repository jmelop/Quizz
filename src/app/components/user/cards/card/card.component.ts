import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from 'src/app/models/card.model';
import { Category } from 'src/app/models/category.model';
import { Language } from 'src/app/models/language.model';
import { CardsService } from 'src/app/services/cards.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { LanguagesService } from 'src/app/services/languages.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  card: Card = new Card();
  originalCard: Card = new Card();
  languages: Language[] = [];
  filteredLanguages: Language[] = [];
  language: Language = new Language();
  categories: Category[] = [];
  filteredCategories: Category[] = [];
  category: Category = new Category();
  canEdit = false;
  cardId: number;

  constructor(
    private cardService: CardsService,
    private activatedToute: ActivatedRoute,
    private languageService: LanguagesService,
    private categoryService: CategoriesService
  ) { }

  ngOnInit(): void {
    this.activatedToute.params.subscribe(params => {
      this.cardId = params[`id`];
      if (this.cardId) {
        this.cardService.getCard(this.cardId).subscribe(card => {
          if (card !== undefined) {
            this.card = card;
            this.originalCard = { ...card };
            this.getLanguages();
            this.getCategories();
          }
        });
      }
    });
  }

  public updateCard(): void {
    this.canEdit = false;
    if (this.cardId) {
      const formatedLanguage = this.languages.find((language: Language) => language.name === this.language.name);
      this.card.language = formatedLanguage!;
      const formatedCategory = this.categories.find((category: Category) => category.name === this.category.name);
      this.card.category = formatedCategory!;
      this.cardService.updateCard(this.cardId, this.card).subscribe(cardStatus => {
        this.filterLanguages();
        this.filterCategories();
        Swal.fire('Card updated', cardStatus.message, 'success');
      },
        () => {
          this.card = this.originalCard;
          Swal.fire('Card updated', 'Error updating a card', 'error');
        });
    }
  }

  private getLanguages(): void {
    this.languageService.getAllLanguages().subscribe(languages => {
      this.languages = languages;
      this.filterLanguages();
      this.language = this.card.language;
    });
  }

  private getCategories(): void {
    this.categoryService.getAllCategories().subscribe(categories => {
      this.categories = categories;
      this.filterCategories();
      this.category = this.card.category;
    });
  }

  private filterLanguages(): void {
    this.filteredLanguages = this.languages.filter(language => language.name !== this.card.language.name);
  }

  private filterCategories(): void {
    this.filteredCategories = this.categories.filter(category => category.name !== this.card.category.name);
  }

}
