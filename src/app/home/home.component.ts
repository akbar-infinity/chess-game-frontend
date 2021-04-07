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

  }

  newGame() {
    console.log('new game clicked');
    this.router.navigate([`${this.gameId}`]);
  }

  joinGame() {
    console.log('join game clicked');
    this.router.navigate([`${this.gameId}`]);
  }

}
