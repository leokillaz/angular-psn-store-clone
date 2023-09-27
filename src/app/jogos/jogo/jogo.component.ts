import { Component, Input, OnInit } from '@angular/core';
import { Jogo } from '../jogos.model';
import { JogosService } from '../jogos.service';


@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent implements OnInit {

  @Input()
  id: number = 0;
  gameCover: string = "";
  gameLabel: string= "";
  gameType: string= "";
  gamePrice: string= "";
  gameDescription: string= "";
  gameVideo: string= "";
  gameClassificacao: number= 0;
  gameCapa: string= "";
  gameVersao: string= "";
  gameJogadores: string= "";
  gameFavorito: boolean = false;

  constructor(
    private jogoService: JogosService
  ) { }

  ngOnInit(): void {
    
    const jogo: Jogo | null = this.jogoService.getJogoById(this.id);
    
    if (jogo) {
      this.gameCover = jogo.gameCover;
      this.gameLabel = jogo.gameLabel;
      this.gameType = jogo.gameType;
      this.gamePrice = jogo.gamePrice;
      this.gameDescription = jogo.gameDescription;
      this.gameVideo = jogo.gameVideo;
      this.gameClassificacao = jogo.gameClassificacao;
      this.gameCapa = jogo.gameCapa;
      this.gameVersao = jogo.gameVersao;
      this.gameJogadores = jogo.gameJogadores;
      this.gameFavorito = jogo.gameFavorito;
    } else {
      // Trate o caso em que o ID não foi encontrado
      console.error(`Jogo com ID ${this.id} não encontrado.`);
    }
    console.log(this.gameCover);
    
  }

}
