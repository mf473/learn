import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import { StockService } from './services/stock.service';
import { Stock2Component } from './stock2/stock2.component';
import { LoggerService } from './services/logger.service';
import { Stock3Component } from './stock3/stock3.component';
import { Stock4Component } from './stock4/stock4.component';
import { Stock3Service } from './services/stock3.service';
import { Pipe1Pipe } from './pipe/pipe1.pipe';
import { Pipe2Pipe } from './pipe/pipe2.pipe';
import { Stock5Component } from './stock5/stock5.component';

@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    Stock2Component,
    Stock3Component,
    Stock4Component,
    Pipe1Pipe,
    Pipe2Pipe,
    Stock5Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
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
