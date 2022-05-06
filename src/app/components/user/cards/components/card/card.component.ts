import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input('card') card: Card;
  @Output() deleteCard = new EventEmitter<Card>();

  ngOnInit(): void {
  }

  public delete(): void {
    this.deleteCard.emit(this.card);
  }

}
