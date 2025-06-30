import { Component } from '@angular/core';
import { BeerCartService } from '../beer-cart.service';
import { Beers } from '../beer-list/Beer';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartList: Beers[] = [];

  constructor(private cart: BeerCartService) {
    cart.shopList.subscribe((c) => {
      this.cartList = c;
    });
  }

}
