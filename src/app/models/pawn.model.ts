import { ChessPiece, ChessPieceMove, Color, Position } from "./types";

export class Pawn implements ChessPiece {
  image = '';
  name = 'Pawn';
  isAlive = true;

  constructor(public color: Color, public position: Position) {
    if (color.toUpperCase() === 'BLACK') {
      this.image = 'https://maxcdn.icons8.com/iOS7/PNG/25/Gaming/pawn_filled-25.png';
    } else {
      this.image = 'https://maxcdn.icons8.com/iOS7/PNG/25/Gaming/pawn-25.png';
    }
  }

  getPossibleMoves(): Position[] {
    //if pawn black row ++
    //if pawn white row --
    // row should not be greater than 8 & less than 1
    // column should not be greater than 8 & less than 1

    console.log('position:', this.position, 'color:', this.color);
    let output: Position[] = [];
    let currentPosotion = this.position;

    if (this.color.toUpperCase() == 'BLACK') {
      currentPosotion = { ...this.position }
      currentPosotion.row += 1;
      if (currentPosotion.row <= 7 && currentPosotion.row >= 0 && currentPosotion.column <= 7 && currentPosotion.column >= 0) {
        output.push({ ...currentPosotion });
      }

      currentPosotion = { ...this.position }
      if (this.position.row == 1) {
        currentPosotion.row += 2;
        if (currentPosotion.row <= 7 && currentPosotion.row >= 0 && currentPosotion.column <= 7 && currentPosotion.column >= 0) {
          output.push(currentPosotion);
        }
      }
    } else {
      currentPosotion = { ...this.position }
      currentPosotion.row -= 1;
      if (currentPosotion.row <= 7 && currentPosotion.row >= 0 && currentPosotion.column <= 7 && currentPosotion.column >= 0) {
        output.push({ ...currentPosotion });
      }

      currentPosotion = { ...this.position }
      if (this.position.row == 6) {
        currentPosotion.row -= 2;
        if (currentPosotion.row <= 7 && currentPosotion.row >= 0 && currentPosotion.column <= 7 && currentPosotion.column >= 0) {
          output.push(currentPosotion);
        }
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
