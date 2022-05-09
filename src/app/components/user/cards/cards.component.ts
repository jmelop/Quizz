import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { Category } from 'src/app/models/category.model';
import { Language } from 'src/app/models/language.model';
import { CardsService } from 'src/app/services/cards.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { LanguagesService } from 'src/app/services/languages.service';
import { SharedService } from 'src/app/services/shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cards: Card[] = [];
  filteredCards: Card[] = [];
  tempCard: Card = new Card();
  languages: Language[] = [];
  language: Language = new Language();
  languageFilter: Language = new Language();
  categories: Category[] = [];
  category: Category = new Category();
  newCard: Card = new Card();
  showModal = false;

  constructor(
    private cardService: CardsService,
    private languageService: LanguagesService,
    private categoryService: CategoriesService,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.cardService.getAllCards().subscribe(cards => {
      this.cards = cards;
      this.filteredCards = cards;
    });
    this.languageService.getAllLanguages().subscribe(languages => {
      this.languages = languages;
      this.languageFilter.name = 'All';
    });
    this.categoryService.getAllCategories().subscribe(categories => {
      this.categories = categories;
    });
    this.checkSharedService();
  }

  public saveCard(): void {
    this.newCard.language = this.language;
    this.newCard.category = this.category;
    this.cardService.post(this.newCard).subscribe(cardStatus => {
      if (cardStatus !== undefined) {
        this.newCard.id = cardStatus.card.id;
        this.cards.push(this.newCard);
        this.filteredCards = this.cards;
        this.languageFilter.name = 'All';
        this.newCard = new Card();
        this.language = new Language();
        this.category = new Category();
        Swal.fire('New card', cardStatus.message, 'success');
      }
    }), () => {
      Swal.fire('New card', 'Error adding a new card', 'error');
    };
  }

  public checkModal(event: any) {
    this.showModal = true;
    this.tempCard = event;
  }

  public deleteCard(): void {
    const id = this.tempCard.id;
    this.cardService.deleteCard(id!).subscribe(cardStatus => {
      const cardFilter = this.cards.filter(card => card.id !== id);
      this.cards = cardFilter;
      this.showModal = false;
      this.tempCard = new Card();
      Swal.fire('Card deleted', cardStatus.message, 'success');
    }, () => {
      Swal.fire('Card deleted', 'Error deleting a card', 'error');
    });
  }

  public filterCards() {
    if (this.languageFilter.name !== 'All') {
      this.filteredCards = this.cards.filter(card => card.language.name === this.languageFilter.name);
    } else {
      this.filteredCards = this.cards;
    }
  }

  private checkSharedService(): void {
    this.sharedService.newLanguage.subscribe(language => {
      this.languages.push(language);
    });
    this.sharedService.newCategory.subscribe(category => {
      this.categories.push(category);
    });
  }

}
