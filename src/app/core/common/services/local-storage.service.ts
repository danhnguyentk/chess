import { Injectable } from '@angular/core';

import { UserToken } from '../../../auth/models/user-token.model';
import { UserInfo } from '../../../auth/models/user-info.model';

@Injectable()
export class LocalStorageService {
  private CURRENT_USER_TOKEN_KEY: string = 'userToken';
  private CURRENT_USER_KEY: string = 'userInfo';

  constructor() { }

  setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem<T>(key: string): T {
    return JSON.parse(localStorage.getItem(key));
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }

  setCurrentUserToken(value: any) {
    this.setItem(this.CURRENT_USER_TOKEN_KEY, value);
  }

  getCurrentUserToken(): UserToken {
    return this.getItem<UserToken>(this.CURRENT_USER_TOKEN_KEY);
  }

  removeCurrentUserToken() {
    return this.removeItem(this.CURRENT_USER_TOKEN_KEY);
  }

  setCurrentUserInfo(value: any) {
    this.setItem(this.CURRENT_USER_KEY, value);
  }

  getCurrentUserInfo(): UserInfo {
    return this.getItem<UserInfo>(this.CURRENT_USER_KEY);
  }

  removeCurrentUserInfo() {
    return this.removeItem(this.CURRENT_USER_KEY);
  }
}
