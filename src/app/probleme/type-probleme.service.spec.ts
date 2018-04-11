import { TestBed, inject } from '@angular/core/testing';

import { TypeProduitService } from './type-probleme.service';

describe('TypeProduitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypeProduitService]
    });
  });

  it('should be created', inject([TypeProduitService], (service: TypeProduitService) => {
    expect(service).toBeTruthy();
  }));
});
