import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule as CommonModuleAngular } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppConfig } from './services/app-config.service';
import { HttpWrapperService } from './services/http-wrapper.service';
import { LocalStorageService } from './services/local-storage.service';
import { Logger } from './services/logger.service';

const MODULES = [
  HttpModule,
  RouterModule,
  CommonModuleAngular
];

const PIPES = [
];

const DIRECTIVES = [
];

const COMPONENTS = [
];

const SERVICES = [
  AppConfig,
  HttpWrapperService,
  LocalStorageService,
  Logger
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
export class CommonModule { }
