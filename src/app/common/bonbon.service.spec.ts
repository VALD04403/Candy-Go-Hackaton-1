import { TestBed } from '@angular/core/testing';

import { BonbonService } from './bonbon.service';

describe('BonbonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BonbonService = TestBed.get(BonbonService);
    expect(service).toBeTruthy();
  });
});
