import {
  Routes,
  RouterModule
} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CreateChessComponent } from './components/create-chess/create-chess.component';
import { PlayChessComponent } from './components/play-chess/play-chess.component';
import { ListChessComponent } from './components/list-chess/list-chess.component';
import { AuthGuard } from '../auth/services/auth.guard';

export const routes: Routes = [
  {
    path: 'create-chess', component: CreateChessComponent, canActivate: [ AuthGuard ]
  },
  {
    path: 'play-chess', component: PlayChessComponent, canActivate: [ AuthGuard ]
  },
  {
    path: 'list-chess', component: ListChessComponent, canActivate: [ AuthGuard ]
  }
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(routes);
