import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthCoreService } from '../services/auth-core.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthCoreService,
              private router: Router) { }
  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
    const isLoginPage = state.url.indexOf('/auth/') !== -1;
    return this.checkLogin(isLoginPage);
  }

  private checkLogin(isLoginPage): boolean {
    if (!this.authService.isLogin()) {
      if ( isLoginPage) {
        return true;
      }
      this.router.navigate(['/auth/sign-in']);
      return false;
    } else if (this.authService.isLogin() && !isLoginPage) {
      return true;
    }

  }
}
