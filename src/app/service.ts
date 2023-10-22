import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) {}

  getGames() {
    // Fazer uma solicitação HTTP para a API da PlayStation Store
    return this.http.get('https://api.playstation.com/v1/games');
  }

}