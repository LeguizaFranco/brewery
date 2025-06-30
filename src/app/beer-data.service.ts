import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Beers } from './beer-list/Beer';
import { Observable, tap } from 'rxjs';
import { log } from 'console';

const URL = 'http://localhost:3001/beers';
@Injectable({
  providedIn: 'root'
})

export class BeerDataService {
  constructor(private http: HttpClient) { }

  public getBeers(): Observable<Beers[]> {
    return this.http.get<Beers[]>(URL)
      .pipe(
        tap((beers: Beers[]) => beers.forEach(beer => beer.quantity = 0))
      );
  }
}