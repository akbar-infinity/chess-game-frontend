import { ChessPiece, ChessPieceMove, Color, Position } from "./types";

export class Bishop implements ChessPiece {
  image = '';
  name = 'Bishop';
  isAlive = true;

  constructor(public color: Color, public position: Position) {
    if (color.toUpperCase() === 'BLACK') {
      this.image = 'https://maxcdn.icons8.com/iOS7/PNG/25/Gaming/bishop_filled-25.png';
    } else {
      this.image = 'https://maxcdn.icons8.com/iOS7/PNG/25/Gaming/bishop-25.png';
    }
  }

  getPossibleMoves(): void {
    console.log('print possible moves', this.position);

      // input {row: 8, column: 6}

      // move rule : increment/decrement rows & increment/decrement columns
      // condition : row / column can not be greater than 8 & can not be smaller than 1

      // output [
      //   {row: 7, column: 7},
      //   {row: 6, column: 8},
      //   {row: 7, column: 5},
      //   {row: 6, column: 4},
      //   {row: 5, column: 3},
      //   {row: 4, column: 2},
      //   {row: 3, column: 1}
      // ]
  }

  // TODO check why typescript doesn't throw error for move method properties
  move(destinationPosition: Position) {
    this.position = destinationPosition;
  }

}
