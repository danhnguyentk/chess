import {
  Routes,
  RouterModule
} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


export const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(routes);
