import { ChessPiece, Color, Position } from "./types";

export class Rook implements ChessPiece {

  image = '';
  name = 'Rook';
  isAlive = true;

  constructor(public _id: string, public color: Color, public position: Position) {
    if (this.color.toUpperCase() === 'BLACK') {
      this.image = 'https://maxcdn.icons8.com/iOS7/PNG/25/Gaming/rook_filled-25.png';
    } else {
      this.image = 'https://maxcdn.icons8.com/iOS7/PNG/25/Gaming/rook-25.png';
    }
  }

  getPossibleMoves() {
    // row++ untill row < 8
    // column ++ untill column < 8
    // row-- untill row > 1
    // column -- untill column > 1
    let output: Position[] = [];
    let currentPosition = { ...this.position };

    while (currentPosition.row < 7) {
      currentPosition.row++;

      if (currentPosition.row <= 7) {
        output.push({ ...currentPosition });
      }
    }

    currentPosition = { ...this.position };
    while (currentPosition.column > 0) {
      currentPosition.column--;

      if (currentPosition.column >= 0) {
        output.push({ ...currentPosition });
      }
    }

    currentPosition = { ...this.position };
    while (currentPosition.column < 7) {
      currentPosition.column++;

      if (currentPosition.column <= 7) {
        output.push({ ...currentPosition });
      }
    }

    currentPosition = { ...this.position };
    while (currentPosition.row > 0) {
      currentPosition.row--;

      if (currentPosition.row >= 0) {
        output.push({ ...currentPosition });
      }
    }



    return output;
  }

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


