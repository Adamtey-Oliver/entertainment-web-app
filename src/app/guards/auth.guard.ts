import {CanActivateFn, Router} from '@angular/router';
import {inject, INJECTOR} from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  if (
    typeof sessionStorage !== 'undefined' &&
    sessionStorage.getItem('email')
  ) {
    return true;
  } else {
    const router = inject(Router);
    return router.navigate(['login']);
  }
};
