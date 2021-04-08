import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  gameId: string;

  constructor(public router: Router, public http: HttpClient) { }

  ngOnInit(): void {
  }

  getGameId(): string {
    this.http.get('http://localhost:4001/getUniqueGameId').subscribe((response) => {
      console.log('response : ', response);
      if(response['status']) {
        this.gameId = response['gameId'];
      }
    })
    return '';
  }

  newGame() {
    console.log('new game clicked', this.getGameId());
    // this.router.navigate([`${this.generateRandomId()}`]);
  }

  joinGame() {
    console.log('join game clicked');
    this.router.navigate([`${this.getGameId()}`]);
  }

}
