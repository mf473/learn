import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Stock5Component } from './stock5.component';

describe('Stock5Component', () => {
  let component: Stock5Component;
  let fixture: ComponentFixture<Stock5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stock5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Stock5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
