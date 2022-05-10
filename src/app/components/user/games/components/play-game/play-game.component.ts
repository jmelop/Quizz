import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from 'src/app/models/card.model';
import { CardsService } from 'src/app/services/cards.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css']
})
export class PlayGameComponent implements OnInit {

  cards: Card[] = [];
  card: Card = new Card();
  position: number = 0;
  translation = true;
  categoryId = '';
  category: string = '';

  constructor(
    private activatedToute: ActivatedRoute,
    private cardService: CardsService
  ) { }

  ngOnInit(): void {
    this.activatedToute.params.subscribe(params => {
      this.categoryId = params[`id`];
      if (this.categoryId) {
        this.cardService.getAllByCategoryId(Number(this.categoryId)).subscribe(cards => {
          this.cards = cards;
          if (cards.length > 0) {
            this.category = cards[0].category.name;
          }
        })
      }
    })
  }

  public changeCard(arrow: string): void {
    if (arrow === 'right' && (this.position + 1) < this.cards.length) {
      this.position += 1;
    } else if (arrow === 'left' && this.position > 0) {
      this.position -= 1;
    }
  }

  public updateCard(card: Card, favorite: boolean) {
    this.card = card;
    this.card.favorite = favorite;
    this.cardService.updateCard(this.card.id!, this.card).subscribe(newCard => {
      this.card = new Card();
      this.cards.map(card => {
        if (card.id === newCard.card.id) {
          card.favorite = newCard.card.favorite;
        }
      })
    },
      () => {
        Swal.fire('Card updated', 'Error updating a card', 'error');
      });
  }

}
