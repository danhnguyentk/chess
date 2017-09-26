import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule as Dropdown } from 'ngx-dropdown';

@NgModule({
  imports: [
    CommonModule,
    Dropdown
  ],
  declarations: [],
  exports: [ Dropdown ]
})
export class DropdownModule { }
