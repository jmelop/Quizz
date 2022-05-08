import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css']
})
export class PlayGameComponent implements OnInit {

  categoryId = '';

  constructor(
    private activatedToute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedToute.params.subscribe(params => {
      this.categoryId = params[`id`];
      if(this.categoryId) {}
    })
  }

}
