import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from 'src/app/models/card.model';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css']
})
export class PlayGameComponent implements OnInit {

  cards: Card[] = [];
  position: number = 0;
  translation = true;
  categoryId = '';
  category: string = '';

  constructor(
    private activatedToute: ActivatedRoute,
    private cardService: CardsService,
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

}
