import { ChessPiece, ChessPieceMove, Color, Position } from "./types";

export class Knight implements ChessPiece {
  image = '';
  name = 'Knight';
  isAlive = true;

  constructor(public _id: string, public color: Color, public position: Position) {
    if (this.color.toUpperCase() === 'BLACK') {
      this.image = 'https://maxcdn.icons8.com/iOS7/PNG/25/Gaming/knight_filled-25.png';
    } else {
      this.image = 'https://maxcdn.icons8.com/iOS7/PNG/25/Gaming/knight-25.png';
    }
  }

  getPossibleMoves(): Position[] {
    // let currentPosition =  JSON.parse(JSON.stringify(this.position));
    // row +/- 2 then column +/-1
    // row should not be greater than 8 & less than 1
    // column should not be greater than 8 & less than 1
    // column +/- 2 then row +/- 1
    // row should not be greater than 8 & less than 1
    // column should not be greater than 8 & less than 1
    console.log('--ORIGINAL this.position--', this.position)
    let output: Position[] = [];
    let currentPosition = { ...this.position };
    currentPosition.row -= 2;
    currentPosition.column += 1;
    if (currentPosition.row <= 7 && currentPosition.row >= 0 && currentPosition.column <= 7 && currentPosition.column >= 0) {
      output.push(JSON.parse(JSON.stringify(currentPosition)));
    }

    currentPosition.column -= 2;
    if (currentPosition.row <= 7 && currentPosition.row >= 0 && currentPosition.column <= 7 && currentPosition.column >= 0) {
      output.push(JSON.parse(JSON.stringify(currentPosition)));
    }

    currentPosition = { ...this.position };
    currentPosition.row -= 1;
    currentPosition.column -= 2;
    if (currentPosition.row <= 7 && currentPosition.row >= 0 && currentPosition.column <= 7 && currentPosition.column >= 0) {
      output.push(JSON.parse(JSON.stringify(currentPosition)));
    }

    currentPosition = { ...this.position };
    currentPosition.row += 1;
    currentPosition.column -= 2;
    if (currentPosition.row <= 7 && currentPosition.row >= 0 && currentPosition.column <= 7 && currentPosition.column >= 0) {
      output.push(JSON.parse(JSON.stringify(currentPosition)));
    }

    currentPosition = { ...this.position };
    currentPosition.row -= 1;
    currentPosition.column += 2;
    if (currentPosition.row <= 7 && currentPosition.row >= 0 && currentPosition.column <= 7 && currentPosition.column >= 0) {
      output.push(JSON.parse(JSON.stringify(currentPosition)));
    }

    currentPosition = { ...this.position };
    currentPosition.row += 1;
    currentPosition.column += 2;
    if (currentPosition.row <= 7 && currentPosition.row >= 0 && currentPosition.column <= 7 && currentPosition.column >= 0) {
      output.push(JSON.parse(JSON.stringify(currentPosition)));
    }

    currentPosition = { ...this.position };
    currentPosition.row += 2;
    currentPosition.column += 1;
    if (currentPosition.row <= 7 && currentPosition.row >= 0 && currentPosition.column <= 7 && currentPosition.column >= 0) {
      output.push(JSON.parse(JSON.stringify(currentPosition)));
    }

    currentPosition = { ...this.position };
    currentPosition.row += 2;
    currentPosition.column -= 1;
    if (currentPosition.row <= 7 && currentPosition.row >= 0 && currentPosition.column <= 7 && currentPosition.column >= 0) {
      output.push(JSON.parse(JSON.stringify(currentPosition)));
    }

    console.log('--this.position--', JSON.parse(JSON.stringify(this.position)))
    console.log('--kinght output--', output)
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
