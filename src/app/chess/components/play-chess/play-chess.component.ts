import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ChangeDetectorRef
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
  AngularFireDatabase,
  FirebaseListObservable
} from 'angularfire2/database';
import * as _ from 'lodash';

import { AppConfig } from '../../../core/common/services/app-config.service';
import { AuthService } from '../../../auth/services/auth.service';

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
  currentIndexMove: number = -1;
  listChess$: FirebaseListObservable<any[]>; // list chess
  listChess: any;
  chess: any;
  historyMove: any;
  key: string;

  @ViewChild('scrollHistoryMove') scrollHistoryMove: ElementRef;

  constructor(
    public route: ActivatedRoute,
    public appConfig: AppConfig,
    public db: AngularFireDatabase,
    public cd: ChangeDetectorRef,
    public authService: AuthService) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params: any) => {
      const uid: string = params['uid'];
      const chessId: string = params['chessId'];
      this.listChess$ = this.db.list(`/chesses/${uid}`, {
        query: {
        }
      });
      this.listChess$.take(1).subscribe((data: any) => {
        this.listChess = data;
        this.chess = _.find(data, { id: +chessId });
        this.pieces = this.chess.pieces;
        this.color  = this.chess.color;
        this.moves = this.chess.moves || [];
        this.key = this.chess.$key;
      });
    });
    if (this.route.snapshot.queryParams) {
      this.pieces = this.route.snapshot.queryParams['pieces'];
      this.color = this.route.snapshot.queryParams['color'];
    }

  }

  /*
    Select piece to move or select to where what piece is moved
   */
  onSelectBoard(pos: number) {
    // Is user own chess, allow use change move
    if (this.chess.email !== this.authService.userInfo.email) {
      return;
    }

    // If user already piece before => move to new pos
    if (_.isInteger(this.posPieceSelected) && this.posPieceSelected !== pos) {
      // Delete rest element of array from current index move
      if (this.currentIndexMove !== this.moves.length - 1) {
        this.moves = this.moves.slice(0, this.currentIndexMove + 1);
      }
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
    this.moves.push(
      { oldPos: +oldPos,
        oldPiece: +this.pieces[oldPos],
        oldColor: +this.color[oldPos],
        newPos: +newPos,
        newPiece: +this.pieces[newPos],
        newColor: +this.color[newPos],
      });
    this.pieces[newPos] = this.pieces[oldPos];
    this.color[newPos] = this.color[oldPos];
    this.pieces[oldPos] = 0;
    this.color[oldPos] = 0;

    this.currentIndexMove++;
    this.scrollToBottom();
  }

  // Scroll element to bottom element
  scrollToBottom(): void {
    setTimeout(() => {
      this.scrollHistoryMove.nativeElement.scrollTop = this.scrollHistoryMove.nativeElement.scrollHeight;
    }, 100);
  }

  /*
    Back move
   */
  onBackMove(): void {
    this.posPieceSelected = null;
    const moveBack: any = this.moves[this.currentIndexMove];
    this.currentIndexMove--;
    this.pieces[moveBack.oldPos] = moveBack.oldPiece;
    this.color[moveBack.oldPos] = moveBack.oldColor;
    this.pieces[moveBack.newPos] = moveBack.newPiece;
    this.color[moveBack.newPos] = moveBack.newColor;
  }

  /*
    Next move
   */
  onNextMove(): void {
    this.posPieceSelected = null;
    this.currentIndexMove++;
    const moveNext: any = this.moves[this.currentIndexMove];
    this.pieces[moveNext.oldPos] = 0;
    this.color[moveNext.oldPos] = 0;
    this.pieces[moveNext.newPos] = moveNext.oldPiece;
    this.color[moveNext.newPos] = moveNext.oldColor;
  }

  /*
    Save history moves
   */
  onSaveMove(): void {
    this.listChess$.update(this.key, { moves: this.moves });
  }

}
