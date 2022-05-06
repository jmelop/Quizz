import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardInfoComponent } from './components/user/cards/components/card-info/card-info.component';
import { CardComponent } from './components/user/cards/components/card/card.component';
import { CardsComponent } from './components/user/cards/cards.component';
import { GameComponent } from './components/user/game/game.component';
import { HomeComponent } from './components/user/home/home.component';

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
    component: GameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
