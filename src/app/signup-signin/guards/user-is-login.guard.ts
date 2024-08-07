import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { RegisterServiceService } from '../services/register-service.service';

export const userIsLoginGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot
) => {
  const authService = inject(RegisterServiceService);
  const router = inject(Router);

  const token = localStorage.getItem('authToken');
  if (token) {
    router.navigate(['/meciuri']);
    return false;
  } else {
    return true;
  }
};
