import { Component, OnInit } from '@angular/core';
import { Stock, StockService } from '../services/stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  private stock:Stock;
  constructor(public services: StockService) { }

  ngOnInit() {
    this.stock = this.services.getStock();
  }

}
