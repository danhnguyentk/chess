import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../auth/services/auth.service';
import { UserInfo } from '../../../auth/models/user-info.model';
import { AppConfig } from '../../../core/common/services/app-config.service';
import { LocalStorageService } from '../../../core/common/services/local-storage.service';
import { Logger } from '../../../core/common/services/logger.service';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  userInfo: UserInfo;

  constructor(
    public authService: AuthService,
    public appConfog: AppConfig,
    public localStorageService: LocalStorageService,
    public cd: ChangeDetectorRef,
    public router: Router,
    public logger: Logger) { }

  ngOnInit() {
    this.authService.userInfo$.subscribe((userInfo: UserInfo) => {
      this.userInfo = userInfo;
      this.cd.detectChanges();
    });
  }

  // Login with facebook
  onLoginWithFacebook() {
    this.authService.loginWithFacebook()
      .subscribe(data => {
        this.logger.info('User auth:', data);
        const userInfo: UserInfo = {
          uid: data.user.uid,
          avatar: data.user.photoURL || this.appConfog.USER_INFO_DEFAULT.avatar,
          name: data.user.displayName || this.appConfog.USER_INFO_DEFAULT.name,
          email: data.user.email || this.appConfog.USER_INFO_DEFAULT.email
        };
        this.userInfo = userInfo;
        this.authService.userInfo = userInfo;
        this.localStorageService.setCurrentUserInfo(userInfo);
        this.cd.detectChanges();
      });

  }

  // Logout apps
  onLogout() {
    this.authService.logout().subscribe(() => {
      this.userInfo = null;
      this.authService.userInfo = null;
      this.localStorageService.removeCurrentUserInfo();
      this.cd.detectChanges();
      this.router.navigateByUrl('/home');
    });
  }
}
