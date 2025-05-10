import { Component } from '@angular/core';
import { Beers } from './Beer';

@Component({
  selector: 'app-beer-list',
  standalone: false,
  templateUrl: './beer-list.component.html',
  styleUrl: './beer-list.component.scss'
})
export class BeerListComponent {
  beers: Beers[] = [
    {
      name: "Dark Beer",
      type: "Dark",
      price: 80,
      stock: 5,
      image: 'img/porter.jpeg',
      deal: false,
      quantity: 0,
    },
    {
      name: "Bilter Call Saul",
      type: "Ipa",
      price: 100,
      stock: 3,
      image: 'img/porter.jpeg',
      deal: true,
      quantity: 0,
    },
    {
      name: "Yellow Submarine",
      type: "Golden Ale",
      price: 120,
      stock: 0,
      image: 'img/porter.jpeg',
      deal: true,
      quantity: 0,
    }
  ]
  constructor() { }

  downQuantity(beer: Beers): void {
    beer.quantity--;
  }

  upQuantity(beer: Beers): void {
    beer.quantity++;
  }
}
