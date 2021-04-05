import { Component, OnInit } from '@angular/core';
import { Rook } from './models/rook.model';
import { Knight } from './models/kinght.model';
import { King } from './models/king.model';
import { Queen } from './models/queen.model';
import { Bishop } from './models/bishop.model';
import { Pawn } from './models/pawn.model';
import { ChessPiece, ChessPieceColor, Position } from './models/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'chess-app';
  playingWithBlack = true;
  rowValues = [1, 2, 3, 4, 5, 6, 7, 8];
  columnValues = [1, 2, 3, 4, 5, 6, 7, 8];

  positions: Array<(ChessPiece | '')[]> = [];

  hightlatedPositions: Position[] = [];

  moves = [
    {
      piece: {
        name: 'Rook',
        type: 'White',
        positions: {
          row: 8,
          column: 8,
        },
      },
      source: {
        row: 2,
        column: 1,
      },
      destination: {
        row: 4,
        column: 1,
      },
    },
  ];

  ngOnInit() {
    const whitePawns = [];
    const blackPawns = [];
    for (let i = 1; i < 9; i++) {
      const whitePawn = new Pawn(ChessPieceColor.WHITE, { row: 7, column: i });
      const blackPawn = new Pawn(ChessPieceColor.BLACK, { row: 2, column: i });
      whitePawns.push(whitePawn);
      blackPawns.push(blackPawn);
    }

    const blackRook1 = new Rook(ChessPieceColor.BLACK, { row: 1, column: 1 });
    const blackKnight1 = new Knight(ChessPieceColor.BLACK, { row: 1, column: 2 });
    const blackBishop1 = new Bishop(ChessPieceColor.BLACK, { row: 1, column: 3 });
    const blackQueen = new Queen(ChessPieceColor.BLACK);
    const blackKing = new King(ChessPieceColor.BLACK);
    const blackBishop2 = new Bishop(ChessPieceColor.BLACK, { row: 1, column: 6 });
    const blackKnight2 = new Knight(ChessPieceColor.BLACK, { row: 1, column: 7 });
    const blackRook2 = new Rook(ChessPieceColor.BLACK, { row: 1, column: 8 });
    let row1 = [
      blackRook1,
      blackKnight1,
      blackBishop1,
      blackQueen,
      blackKing,
      blackBishop2,
      blackKnight2,
      blackRook2,
    ];
    this.positions.push(row1);
    this.positions.push(blackPawns);

    for (let row = 3; row < 7; row++) {
      this.positions.push(['', '', '', '', '', '', '', '']);
    }

    this.positions.push(whitePawns);

    const whiteRook1 = new Rook(ChessPieceColor.WHITE, { row: 8, column: 1 });
    const whiteKnight1 = new Knight(ChessPieceColor.WHITE, { row: 8, column: 2 });
    const whiteBishop1 = new Bishop(ChessPieceColor.WHITE, { row: 8, column: 3 });
    const whiteQueen = new Queen(ChessPieceColor.WHITE);
    const whiteKing = new King(ChessPieceColor.WHITE);
    const whiteBishop2 = new Bishop(ChessPieceColor.WHITE, { row: 8, column: 6 });
    const whiteKnight2 = new Knight(ChessPieceColor.WHITE, { row: 8, column: 7 });
    const whiteRook2 = new Rook(ChessPieceColor.WHITE, { row: 8, column: 8 });
    let row8 = [
      whiteRook1,
      whiteKnight1,
      whiteBishop1,
      whiteQueen,
      whiteKing,
      whiteBishop2,
      whiteKnight2,
      whiteRook2,
    ];
    this.positions.push(row8);

    // this.positions[4][3] = new Bishop('White', { row: 5, column: 4 });
    console.log('positions : ', this.positions);

    // let kking = new King('White');
    // kking.move({ row: 5, column: 7 });
    // this.positions[4][6] = kking;

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

  onPieceSelect(row: number, column: number) {
    console.log('row : ', row + 1, ' column : ', column + 1, this.positions[row][column]);

    if (this.positions[row][column] !== '') {
      this.hightlatedPositions = (<ChessPiece>this.positions[row][column]).getPossibleMoves();
      console.log('positions : ', this.hightlatedPositions);
    }
  }

  isHighlated(row, column) {
    row++;
    column++;
    let hightlight = false;
    for (let index = 0; index < this.hightlatedPositions.length; index++) {
      if (
        this.hightlatedPositions[index].row === row &&
        this.hightlatedPositions[index].column === column
      ) {
        hightlight = true;
        break;
      }
    }
    return hightlight;
  }


}
