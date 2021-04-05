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
    // row++ untill row < 8  
    // column ++ untill column < 8
    // row-- untill row > 1  
    // column -- untill column > 1
    let output: Position[] = [];
    let currentPosition = { ...this.position };

    while (currentPosition.row < 8) {
      currentPosition.row++;

      if (currentPosition.row <= 8) {
        output.push({ ...currentPosition });
      }
    }

    currentPosition = { ...this.position };
    while (currentPosition.column > 1) {
      currentPosition.column--;

      if (currentPosition.column >= 1) {
        output.push({ ...currentPosition });
      }
    }

    currentPosition = { ...this.position };
    while (currentPosition.column < 8) {
      currentPosition.column++;

      if (currentPosition.column <= 8) {
        output.push({ ...currentPosition });
      }
    }

    currentPosition = { ...this.position };
    while (currentPosition.row > 1) {
      currentPosition.row--;

      if (currentPosition.row >= 1) {
        output.push({ ...currentPosition });
      }
    }



    return output;
  }

  move(destinationPosition: Position) {





  }

}


