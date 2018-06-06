import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
//import 'rxjs/Rx';

@Component({
  selector: 'app-stock5',
  templateUrl: './stock5.component.html',
  styleUrls: ['./stock5.component.css']
})
export class Stock5Component implements OnInit {

  private searchFilter: FormControl = new FormControl();
  private word:string;

  constructor() { }

  ngOnInit() {
    this.searchFilter.valueChanges
      //.debounceTime(500)
      .subscribe(value=>this.word = value);
  }

}
