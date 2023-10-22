import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from './game.model';


@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  games: Array<Game> = [];

  constructor(private http: HttpClient) {
    // Carregar a lista de jogos
    this.http.get('https://api.playstation.com/v1/games').subscribe(
      (response: any) => {
        this.games = response.json();
      },
      (error) => {
        console.log(error);
      }
    );
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}

