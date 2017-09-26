import {
  Pipe,
  PipeTransform
} from '@angular/core';

import { AppConfig } from '../../core/common/services/app-config.service';

@Pipe({
  name: 'signMove'
})
export class SignMovePipe implements PipeTransform {

  constructor(public appConfig: AppConfig) {

  }

  transform(move: any, args?: any): any {
    let SIGN_PIECE: any = {
      1: 'B',
      2: 'S',
      3: 'T',
      4: 'M',
      5: 'P',
      6: 'X',
      7: 'Tg'
    };
    let oldPos: number; // pos by board, have value from 1 => 9
    let newPos: number; // pos by board, have value from 1 => 9
    let sign: string; // contain value ., /, -

    // If side old pos is red
    if (move.oldColor === this.appConfig.SIDE.RED) {
      oldPos = 9 - move.oldPos % 9;
      newPos = 9 - move.newPos % 9;
    } else { // If side is black
      oldPos = move.oldPos % 9 + 1;
      newPos = move.newPos % 9 + 1;
    }

    // Check sign
    if (Math.floor(move.oldPos / 9) === Math.floor(move.newPos / 9)) {
      sign = '-';
    } else if (move.oldPos < move.newPos) {
      if (move.oldColor === 1) {
        sign = '/';
      } else {
        sign = '.';
      }
    } else {
      if (move.oldColor === 1) {
        sign = '.';
      } else {
        sign = '/';
      }
    }

    return `${SIGN_PIECE[move.oldPiece]}${oldPos}${sign}${newPos}`;
  }

}
