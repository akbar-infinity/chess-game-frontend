import { ChessPiece, ChessPieceMove, Color, Position } from "./types";

export class King implements ChessPiece {
  image = '';
  name = 'King';
  isAlive = true;
  position: Position;

  constructor(public color: Color) {
    if (this.color.toUpperCase() === 'BLACK') {
      this.position = {
        row: 1,
        column: 5
      };
      this.image = 'https://maxcdn.icons8.com/iOS7/PNG/25/Gaming/king_filled-25.png';
    } else {
      this.position = {
        row: 8,
        column: 5
      }
      this.image = 'https://maxcdn.icons8.com/iOS7/PNG/25/Gaming/king-25.png';
    }
  }

  getPossibleMoves(): void {

  }

  // TODO check why typescript doesn't throw error for move method properties
  move(destinationPosition: Position) {
    this.position = destinationPosition;
  }

}
