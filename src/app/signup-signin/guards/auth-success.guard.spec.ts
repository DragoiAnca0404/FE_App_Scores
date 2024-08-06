import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authSuccessGuard } from './auth-success.guard';

describe('authSuccessGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authSuccessGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
