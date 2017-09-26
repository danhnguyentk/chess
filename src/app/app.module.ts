import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from './core/common/common.module';
import { AppComponent } from './app.component';
import { ROUTING} from './app-routing.module';
import { ChessModule } from './chess/chess.module';
import { HomeModule } from './home/home.module';
import { LayoutModule } from './core/layout/layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ROUTING,
    CommonModule,
    ChessModule,
    HomeModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
