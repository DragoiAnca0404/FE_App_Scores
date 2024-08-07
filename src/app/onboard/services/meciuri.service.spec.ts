import { TestBed } from '@angular/core/testing';

import { MeciuriService } from './meciuri.service';

describe('MeciuriService', () => {
  let service: MeciuriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeciuriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
