export interface Position {
  row: number;
  column: number;
}

export type Color = 'White' | 'Black';

export enum ChessPieceColor {
  BLACK = 'BLACK',
  WHITE = 'WHITE'
};

export interface ChessPieceMove {
  (destinationPosition: Position): void;
}

export interface ChessPiece {
  readonly image: string;
  readonly name: string;
  isAlive: boolean;
  color: ChessPieceColor;
  position: Position;
  getPossibleMoves(): Position[];
  move(destinationPosition: Position): void;
  // move: ChessPieceMove;
}
