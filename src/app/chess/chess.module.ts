import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CreateChessComponent } from './components/create-chess/create-chess.component';
import { ROUTING } from './chess-routing.module';
import { PlayChessComponent } from './components/play-chess/play-chess.component';
import { SignMovePipe } from './pipes/sign-move.pipe';
import { ListChessComponent } from './components/list-chess/list-chess.component';

const MODULES = [
  RouterModule,
  CommonModule,
  ROUTING
];

const PIPES = [
  SignMovePipe
];

const DIRECTIVES = [
];

const COMPONENTS = [
  CreateChessComponent,
  PlayChessComponent
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
    ...DIRECTIVES,
    ListChessComponent
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

export class ChessModule { }
