import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';

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

}
