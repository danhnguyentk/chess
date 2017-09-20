import { Injectable } from '@angular/core';

import { UserToken } from '../../../auth/models/user-token.model';

@Injectable()
export class LocalStorageService {
  private CURRENT_USER_TOKEN_KEY: string = 'userToken';

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
}
