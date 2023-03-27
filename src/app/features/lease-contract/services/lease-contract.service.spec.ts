import {TestBed} from '@angular/core/testing';

import {LeaseContractService} from './lease-contract.service';

describe('LeaseContractService', () => {
  let service: LeaseContractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaseContractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
