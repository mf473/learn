import { Injectable } from '@angular/core';
import { cleanSession } from 'selenium-webdriver/safari';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  constructor(public log: LoggerService) { }
  getStock():Stock{
    this.log.log('写日志');
    return new Stock(1,'mf');
  }
}
export class Stock {
  constructor(public id:number,public name:string){

  }
}