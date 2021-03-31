import { ChessPiece, Color, Position } from "./types";

export class Rook implements ChessPiece {

  readonly name = 'Rook';
  isAlive = true;

  constructor(public color: Color, public position: Position) { }

  getPossibleMoves() {

  }

  move(destinationPosition: Position) {
    this.position = destinationPosition;
  }

}


