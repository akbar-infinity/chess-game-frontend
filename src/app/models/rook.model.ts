import { ChessPiece, Color, Position } from "./types";

export class Rook implements ChessPiece {

  image = '';
  name = 'Rook';
  isAlive = true;

  constructor(public color: Color, public position: Position) {
    if (color.toUpperCase() === 'BLACK') {
      this.image = 'https://maxcdn.icons8.com/iOS7/PNG/25/Gaming/rook_filled-25.png';
    } else {
      this.image = 'https://maxcdn.icons8.com/iOS7/PNG/25/Gaming/rook-25.png';
    }
  }

  getPossibleMoves() {

  }

  move(destinationPosition: Position) {
    this.position = destinationPosition;
  }

}


