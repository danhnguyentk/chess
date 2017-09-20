import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndicatorLoaderComponent } from './indicator-loader.component';

const MODULES = [
  CommonModule,
];

const PIPES = [
];

const DIRECTIVES = [
];

const COMPONENTS = [
  IndicatorLoaderComponent
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
export class IndicatorLoaderModule { }
