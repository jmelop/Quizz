import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Input('category') category: Category;

  constructor() { }

  ngOnInit(): void {
  }

}
