import { Injectable } from '@angular/core';
import { StockService, Stock } from './stock.service';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class Stock3Service implements StockService {

  constructor(public log:LoggerService) { }
  getStock(): Stock{
    return new Stock(3,'zs');
  }
}
