import { TestBed, inject } from '@angular/core/testing';

import { Stock4Service } from './stock4.service';

describe('Stock4Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Stock4Service]
    });
  });

  it('should be created', inject([Stock4Service], (service: Stock4Service) => {
    expect(service).toBeTruthy();
  }));
});
