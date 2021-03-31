import { ChessPiece, Color, Position } from "./types";

export class Queen implements ChessPiece {
  name = 'Queen';
  isAlive = true;
  position: Position;

  constructor(public color: Color) {
    if (this.color.toUpperCase() === 'BLACK') {
      this.position = {
        row: 1,
        column: 4
      };
    } else {
      this.position = {
        row: 8,
        column: 4
      }
    }
  }

  getPossibleMoves(): void {

  }

  // TODO check why typescript doesn't throw error for move method properties
  move(destinationPosition: Position) {
    this.position = destinationPosition;
  }

}
