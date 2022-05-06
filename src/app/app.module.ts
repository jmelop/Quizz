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
import { HttpClientModule } from '@angular/common/http';
import { GameComponent } from './components/user/game/game.component';
import { CardInfoComponent } from './components/user/cards/components/card-info/card-info.component';
import { ModalComponent } from '../components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CardsComponent,
    FooterComponent,
    CardComponent,
    GameComponent,
    CardInfoComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
