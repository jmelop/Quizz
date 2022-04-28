import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from 'src/app/models/card.model';
import { CardsService } from 'src/app/services/cards.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  card: Card = new Card();
  originalCard: Card = new Card();
  canEdit: boolean = false;
  cardId: number;

  constructor(private cardService: CardsService, private activatedToute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedToute.params.subscribe(params => {
      this.cardId = params[`id`];
      if (this.cardId) {
        this.cardService.getCard(this.cardId).subscribe(card => {
          if (card !== undefined) {
            this.card = card;
            this.originalCard = { ...card };
          }
        });
      }
    });
  }

  public updateCard(): void {
    this.canEdit = false;
    if (this.cardId) {
      this.cardService.updateCard(this.cardId, this.card).subscribe(cardStatus => {
        Swal.fire('Card updated', cardStatus.message, 'success');
      },
        () => {
          this.card = this.originalCard;
          Swal.fire('Card updated', 'Error updating a card', 'error');
        });
    }
  }

}
