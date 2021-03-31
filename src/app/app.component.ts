import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'chess-app';

  rowValues = [1, 2, 3, 4, 5, 6, 7, 8];
  columnValues = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  positions = [
    ['Rook', 'Kinghts', 'Bishop', 'Queen', 'King', 'Bishop', 'Kinghts', 'Rook'],
    ['Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn', 'Pawn'],
    ['Rook', 'Kinghts', 'Bishop', 'Queen', 'King', 'Bishop', 'Kinghts', 'Rook']
  ];

  moves = [
    {
      piece: {
        name: 'Rook',
        type: 'White',
        positions: {
          row: 8,
          column: 8
        }
      },
      source: {
        row: 2,
        column: 1
      },
      destination: {
        row: 4,
        column: 1
      },
    }
  ]

  isDarkBackground(row: number, column: number): boolean {

    row = row + 1;
    column = column + 1;
    if (row % 2 === 1 && column % 2 === 0) {
      return true;
    }
    if (row % 2 === 0 && column % 2 === 1) {
      return true;
    }
    return false;
  }

  getInitialPosition(row: number, column: number, className: string): boolean {
    row = row + 1;
    column = column + 1;
    switch (className.toUpperCase()) {
      case 'BP':
        if (row === 2) return true;
        break;
      case 'WP':
        if (row === 7) return true;
        break;
      case 'BR':
        if (row === 1 && (column === 1 || column === 8)) return true;
        break;
      case 'WR':
        if (row === 8 && (column === 1 || column === 8)) return true;
        break;
      case 'BH':
        if (row === 1 && (column === 2 || column === 7)) return true;
        break;
      case 'WH':
        if (row === 8 && (column === 2 || column === 7)) return true;
        break;
      case 'BB':
        if (row === 1 && (column === 3 || column === 6)) return true;
        break;
      case 'WB':
        if (row === 8 && (column === 3 || column === 6)) return true;
        break;
      case 'WQ':
        if (row === 8 && column === 4) return true;
        break;
      case 'BQ':
        if (row === 1 && column === 4) return true;
        break;
      case 'WK':
        if (row === 8 && column === 5) return true;
        break;
      case 'BK':
        if (row === 1 && column === 5) return true;
        break;
    }
    return false;
  }

  onPieceSelect(row: number, column: number) {
    console.log('row : ', row, ' column : ', column, this.positions[row][column]);
  }
}
