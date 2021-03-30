import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'chess-app';

  rows = [1, 2, 3, 4, 5, 6, 7, 8];
  columns = [1, 2, 3, 4, 5, 6, 7, 8];

  isDarkBackground(row: number, column: number): boolean {
    if (row % 2 === 1 && column % 2 === 0) {
      return true;
    }
    if (row % 2 === 0 && column % 2 === 1) {
      return true;
    }
    return false;
  }

  getInitialPosition(row: number, column: number, className: string): boolean {
    switch (className.toUpperCase()) {
      case 'BP':
        if (row === 2) return true;
      case 'WP':
        if (row === 7) return true;

      case 'BR':
        if (row === 1 && (column === 1 || column === 8)) return true;
      case 'WR':
        if (row === 8 && (column === 1 || column === 8)) return true;

      case 'BH':
        if (row === 1 && (column === 2 || column === 7)) return true;
      case 'WH':
        if (row === 8 && (column === 2 || column === 7)) return true;

      case 'BB':
        if (row === 1 && (column === 3 || column === 6)) return true;
      case 'WB':
        if (row === 8 && (column === 3 || column === 6)) return true;

      case 'WQ':
        if (row === 8 && column === 4) return true;
      case 'BQ':
        if (row === 1 && column === 4) return true;

      case 'WK':
        if (row === 8 && column === 5) return true;
      case 'BK':
        if (row === 1 && column === 5) return true;
    }
    return false;
  }
}
