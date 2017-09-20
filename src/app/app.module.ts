import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from './core/common/common.module';
import { AppComponent } from './app.component';
import { ROUTING} from './app-routing.module';
import { ChessModule } from './chess/chess.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ROUTING,
    ChessModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
