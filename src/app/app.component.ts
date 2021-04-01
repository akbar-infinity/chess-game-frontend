import { Component, OnInit } from '@angular/core';
import { Rook } from './models/rook.model';
import { Knight } from './models/kinght.model';
import { King } from './models/king.model';
import { Queen } from './models/queen.model';
import { Bishop } from './models/bishop.model';
import { Pawn } from './models/pawn.model';
import { ChessPiece } from './models/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'chess-app';

  rowValues = [1, 2, 3, 4, 5, 6, 7, 8];
  columnValues = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  positions = [];

  moves = [
    {
      piece: {
        name: 'Rook',
        type: 'White',
        positions: {
          row: 8,
          column: 8
        }
      },
      source: {
        row: 2,
        column: 1
      },
      destination: {
        row: 4,
        column: 1
      },
    }
  ]

  ngOnInit() {

    const whitePawns = [];
    const blackPawns = [];
    for(let i = 1; i < 9; i++) {
      const whitePawn = new Pawn('White', { row: 7, column: i });
      const blackPawn = new Pawn('Black', { row: 2, column: i });
      whitePawns.push(whitePawn);
      blackPawns.push(blackPawn);
    }

    const blackRook1 = new Rook('Black', { row: 1, column: 1 });
    const blackKnight1 = new Knight('Black', { row: 1, column: 2 });
    const blackBishop1 = new Bishop('Black', { row: 1, column: 3 });
    const blackQueen = new Queen('Black');
    const blackKing = new King('Black');
    const blackBishop2 = new Bishop('Black', { row: 1, column: 6 });
    const blackKnight2 = new Knight('Black', { row: 1, column: 7 });
    const blackRook2 = new Rook('Black', { row: 1, column: 8 });
    let row1 = [blackRook1, blackKnight1, blackBishop1, blackQueen, blackKing, blackBishop2, blackKnight2, blackRook2];
    this.positions.push(row1);
    this.positions.push(blackPawns);

    for (let row = 3; row < 7; row++) {
      this.positions.push(['', '','', '','', '','', ''])
    }

    this.positions.push(whitePawns);

    const whiteRook1 = new Rook('White', { row: 8, column: 1 });
    const whiteKnight1 = new Knight('White', { row: 8, column: 2 });
    const whiteBishop1 = new Bishop('White', { row: 8, column: 3 });
    const whiteQueen = new Queen('White');
    const whiteKing = new King('White');
    const whiteBishop2 = new Bishop('White', { row: 8, column: 6 });
    const whiteKnight2 = new Knight('White', { row: 8, column: 7 });
    const whiteRook2 = new Rook('White', { row: 8, column: 8 });
    let row8 = [whiteRook1, whiteKnight1, whiteBishop1, whiteQueen, whiteKing, whiteBishop2, whiteKnight2, whiteRook2];
    this.positions.push(row8);

    console.log('positions : ', this.positions);

  }

  isDarkBackground(row: number, column: number): boolean {

    row = row + 1;
    column = column + 1;
    if (row % 2 === 1 && column % 2 === 0) {
      return true;
    }
    if (row % 2 === 0 && column % 2 === 1) {
      return true;
    }
    return false;
  }

  getInitialPosition(row: number, column: number, className: string): boolean {
    row = row + 1;
    column = column + 1;
    switch (className.toUpperCase()) {
      case 'BP':
        if (row === 2) return true;
        break;
      case 'WP':
        if (row === 7) return true;
        break;
      case 'BR':
        if (row === 1 && (column === 1 || column === 8)) return true;
        break;
      case 'WR':
        if (row === 8 && (column === 1 || column === 8)) return true;
        break;
      case 'BH':
        if (row === 1 && (column === 2 || column === 7)) return true;
        break;
      case 'WH':
        if (row === 8 && (column === 2 || column === 7)) return true;
        break;
      case 'BB':
        if (row === 1 && (column === 3 || column === 6)) return true;
        break;
      case 'WB':
        if (row === 8 && (column === 3 || column === 6)) return true;
        break;
      case 'WQ':
        if (row === 8 && column === 4) return true;
        break;
      case 'BQ':
        if (row === 1 && column === 4) return true;
        break;
      case 'WK':
        if (row === 8 && column === 5) return true;
        break;
      case 'BK':
        if (row === 1 && column === 5) return true;
        break;
    }
    return false;
  }

  onPieceSelect(row: number, column: number) {
    console.log('row : ', row, ' column : ', column, this.positions[row][column]);

    if (this.positions[row][column] !== '') {
      this.positions[row][column].getPossibleMoves();
    }

  }
}
