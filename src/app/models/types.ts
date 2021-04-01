export interface Position {
  row: number;
  column: number;
}

export type Color = 'White' | 'Black';

export interface ChessPieceMove {
  (destinationPosition: Position): void;
}

export interface ChessPiece {
  readonly image: string;
  readonly name: string;
  isAlive: boolean;
  color: Color;
  position: Position;
  getPossibleMoves(): void;
  move(destinationPosition: Position): void;
  // move: ChessPieceMove;
}
