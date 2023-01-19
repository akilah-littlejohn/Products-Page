import { TestBed } from '@angular/core/testing';

import { FakeStoreDataService } from './fake-store-data.service';

describe('FakeStoreDataService', () => {
  let service: FakeStoreDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeStoreDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
