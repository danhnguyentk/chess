import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppConfig } from '../../../core/common/services/app-config.service';

@Component({
  selector: 'app-play-chess',
  templateUrl: './play-chess.component.html',
  styleUrls: ['./play-chess.component.scss']
})
export class PlayChessComponent implements OnInit {
  pieces: number[] = this.appConfig.PIECES_DEFAULT;
  color: number[] = this.appConfig.COLOR_DEFAULT;
  posPieceSelected: number;
  moves: any[] = [];

  constructor(public route: ActivatedRoute, public appConfig: AppConfig) { }

  ngOnInit() {
    if (this.route.snapshot.queryParams) {
      this.pieces = this.route.snapshot.queryParams['pieces'];
      this.color = this.route.snapshot.queryParams['color'];
    }

  }

  /*
    Select piece to move or select to where what piece is moved
   */
  onSelectBoard(pos: number) {
    // If user already piece before => move to new pos
    if (this.posPieceSelected && this.posPieceSelected !== pos) {
      this.movePiece(this.posPieceSelected, pos);
      this.posPieceSelected = null;
      return;
    }
    // Else assign pos to pos piece selected
    this.posPieceSelected = pos;
  }

  /*
    Move piece from old pos to new pos
   */
  movePiece(oldPos: number, newPos: number) {
    this.moves.push({ oldPos: oldPos, oldPiece: this.pieces[oldPos], newPos: newPos, newPiece: this.pieces[newPos]});
    this.pieces[newPos] = this.pieces[oldPos];
    this.color[newPos] = this.color[oldPos];
    this.pieces[oldPos] = 0;
    this.color[oldPos] = 0;
  }



}
