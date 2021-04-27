import { ChessPiece, ChessPieceMove, Color, Position } from "./types";

export class King implements ChessPiece {
  image = '';
  name = 'King';
  isAlive = true;

  constructor(public color: Color, public position: Position) {

    if (this.color.toUpperCase() === 'BLACK') {
      // this.position = {
      //   row: 0,
      //   column: 4
      // };
      this.image = 'https://maxcdn.icons8.com/iOS7/PNG/25/Gaming/king_filled-25.png';
    } else {
      // this.position = {
      //   row: 7,
      //   column: 4
      // }
      this.image = 'https://maxcdn.icons8.com/iOS7/PNG/25/Gaming/king-25.png';
    }
  }

  getPossibleMoves(): Position[] {
    let output: Position[] = [];
    let currentPosition = { ...this.position };
    currentPosition.row += 1;
    if (currentPosition.row <= 7 && currentPosition.row >= 0 && currentPosition.column <= 7 && currentPosition.column >= 0) {
      output.push({ ...currentPosition });
    }

    currentPosition = { ...this.position };
    currentPosition.row += 1;
    currentPosition.column += 1;
    if (currentPosition.row <= 7 && currentPosition.row >= 0 && currentPosition.column <= 7 && currentPosition.column >= 0) {
    output.push({ ...currentPosition });
    }

    currentPosition = { ...this.position };
    currentPosition.row += 1;
    currentPosition.column -= 1;
    if (currentPosition.row <= 7 && currentPosition.row >= 0 && currentPosition.column <= 7 && currentPosition.column >= 0) {
    output.push({ ...currentPosition });
    }

    currentPosition = { ...this.position };
    currentPosition.column += 1;
    if (currentPosition.row <= 7 && currentPosition.row >= 0 && currentPosition.column <= 7 && currentPosition.column >= 0) {
      output.push({ ...currentPosition });
    }

    currentPosition = { ...this.position };
    currentPosition.column -= 1;
    if (currentPosition.row <= 7 && currentPosition.row >= 0 && currentPosition.column <= 7 && currentPosition.column >= 0) {
      output.push({ ...currentPosition });
    }


    currentPosition = { ...this.position };
    currentPosition.row -= 1;
    if (currentPosition.row <= 7 && currentPosition.row >= 0 && currentPosition.column <= 7 && currentPosition.column >= 0) {
      output.push({ ...currentPosition });
    }

    currentPosition = { ...this.position };
    currentPosition.row -= 1;
    currentPosition.column -= 1;
    if (currentPosition.row <= 7 && currentPosition.row >= 0 && currentPosition.column <= 7 && currentPosition.column >= 0) {
      output.push({ ...currentPosition });
    }

    currentPosition = { ...this.position };
    currentPosition.row -= 1;
    currentPosition.column += 1;
    if (currentPosition.row <= 7 && currentPosition.row >= 0 && currentPosition.column <= 7 && currentPosition.column >= 0) {
      output.push({ ...currentPosition });
    }
    return output;
  }

  // TODO check why typescript doesn't throw error for move method properties
  move(destinationPosition: Position, allPositions: Array<any>) {
    if (this.isValidMove(destinationPosition)) {
      allPositions[this.position.row][this.position.column] = '';
      this.position = destinationPosition;
      allPositions[this.position.row][this.position.column] = this;
    }
  }

  isValidMove(position: Position) {
    let validMove = false;
    const possiblePositions = this.getPossibleMoves();
    for(let i = 0; i < possiblePositions.length; i++) {
      if (position.row === possiblePositions[i].row && position.column === possiblePositions[i].column) {
        validMove = true;
        break;
      }
    }
    return validMove;
  }

}
