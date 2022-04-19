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

  deleteCard(id: number) {
    return axios.delete(`${this.apiUrl}/${id}`).then(() => {
      return 'OK';
    });
  };
}
