import { Component } from '@angular/core';
import { Beers } from './Beer';
import { BeerCartService } from '../beer-cart.service';
import { BeerDataService } from '../beer-data.service';

@Component({
  selector: 'app-beer-list',
  standalone: false,
  templateUrl: './beer-list.component.html',
  styleUrl: './beer-list.component.scss'
})
export class BeerListComponent {

  beers: Beers[] = [];
  constructor(private cart: BeerCartService, private beersDataServices: BeerDataService) {
  }

  ngOnInit(): void {
    this.beersDataServices.getBeers()
      .subscribe(data => this.beers = data);
  }

  addToCart(beer: Beers): void {
    this.cart.addToCart(beer);
    beer.stock -= beer.quantity;
    beer.quantity = 0; // Reset quantity after adding to cart
  }

}
