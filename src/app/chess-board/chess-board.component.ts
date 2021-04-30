import { Component, OnInit } from '@angular/core';
import { Rook } from '../models/rook.model';
import { Knight } from '../models/kinght.model';
import { King } from '../models/king.model';
import { Queen } from '../models/queen.model';
import { Bishop } from '../models/bishop.model';
import { Pawn } from '../models/pawn.model';
import { ChessSocketService } from '../chess-socket.service';
import { ActivatedRoute } from '@angular/router';
import { ChessPiece, Color } from '../models/types';

@Component({
  selector: 'app-chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.scss'],
})
export class ChessBoardComponent implements OnInit {
  title = 'chess-app';
  playingWithBlack = !true;
  rowValues = [0, 1, 2, 3, 4, 5, 6, 7];
  columnValues = [0, 1, 2, 3, 4, 5, 6, 7];

  positions = [];

  hightlatedPositions = [];

  selectedPiece: ChessPiece;
  currentTurn: Color = 'WHITE';

  moves = [
    {
      piece: {
        name: 'Rook',
        type: 'White',
        positions: {
          row: 8,
          column: 8,
        },
      },
      source: {
        row: 2,
        column: 1,
      },
      destination: {
        row: 4,
        column: 1,
      },
    },
  ];

  gameId;

  constructor(private ws: ChessSocketService, private route: ActivatedRoute) {}

  ngOnInit() {
    for (let row = 0; row < 8; row++) {
      this.positions.push(['', '', '', '', '', '', '', '']);
    }

    this.route.params.subscribe((data) => {
      this.ws.getCurrentStateData().subscribe((data) => {
        for (let i = 0; i < (<Array<any>>data).length; i++) {
          console.log('data', data[i]);
          if (data[i]['isAlive']) {
            switch (data[i]['name']) {
              case 'PAWN':
                this.positions[data[i]['position']['row']][
                  data[i]['position']['column']
                ] = new Pawn(data[i]['_id'], data[i]['color'], data[i]['position']);
                break;
              case 'ROOK':
                this.positions[data[i]['position']['row']][
                  data[i]['position']['column']
                ] = new Rook(data[i]['_id'], data[i]['color'], data[i]['position']);
                break;
              case 'KNIGHT':
                this.positions[data[i]['position']['row']][
                  data[i]['position']['column']
                ] = new Knight(data[i]['_id'], data[i]['color'], data[i]['position']);
                break;
              case 'BISHOP':
                this.positions[data[i]['position']['row']][
                  data[i]['position']['column']
                ] = new Bishop(data[i]['_id'], data[i]['color'], data[i]['position']);
                break;
              case 'QUEEN':
                this.positions[data[i]['position']['row']][
                  data[i]['position']['column']
                ] = new Queen(data[i]['_id'], data[i]['color'], data[i]['position']);
                break;
              case 'KING':
                this.positions[data[i]['position']['row']][
                  data[i]['position']['column']
                ] = new King(data[i]['_id'], data[i]['color'], data[i]['position']);
                break;
            }
          }
        }
      });
      this.gameId = data['gameId'];
      this.ws.getCurrentState(this.gameId);
    });
  }

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

  onPieceSelect(row: number, column: number) {
    console.log(
      'turn',
      this.currentTurn,
      'row : ',
      row,
      ' column : ',
      column,
      this.positions[row][column]
    );

    if (
      this.currentTurn === this.positions[row][column].color ||
      this.selectedPiece != null
    ) {
      this.hightlatedPositions = [];

      if (this.positions[row][column] !== '') {
        if (
          this.selectedPiece &&
          this.selectedPiece.color !== this.positions[row][column].color
        ) {
          const previousPosition = this.selectedPiece.position;
          this.selectedPiece.move({ row, column }, this.positions);
          this.ws.saveMove(this.gameId, this.selectedPiece, previousPosition);
          this.selectedPiece = null;
          this.currentTurn = this.currentTurn === 'WHITE' ? 'BLACK' : 'WHITE';
        } else {
          this.selectedPiece = this.positions[row][column];
          const positions = this.selectedPiece.getPossibleMoves();
          this.hightlatedPositions = positions;
          console.log('positions : ', positions);
        }
      } else {
        if (this.selectedPiece) {
          const previousPosition = this.selectedPiece.position;
          this.selectedPiece.move({ row, column }, this.positions);
          this.ws.saveMove(this.gameId, this.selectedPiece, previousPosition);
          this.currentTurn = this.currentTurn === 'WHITE' ? 'BLACK' : 'WHITE';
          this.selectedPiece = null;
        }
      }
    }
  }

  isHighlated(row, column) {
    // row++;
    // column++;
    let hightlight = false;
    // console.log('postions : ', this.hightlatedPositions);
    for (let index = 0; index < this.hightlatedPositions.length; index++) {
      if (
        this.hightlatedPositions[index].row === row &&
        this.hightlatedPositions[index].column === column
      ) {
        hightlight = true;
        break;
      }
    }
    return hightlight;
  }
}
