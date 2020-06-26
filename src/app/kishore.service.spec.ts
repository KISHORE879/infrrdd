import { TestBed } from '@angular/core/testing';

import { KishoreService } from './kishore.service';

describe('KishoreService', () => {
  let service: KishoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KishoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
