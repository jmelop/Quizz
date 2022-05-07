import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardInfoComponent } from './components/user/cards/components/card-info/card-info.component';
import { CardsComponent } from './components/user/cards/cards.component';
import { GamesComponent } from './components/user/games/games.component';
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
    component: GamesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
