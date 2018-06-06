import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import { StockService } from './services/stock.service';
import { Stock2Component } from './stock2/stock2.component';
import { LoggerService } from './services/logger.service';
import { Stock3Component } from './stock3/stock3.component';
import { Stock4Component } from './stock4/stock4.component';
import { Stock3Service } from './services/stock3.service';
import { Pipe1Pipe } from './pipe/pipe1.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    Stock2Component,
    Stock3Component,
    Stock4Component,
    Pipe1Pipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide:StockService,useFactory:(log: LoggerService,onOff)=>{
      console.log(onOff)  
      if(onOff){
          return new StockService(log);
        }else{
          return new Stock3Service(log);
        }
    },deps: [LoggerService, "isOk"]},
    ,LoggerService,
    {provide:"isOk",useValue:false}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
