import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import { StockService } from './services/stock.service';
import { Stock2Component } from './stock2/stock2.component';
import { LoggerService } from './services/logger.service';

@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    Stock2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [StockService,LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
