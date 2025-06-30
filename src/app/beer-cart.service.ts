import { Injectable } from '@angular/core';
import { Beers } from './beer-list/Beer';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// aca manejamos la logica del carrito

export class BeerCartService {
  private _shopList: Beers[] = [];
  shopList: BehaviorSubject<Beers[]> = new BehaviorSubject<Beers[]>([]);

  constructor() { }

  addToCart(beer: Beers) {
    const item = this._shopList.find(b => b.name === beer.name);
    if (!item) {
      this._shopList.push({ ...beer });
    } else {
      item.quantity += beer.quantity;
    }
    console.log(this._shopList);
    this.shopList.next(this._shopList);
  }

}
