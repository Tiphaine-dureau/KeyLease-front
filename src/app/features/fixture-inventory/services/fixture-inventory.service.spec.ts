import {TestBed} from '@angular/core/testing';

import {FixtureInventoryService} from './fixture-inventory.service';

describe('FixtureInventoryService', () => {
  let service: FixtureInventoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FixtureInventoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
