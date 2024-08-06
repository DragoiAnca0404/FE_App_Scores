import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { userIsLoginGuard } from './user-is-login.guard';

describe('userIsLoginGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => userIsLoginGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
