import { ChessPiece, ChessPieceColor, ChessPieceMove, Color, Position } from "./types";

export class Pawn implements ChessPiece {
  image = '';
  name = 'Pawn';
  isAlive = true;

  constructor(public color: ChessPieceColor, public position: Position) {
    if (this.color === ChessPieceColor.BLACK) {
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
      if (currentPosotion.row <= 8 && currentPosotion.row >= 1 && currentPosotion.column <= 8 && currentPosotion.column >= 1) {
        output.push({ ...currentPosotion });
      }

      currentPosotion = { ...this.position }
      if (this.position.row == 2) {
        currentPosotion.row += 2;
        if (currentPosotion.row <= 8 && currentPosotion.row >= 1 && currentPosotion.column <= 8 && currentPosotion.column >= 1) {
          output.push(currentPosotion);
        }
      }
    } else {
      currentPosotion = { ...this.position }
      currentPosotion.row -= 1;
      if (currentPosotion.row <= 8 && currentPosotion.row >= 1 && currentPosotion.column <= 8 && currentPosotion.column >= 1) {
        output.push({ ...currentPosotion });
      }

      currentPosotion = { ...this.position }
      if (this.position.row == 7) {
        currentPosotion.row -= 2;
        if (currentPosotion.row <= 8 && currentPosotion.row >= 1 && currentPosotion.column <= 8 && currentPosotion.column >= 1) {
          output.push(currentPosotion);
        }
      }
    }
    return output;
  }

  // TODO check why typescript doesn't throw error for move method properties
  move(destinationPosition: Position) {
    this.position = destinationPosition;
  }

}
