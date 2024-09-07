import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/user/home/home.component';
import { NavbarComponent } from './components/user/navbar/navbar.component';
import { CardsComponent } from './components/user/cards/cards.component';
import { FooterComponent } from './components/user/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/user/cards/components/card/card.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { GamesComponent } from './components/user/games/games.component';
import { CardInfoComponent } from './components/user/cards/components/card-info/card-info.component';
import { ModalComponent } from '../components/modal/modal.component';
import { GameComponent } from './components/user/games/components/game/game.component';
import { PlayGameComponent } from './components/user/games/components/play-game/play-game.component';

@NgModule({ declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        CardsComponent,
        FooterComponent,
        CardComponent,
        GamesComponent,
        GameComponent,
        CardInfoComponent,
        ModalComponent,
        PlayGameComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        FormsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
