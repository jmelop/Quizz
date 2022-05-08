import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardInfoComponent } from './components/user/cards/components/card-info/card-info.component';
import { CardsComponent } from './components/user/cards/cards.component';
import { GamesComponent } from './components/user/games/games.component';
import { HomeComponent } from './components/user/home/home.component';
import { PlayGameComponent } from './components/user/games/components/play-game/play-game.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cards',
    component: CardsComponent
  },
  {
    path: 'cards/:id',
    component: CardInfoComponent
  },
  {
    path: 'play',
    component: GamesComponent
  },
  {
    path: 'play/:id',
    component: PlayGameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
