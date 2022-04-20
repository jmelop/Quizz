import { Injectable } from '@angular/core';
import axios from 'axios';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private apiUrl: string = 'http://localhost:8080/api/cards';

  constructor() { }

  getAllCards(): Promise<Card[]> {
    return axios.get(this.apiUrl)
      .then(rest => rest.data);
  }

  post(card: Card) {
    return axios.post(this.apiUrl, card).then(res => {
      return res.data;
    }).catch((err) => { throw err });
  }

  getCard(id: number): Promise<Card> {
    return axios.get(`${this.apiUrl}/${id}`).then(rest => rest.data).then(card => {
      return {
        spanish: card.spanish,
        translation: card.translation,
        group: card.group,
        set: card.set,
        language: card.language
      };
    });
  }

  updateCard(id: number, card: Card): Promise<Card> {
    return axios.put(`${this.apiUrl}/${id}`, card);
  }

  deleteCard(id: number) {
    return axios.delete(`${this.apiUrl}/${id}`).then(() => {
      return 'OK';
    });
  };
}
