import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChessGameService {

  constructor(public http: HttpClient) { }

  getGameId() {
    return this.http.get(`${environment.baseUrl}/getUniqueGameId?user=akbar`)
  }

}
