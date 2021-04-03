import { ChessPiece, ChessPieceColor, Color, Position } from "./types";

export class Rook implements ChessPiece {

  image = '';
  name = 'Rook';
  isAlive = true;

  constructor(public color: ChessPieceColor, public position: Position) {
    if (this.color === ChessPieceColor.BLACK) {
      this.image = 'https://maxcdn.icons8.com/iOS7/PNG/25/Gaming/rook_filled-25.png';
    } else {
      this.image = 'https://maxcdn.icons8.com/iOS7/PNG/25/Gaming/rook-25.png';
    }
  }

  getPossibleMoves(): Position[] {
    return []
  }

  move(destinationPosition: Position) {
    this.position = destinationPosition;
  }

}


