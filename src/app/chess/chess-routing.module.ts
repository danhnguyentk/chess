import {
  Routes,
  RouterModule
} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CreateChessComponent } from './components/create-chess/create-chess.component';
import { PlayChessComponent } from './components/play-chess/play-chess.component';

export const routes: Routes = [
  {
    path: 'create-chess', component: CreateChessComponent,
  },
  {
    path: 'play-chess', component: PlayChessComponent
  }
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(routes);
