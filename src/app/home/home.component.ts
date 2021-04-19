import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ChessGameService } from '../chess-game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  gameId: string;

  constructor(public router: Router, public gameService: ChessGameService) { }

  ngOnInit(): void {
  }

  newGame() {
    this.gameService.getGameId().subscribe((resp) => {
      console.log('new game clicked', resp);
      this.gameId = resp['gameId'];
      this.router.navigate([`${this.gameId}`]);
    })
  }

  joinGame() {
    console.log('join game clicked');
    // this.router.navigate([`${this.getGameId()}`]);
  }

}
