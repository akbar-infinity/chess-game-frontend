import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  gameId: string;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  generateRandomId() {
    // generate random string and assign that string to gameId variable
    let gameId = Math.random().toString(36).substring(7);
    console.log("random", gameId);
    return gameId;

  }

  newGame() {
    console.log('new game clicked');
    this.router.navigate([`${this.generateRandomId()}`]);
  }

  joinGame() {
    console.log('join game clicked');
    this.router.navigate([`${this.generateRandomId()}`]);
  }

}
