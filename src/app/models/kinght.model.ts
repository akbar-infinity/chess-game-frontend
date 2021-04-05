import { ChessPiece, ChessPieceColor, ChessPieceMove, Color, Position } from "./types";

export class Knight implements ChessPiece {
  image = '';
  name = 'Knight';
  isAlive = true;

  constructor(public color: ChessPieceColor, public position: Position) {
    if (this.color === ChessPieceColor.BLACK) {
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
    if (currentPosition.row <= 8 && currentPosition.row >= 1 && currentPosition.column <= 8 && currentPosition.column >= 1) {
      output.push(JSON.parse(JSON.stringify(currentPosition)));
    }

    currentPosition.column -= 2;
    if (currentPosition.row <= 8 && currentPosition.row >= 1 && currentPosition.column <= 8 && currentPosition.column >= 1) {
      output.push(JSON.parse(JSON.stringify(currentPosition)));
    }

    currentPosition = { ...this.position };
    currentPosition.row -= 1;
    currentPosition.column -= 2;
    if (currentPosition.row <= 8 && currentPosition.row >= 1 && currentPosition.column <= 8 && currentPosition.column >= 1) {
      output.push(JSON.parse(JSON.stringify(currentPosition)));
    }

    currentPosition = { ...this.position };
    currentPosition.row += 1;
    currentPosition.column -= 2;
    if (currentPosition.row <= 8 && currentPosition.row >= 1 && currentPosition.column <= 8 && currentPosition.column >= 1) {
      output.push(JSON.parse(JSON.stringify(currentPosition)));
    }

    currentPosition = { ...this.position };
    currentPosition.row -= 1;
    currentPosition.column += 2;
    if (currentPosition.row <= 8 && currentPosition.row >= 1 && currentPosition.column <= 8 && currentPosition.column >= 1) {
      output.push(JSON.parse(JSON.stringify(currentPosition)));
    }

    currentPosition = { ...this.position };
    currentPosition.row += 1;
    currentPosition.column += 2;
    if (currentPosition.row <= 8 && currentPosition.row >= 1 && currentPosition.column <= 8 && currentPosition.column >= 1) {
      output.push(JSON.parse(JSON.stringify(currentPosition)));
    }

    currentPosition = { ...this.position };
    currentPosition.row += 2;
    currentPosition.column += 1;
    if (currentPosition.row <= 8 && currentPosition.row >= 1 && currentPosition.column <= 8 && currentPosition.column >= 1) {
      output.push(JSON.parse(JSON.stringify(currentPosition)));
    }

    currentPosition = { ...this.position };
    currentPosition.row += 2;
    currentPosition.column -= 1;
    if (currentPosition.row <= 8 && currentPosition.row >= 1 && currentPosition.column <= 8 && currentPosition.column >= 1) {
      output.push(JSON.parse(JSON.stringify(currentPosition)));
    }

    console.log('--this.position--', JSON.parse(JSON.stringify(this.position)))
    console.log('--kinght output--', output)
    return output;
  }

  // TODO check why typescript doesn't throw error for move method properties
  move(destinationPosition: Position) {
    this.position = destinationPosition;
  }

}
