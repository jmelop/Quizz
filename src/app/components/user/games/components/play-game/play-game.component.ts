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

  categoryId = '';
  cards: Card[] = [];

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
        })
      }
    })
  }

}
