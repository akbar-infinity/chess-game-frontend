export interface Position {
  row: number;
  column: number;
}

export type Color = 'WHITE' | 'BLACK';

export interface ChessPieceMove {
  (destinationPosition: Position): void;
}

export interface ChessPiece {
  readonly _id: string;
  readonly image: string;
  readonly name: string;
  isAlive: boolean;
  color: Color;
  position: Position;
  getPossibleMoves(): Position[];
  move(destinationPosition: Position, allPositions: Array<any>): void;
  // move: ChessPieceMove;
}
