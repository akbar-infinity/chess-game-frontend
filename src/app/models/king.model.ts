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

  getPossibleMoves(): Position[] {
    let output: Position[] = [];
    let currentPosition = { ...this.position };
    currentPosition.row += 1;
    if (currentPosition.row <= 8 && currentPosition.row >= 1 && currentPosition.column <= 8 && currentPosition.column >= 1) {
    output.push({ ...currentPosition });
    }

    currentPosition = { ...this.position };
    currentPosition.row += 1;
    currentPosition.column += 1;
    if (currentPosition.row <= 8 && currentPosition.row >= 1 && currentPosition.column <= 8 && currentPosition.column >= 1) {
    output.push({ ...currentPosition });
    }

    currentPosition = { ...this.position };
    currentPosition.row += 1;
    currentPosition.column -= 1;
    if (currentPosition.row <= 8 && currentPosition.row >= 1 && currentPosition.column <= 8 && currentPosition.column >= 1) {
    output.push({ ...currentPosition });
    }

    currentPosition = { ...this.position };
    currentPosition.column += 1;
    if (currentPosition.row <= 8 && currentPosition.row >= 1 && currentPosition.column <= 8 && currentPosition.column >= 1) {
      output.push({ ...currentPosition });
    }

    currentPosition = { ...this.position };
    currentPosition.column -= 1;
    if (currentPosition.row <= 8 && currentPosition.row >= 1 && currentPosition.column <= 8 && currentPosition.column >= 1) {
      output.push({ ...currentPosition });
    }


    currentPosition = { ...this.position };
    currentPosition.row -= 1;
    if (currentPosition.row <= 8 && currentPosition.row >= 1 && currentPosition.column <= 8 && currentPosition.column >= 1) {
      output.push({ ...currentPosition });
    }

    currentPosition = { ...this.position };
    currentPosition.row -= 1;
    currentPosition.column -= 1;
    if (currentPosition.row <= 8 && currentPosition.row >= 1 && currentPosition.column <= 8 && currentPosition.column >= 1) {
      output.push({ ...currentPosition });
    }

    currentPosition = { ...this.position };
    currentPosition.row -= 1;
    currentPosition.column += 1;
    if (currentPosition.row <= 8 && currentPosition.row >= 1 && currentPosition.column <= 8 && currentPosition.column >= 1) {
      output.push({ ...currentPosition });
    }


    return output;




  }

  // TODO check why typescript doesn't throw error for move method properties
  move(destinationPosition: Position) {
    this.position = destinationPosition;
  }

}
