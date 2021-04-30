import { ChessPiece, ChessPieceMove, Color, Position } from "./types";

export class Bishop implements ChessPiece {
  image = '';
  name = 'Bishop';
  isAlive = true;

  constructor(public _id: string, public color: Color, public position: Position) {
    if (this.color.toUpperCase() === 'BLACK') {
      this.image = 'https://maxcdn.icons8.com/iOS7/PNG/25/Gaming/bishop_filled-25.png';
    } else {
      this.image = 'https://maxcdn.icons8.com/iOS7/PNG/25/Gaming/bishop-25.png';
    }
  }

  private getCurrentPosition() {
    return JSON.parse(JSON.stringify(this.position));
  }

  getPossibleMoves(): Position[] {
    console.log('print possible moves', this.position);
    let output: Position[] = [];

      // input {row: 8, column: 6}

      let currentPosition: Position = this.getCurrentPosition();

      // RIGHT DOWN
      // increment row + increment column upto (row < 7) & (column < 7)
      while(currentPosition.row < 7 && currentPosition.column < 7) {
        console.log('in right down', currentPosition);
        currentPosition.row++;
        currentPosition.column++;
        // [currentPosition.row, currentPosition.column] = [currentPosition.column, currentPosition.row];
        currentPosition['direction'] = 'right down';
        if (currentPosition.row != 8 && currentPosition.column != 8) {
          output.push(JSON.parse(JSON.stringify(currentPosition)));
        }

      }

      currentPosition = this.getCurrentPosition();

      // LEFT UP
      // decrement row + decrement column upto (row >= 0) & (column >= 0)
      while(currentPosition.row >= 0 && currentPosition.column >= 0) {
        console.log('in left up', currentPosition);
        currentPosition.row--;
        currentPosition.column--;
        currentPosition['direction'] = 'left up';
        if ((currentPosition.row !=-1) && (currentPosition.column != -1)) {
          output.push(JSON.parse(JSON.stringify(currentPosition)));
        }
      }

      currentPosition = this.getCurrentPosition();

      // LEFT DOWN
      // increment row + decrement column upto (row <= 7) OR (column >= 0)
      while((currentPosition.row <= 7) && (currentPosition.column >= 0)) {
        console.log('in left down', currentPosition);
        currentPosition.row++;
        currentPosition.column--;
        currentPosition['direction'] = 'left down';
        if ((currentPosition.row != 8) && (currentPosition.column != -1)) {
          output.push(JSON.parse(JSON.stringify(currentPosition)));
        }
      }

      currentPosition = this.getCurrentPosition();
      // RIGHT UP
      // decrement row + increment column upto (row >= 0) & (column <= 7)
      while((currentPosition.row >= 0) && (currentPosition.column <= 7)) {
        console.log('in right up', currentPosition);
        currentPosition.row--;
        currentPosition.column++;
        currentPosition['direction'] = 'right up';
        if ((currentPosition.column != 8) && (currentPosition.row != -1)) {
          output.push(JSON.parse(JSON.stringify(currentPosition)));
        }

      }

      // output [
      //   {row: 7, column: 7},
      //   {row: 6, column: 8},
      //   {row: 7, column: 5},
      //   {row: 6, column: 4},
      //   {row: 5, column: 3},
      //   {row: 4, column: 2},
      //   {row: 3, column: 1}
      // ]

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
