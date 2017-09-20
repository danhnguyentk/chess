import {
  Routes,
  RouterModule
} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CreateChessComponent } from './components/create-chess/create-chess.component';

export const routes: Routes = [
  {
    path: 'create-chess', component: CreateChessComponent
  }
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(routes);
