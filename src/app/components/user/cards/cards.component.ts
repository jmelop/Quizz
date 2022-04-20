import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cards: Card[] = [];
  newCard: Card = new Card();
  showModal: boolean = false;

  constructor(private cardService: CardsService) { }

  ngOnInit(): void {
    this.cardService.getAllCards().then(cards => {
      this.cards = cards;
    });
  }

  public saveCard(): void {
    this.cardService.post(this.newCard).then(card => {
      if (card !== undefined) {
        this.cards.push(this.newCard);
        this.newCard = { spanish: '', translation: '', group: 1, set: '', language: ''};
      }
    });
  }

  deleteCard(id: number): void {
    this.cardService.deleteCard(id).then(() => {
      const cardFilter = this.cards.filter(card => card.id !== id);
      this.cards = cardFilter;
      this.showModal = false;
    });
  }

}
