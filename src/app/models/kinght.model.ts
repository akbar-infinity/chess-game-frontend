import { ChessPiece, ChessPieceMove, Color, Position } from "./types";

export class Knight implements ChessPiece {
  image = '';
  name = 'Knight';
  isAlive = true;

  constructor(public color: Color, public position: Position) {
    if (color.toUpperCase() === 'BLACK') {
      this.image = 'https://maxcdn.icons8.com/iOS7/PNG/25/Gaming/knight_filled-25.png';
    } else {
      this.image = 'https://maxcdn.icons8.com/iOS7/PNG/25/Gaming/knight-25.png';
    }
  }

  getPossibleMoves(): void {

  }

  // TODO check why typescript doesn't throw error for move method properties
  move(destinationPosition: Position) {
    this.position = destinationPosition;
  }

}
