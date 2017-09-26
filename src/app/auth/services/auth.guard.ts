import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { UserInfo } from '../models/user-info.model';
import { AuthService } from './auth.service';
import { LocalStorageService } from '../../core/common/services/local-storage.service';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    public localStorageService: LocalStorageService,
    public authService: AuthService,
    public router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const userInfo: UserInfo = this.localStorageService.getCurrentUserInfo();
    if (state.url === '/home') {
      return true;
    }
    if (userInfo) {
      this.authService.userInfo$.next(userInfo);
      return true;
    } else {
      this.router.navigateByUrl('/home');
      return false;
    }
  }

}
