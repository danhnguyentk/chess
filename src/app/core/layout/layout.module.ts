import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'ngx-dropdown';

import { MainHeaderComponent } from './main-header/main-header.component';
import { AuthModule } from '../../auth/auth.module';

const MODULES = [
  CommonModule,
  RouterModule,
  AuthModule,
  DropdownModule
];

const PIPES = [
];

const DIRECTIVES = [
];

const COMPONENTS = [
  MainHeaderComponent
];

const SERVICES = [
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
export class LayoutModule { }
