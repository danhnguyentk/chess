import {
  Routes,
  RouterModule
} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


export const routes: Routes = [
  {
    path: '', redirectTo: 'create-chess', pathMatch: 'full'
  }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(routes);
