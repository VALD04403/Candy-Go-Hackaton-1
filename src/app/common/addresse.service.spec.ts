import { TestBed } from '@angular/core/testing';

import { AddresseService } from './addresse.service';

describe('AddresseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddresseService = TestBed.get(AddresseService);
    expect(service).toBeTruthy();
  });
});
