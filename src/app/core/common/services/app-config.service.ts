import { Injectable } from '@angular/core';

import { environment } from '../../../../environments/environment';

@Injectable()
export class AppConfig {

  API = {
    ROOT_URL: environment.ROOT_URL
  };

  BOARD_SIZE = 90; // Size 9*10

  PIECES_DEFAULT: number[] = [
    6, 4, 3, 2, 7, 2, 3, 4, 6,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 5, 0, 0, 0, 0, 0, 5, 0,
    1, 0, 1, 0, 1, 0, 1, 0, 1,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    1, 0, 1, 0, 1, 0, 1, 0, 1,
    0, 5, 0, 0, 0, 0, 0, 5, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    6, 4, 3, 2, 7, 2, 3, 4, 6
  ];

  COLOR_DEFAULT: number[] = [
    2, 2, 2, 2, 2, 2, 2, 2, 2,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 2, 0, 0, 0, 0, 0, 2, 0,
    2, 0, 2, 0, 2, 0, 2, 0, 2,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    1, 0, 1, 0, 1, 0, 1, 0, 1,
    0, 1, 0, 0, 0, 0, 0, 1, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    1, 1, 1, 1, 1, 1, 1, 1, 1
  ];

  PIECES_EMPTY: number[] = [
    0, 0, 0, 0, 7, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 7, 0, 0, 0, 0,
  ];

  COLOR_EMPTY: number[] = [
    0, 0, 0, 0, 2, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 1, 0, 0, 0, 0,
  ];

  // Sign piece
  PIECE = {
    PAWN: 1,
    BISHOP: 2,
    ELEPHANT: 3,
    KNIGHT: 4,
    CANNON: 5,
    ROOK: 6,
    KING: 7,
    EMPTY: 0
  };


  // Side red or black
  SIDE = {
    RED: 1,
    BLACK: 2,
    EMPTY: 0
  };

  VALIDATION_MESSAGES = {
    invalidConfirmPassword: 'The confirm password does\'t match',
    required: `<%= name %> is required.`,
    invalidEmail: 'Please enter a valid email address',
    minlength: `<%= name %> must be at least <%= errors.minlength.requiredLength %> characters long.`,
    maxlength: `<%= name %> can not be more than <%= errors.maxlength.requiredLength %> characters long.`,
    percentage: 'The total must 100%',
    invalidNewPassword: 'The new password should\'t same the old password'
  };

  // Pattern validate
  VALIDATIONS = {
    EMAIL_PATTERN: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  };
}
