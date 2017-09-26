import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { DropdownModule } from 'ngx-dropdown';

import { environment } from '../../environments/environment';
import { UserDropdownComponent } from './components/user-dropdown/user-dropdown.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';

const MODULES = [
  CommonModule,
  DropdownModule,
  AngularFireModule.initializeApp(environment.firebaseConfig),
  AngularFireDatabaseModule,
  AngularFireAuthModule
];

const PIPES = [
];

const DIRECTIVES = [
];

const COMPONENTS = [
  UserDropdownComponent
];

const SERVICES = [
  AuthService,
  AuthGuard
];

@NgModule({
  imports: [
    ...MODULES
  ],
  declarations: [
    ...COMPONENTS,
    ...PIPES,
    ...DIRECTIVES
  ],
  providers: [
    ...SERVICES
  ],
  exports: [
    ...COMPONENTS,
    ...PIPES,
    ...DIRECTIVES,
  ]
})

export class AuthModule { }
