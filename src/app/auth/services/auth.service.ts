import { Injectable } from '@angular/core';

import {
  AngularFireDatabase,
  FirebaseListObservable,
  FirebaseObjectObservable
} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Logger } from '../../core/common/services/logger.service';
import { UserInfo } from '../../auth/models/user-info.model';

@Injectable()
export class AuthService {

  userInfo: UserInfo;
  userInfo$: BehaviorSubject<UserInfo> = new BehaviorSubject<UserInfo>(null);

  constructor(
    public afAuth: AngularFireAuth,
    public logger: Logger) {

    this.userInfo$.subscribe((userInfo: UserInfo) => {
      this.userInfo = userInfo;
    });
  }

  loginWithFacebook(): Observable<any> {
    return Observable.fromPromise(this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()));
  }

  logout(): Observable<any> {
    return Observable.fromPromise(this.afAuth.auth.signOut());
  }

}
