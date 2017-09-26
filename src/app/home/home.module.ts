import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { ROUTING } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ROUTING
  ],
  declarations: [ HomeComponent ]
})
export class HomeModule { }
