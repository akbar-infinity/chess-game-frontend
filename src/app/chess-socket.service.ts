import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
import { ChessPiece, Position } from './models/types';

@Injectable({
  providedIn: 'root'
})
export class ChessSocketService {

  constructor(private socket: Socket) { }

  getCurrentState(gameId: string) {
    console.log('emitting current state');
    this.socket.emit('currentState', {gameId});
  }

  getCurrentStateData() {
    return this.socket.fromEvent('currentStateResp');
  }

  saveMove(gameId: string, piece: ChessPiece, previousPosition: Position) {
    console.log('emitting move', gameId, piece, previousPosition);
    this.socket.emit('move', {gameId, piece, previousPosition});
  }

}
