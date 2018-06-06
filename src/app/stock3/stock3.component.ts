import { Component, OnInit } from '@angular/core';
import { Stock, StockService } from '../services/stock.service';
import { Stock3Service } from '../services/stock3.service';

@Component({
  selector: 'app-stock3',
  templateUrl: './stock3.component.html',
  styleUrls: ['./stock3.component.css'],
  //providers: [{provide:StockService,useClass:Stock3Service}]
})
export class Stock3Component implements OnInit {
  private stock3: Stock;

  constructor(public service3:StockService) { }

  ngOnInit() {
    this.stock3 = this.service3.getStock();
  }

}
