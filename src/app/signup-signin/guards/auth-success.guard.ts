import { CanActivateFn } from '@angular/router';

export const authSuccessGuard: CanActivateFn = (route, state) => {
  return true;
};
