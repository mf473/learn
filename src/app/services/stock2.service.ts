import { Injectable } from '@angular/core';
import { StockService, Stock } from './stock.service';

@Injectable({
  providedIn: 'root'
})
export class Stock2Service implements StockService {

  constructor() { }
  getStock(): Stock{
    return new Stock(2,'mafeng');
  }
}
