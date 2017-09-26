import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  AngularFireDatabase,
  FirebaseListObservable
} from 'angularfire2/database';

import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'list-chess',
  templateUrl: './list-chess.component.html',
  styleUrls: ['./list-chess.component.scss']
})
export class ListChessComponent implements OnInit {

  listChess: any;

  constructor(
    public db: AngularFireDatabase,
    public authService: AuthService,
    public router: Router) { }

  ngOnInit() {
    this.db.list(`/chesses/${this.authService.userInfo.uid}`).take(1).subscribe((data: any) => {
      this.listChess = data;
    });
  }

  onPlayChess(chess: any) {
    this.router.navigate(['/play-chess'], {
      queryParams: { uid: this.authService.userInfo.uid, chessId: chess.id }
    });
  }

}
