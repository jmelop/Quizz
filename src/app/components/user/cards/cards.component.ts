import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { CardsService } from 'src/app/services/cards.service';
import Swal from 'sweetalert2';

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
    this.cardService.getAllCards().subscribe(cards => {
      this.cards = cards;
    });
  }

  public saveCard(): void {
    this.cardService.post(this.newCard).subscribe(cardStatus => {
      if (cardStatus !== undefined) {
        this.newCard.id = cardStatus.card.id;
        console.log(cardStatus)
        this.cards.push(this.newCard);
        this.newCard = { spanish: '', translation: '', group: 1, set: '', language: '' };
        Swal.fire('New card', cardStatus.message, 'success');
      }
    }), () => {
      Swal.fire('New card', 'Error adding a new card', 'error');
    };
  }

  deleteCard(id: number): void {
    this.cardService.deleteCard(id).subscribe(cardStatus => {
      const cardFilter = this.cards.filter(card => card.id !== id);
      this.cards = cardFilter;
      this.showModal = false;
      Swal.fire('Card deleted', cardStatus.message, 'success');
    }, () => {
      Swal.fire('Card deleted', 'Error deleting a card', 'error');
    });
  }

}
