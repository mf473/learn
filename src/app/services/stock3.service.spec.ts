import { TestBed, inject } from '@angular/core/testing';

import { Stock3Service } from './stock3.service';

describe('Stock3Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Stock3Service]
    });
  });

  it('should be created', inject([Stock3Service], (service: Stock3Service) => {
    expect(service).toBeTruthy();
  }));
});
