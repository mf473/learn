import { Component, OnInit } from '@angular/core';
import { Stock, StockService } from '../services/stock.service';
import { Stock2Service } from '../services/stock2.service';

@Component({
  selector: 'app-stock2',
  templateUrl: './stock2.component.html',
  styleUrls: ['./stock2.component.css'],
  providers: [{provide: StockService,useClass:Stock2Service}]
})
export class Stock2Component implements OnInit {
  private stock2: Stock;

  constructor(public service2:Stock2Service) { }

  ngOnInit() {
    this.stock2 = this.service2.getStock();
  }

}
