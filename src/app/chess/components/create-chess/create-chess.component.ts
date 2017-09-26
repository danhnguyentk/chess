import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';
import {
  NavigationExtras,
  Router
} from '@angular/router';

import {
  AngularFireDatabase,
  FirebaseListObservable
} from 'angularfire2/database';

import { AppConfig } from '../../../core/common/services/app-config.service';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-create-chess',
  templateUrl: './create-chess.component.html',
  styleUrls: ['./create-chess.component.scss']
})
export class CreateChessComponent implements OnInit {

  listChess: FirebaseListObservable<any[]>; // list chess
  pieces: number[] = this.appConfig.PIECES_DEFAULT;
  color: number[] = this.appConfig.COLOR_DEFAULT;
  showErrorAdd: boolean = false;

  // side: number = 1; // First red move
  // xside: number = 2;

  posPieceSelected: number; // piece is selected

  constructor(
    public appConfig: AppConfig,
    public router: Router,
    public db: AngularFireDatabase,
    public authService: AuthService,
    public cd: ChangeDetectorRef) {
    this.listChess = db.list(`/chesses/${this.authService.userInfo.uid}`);
  }

  ngOnInit() {
    this.pieces = this.appConfig.PIECES_DEFAULT;
    this.color = this.appConfig.COLOR_DEFAULT;
    this.cd.detectChanges();
    this.cd.markForCheck();
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
    Delete piece when user right click mouse
   */
  onDeletePiece(pos: number) {
    this.deletePiece(pos);
    this.posPieceSelected = null;
    return false;
  }

  /*
    Add piece with color
   */
  onAddPiece(piece: number, color: number) {
    let posEmpty: number = 0 // Assign to pos 0

    // Check piece at that pos empty or not empty, if have piece at that pos, assign another pos
    while (this.pieces[posEmpty] && posEmpty < 90) {
      posEmpty++;
    }
    if (posEmpty < 90) {
      this.addPiece(piece, color, posEmpty);
    }
  }

  /*
    Reset board
   */
  onResetBoard() {
    this.pieces = this.appConfig.PIECES_DEFAULT;
    this.color = this.appConfig.COLOR_DEFAULT;
  }

  /*
    Empty board
   */
  onEmptyBoard() {
    this.pieces = this.appConfig.PIECES_EMPTY;
    this.color = this.appConfig.COLOR_EMPTY;
  }

  /*
    Empty board
   */
  onSaveBoard(nameChess: string) {
    if (!nameChess) {
      this.showErrorAdd = true;
      return;
    }
    const navigationExtras: NavigationExtras = { queryParams: { pieces: this.pieces, color: this.color } };
    const id: number = new Date().getTime();
    this.listChess.push({
      email: this.authService.userInfo.email,
      pieces: this.pieces,
      color: this.color,
      id: id,
      name: nameChess
    });
    this.router.navigate(['play-chess', id]);
  }

  /*
    Move piece from old pos to new pos
   */
  movePiece(oldPos: number, newPos: number) {
    this.pieces[newPos] = this.pieces[oldPos];
    this.color[newPos] = this.color[oldPos];
    this.pieces[oldPos] = 0;
    this.color[oldPos] = 0;
  }

  /*
    Delete piece at pos
   */
  deletePiece(pos: number) {
    this.pieces[pos] = 0;
    this.color[pos] = 0;
  }

  /*
    Add piece with color at pos on board
   */
  addPiece(piece: number, color: number, pos: number) {
    this.pieces[pos] = piece;
    this.color[pos] = color;
  }

}
