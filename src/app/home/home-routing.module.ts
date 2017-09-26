import {
  Routes,
  RouterModule
} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home.component';
import { AuthGuard } from '../auth/services/auth.guard';

export const routes: Routes = [
  {
    path: 'home', component: HomeComponent, canActivate: [ AuthGuard ]
  }
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(routes);
