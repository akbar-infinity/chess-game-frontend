import { ChessPiece, ChessPieceColor, ChessPieceMove, Color, Position } from "./types";

export class Queen implements ChessPiece {
  image = '';
  name = 'Queen';
  isAlive = true;
  position: Position;

  constructor(public color: ChessPieceColor) {
    if (this.color === ChessPieceColor.BLACK) {
      this.position = {
        row: 1,
        column: 4
      };
      this.image = 'https://maxcdn.icons8.com/iOS7/PNG/25/Gaming/queen_filled-25.png';
    } else {
      this.position = {
        row: 8,
        column: 4
      }
      this.image = 'https://maxcdn.icons8.com/iOS7/PNG/25/Gaming/queen-25.png';
    }
  }

  getPossibleMoves(): Position[] {
    return []
  }

  // TODO check why typescript doesn't throw error for move method properties
  move(destinationPosition: Position) {
    this.position = destinationPosition;
  }

}
