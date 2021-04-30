import { ChessPiece, ChessPieceMove, Color, Position } from "./types";

export class Queen implements ChessPiece {
  image = '';
  name = 'Queen';
  isAlive = true;
  // position: Position;

  constructor(public _id: string, public color: Color, public position: Position) {
    console.log('queen color', this.color);
    if (this.color.toUpperCase() === 'BLACK') {
      // this.position = {
      //   row: 0,
      //   column: 3
      // };
      this.image = 'https://maxcdn.icons8.com/iOS7/PNG/25/Gaming/queen_filled-25.png';
    } else {
      // this.position = {
      //   row: 7,
      //   column: 3
      // }
      this.image = 'https://maxcdn.icons8.com/iOS7/PNG/25/Gaming/queen-25.png';
    }
  }

  getPossibleMoves(): Position[] {
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

    currentPosition = { ...this.position };

    // RIGHT DOWN
    // increment row + increment column upto (row < 8) & (column < 8)
    while (currentPosition.row < 7 && currentPosition.column < 7) {
      console.log('in right down', currentPosition);
      currentPosition.row++;
      currentPosition.column++;
      // [currentPosition.row, currentPosition.column] = [currentPosition.column, currentPosition.row];
      currentPosition['direction'] = 'right down';
      if (currentPosition.row != 8 && currentPosition.column != 8) {
        output.push(JSON.parse(JSON.stringify(currentPosition)));
      }

    }

    currentPosition = { ...this.position };

    // LEFT UP
    // decrement row + decrement column upto (row >= 1) & (column >= 1)
    while (currentPosition.row >= 0 && currentPosition.column >= 0) {
      console.log('in left up', currentPosition);
      currentPosition.row--;
      currentPosition.column--;
      currentPosition['direction'] = 'left up';
      if ((currentPosition.row != -1) && (currentPosition.column != -1)) {
        output.push(JSON.parse(JSON.stringify(currentPosition)));
      }
    }

    currentPosition = { ...this.position };

    // LEFT DOWN
    // increment row + decrement column upto (row <= 8) OR (column >= 1)
    while ((currentPosition.row <= 7) && (currentPosition.column >= 0)) {
      console.log('in left down', currentPosition);
      currentPosition.row++;
      currentPosition.column--;
      currentPosition['direction'] = 'left down';
      if ((currentPosition.row != 8) && (currentPosition.column != -1)) {
        output.push(JSON.parse(JSON.stringify(currentPosition)));
      }
    }

    currentPosition = { ...this.position };
    // RIGHT UP
    // decrement row + increment column upto (row >= 1) & (column <= 8)
    while ((currentPosition.row >= 0) && (currentPosition.column <= 7)) {
      console.log('in right up', currentPosition);
      currentPosition.row--;
      currentPosition.column++;
      currentPosition['direction'] = 'right up';
      if ((currentPosition.column != 8) && (currentPosition.row != -1)) {
        output.push(JSON.parse(JSON.stringify(currentPosition)));
      }

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
