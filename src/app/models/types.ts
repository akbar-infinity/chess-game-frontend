export interface Position {
  row: number;
  column: number;
}

export type Color = 'White' | 'Black';

export interface ChessPiece {
  name: string;
  isAlive: boolean;
  color: Color;
  position: Position;
  getPossibleMoves(): void;
  move(destinationPosition: Position): void;
}
