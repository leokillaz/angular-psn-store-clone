import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from '../autenticacao/token.service';
import { Jogo } from './jogos.model';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class JogosService {

  private jogos: Jogo[] = [
    {
      id: 1,
      gameCover: "assets/bt-1.jpg",
      gameLabel: "DIGITAL",
      gameType: "DIGITAL | PS5",
      gamePrice: "R$ 129,99",
      gameDescription: "Battlefield 1",
      gameVideo: "2k",
      gameClassificacao: 15,
      gameCapa: "assets/Battlefield_1_capa.jpg",
      gameVersao: "PS2",
      gameJogadores: "2",
      gameFavorito: false,
    }, 
    {
      id: 2,
      gameCover: "assets/bt-4.jpg",
      gameLabel: "EXCLUSIVE",
      gameType: "DISCO | PS5",
      gamePrice: "R$ 229,99",
      gameDescription: "Battlefield 4",
      gameVideo: "4k",
      gameClassificacao: 13,
      gameCapa: "assets/Battlefield_4_capa.jpg",
      gameVersao: "PS3",
      gameJogadores: "3",
      gameFavorito: false,
    }, 
    {
      id: 3,
      gameCover: "assets/bt-hardline.jpg",
      gameLabel: "NEW",
      gameType: "DIGITAL | PS4",
      gamePrice: "R$ 289,99",
      gameDescription: "Battlefield hardline",
      gameVideo: "8k",
      gameClassificacao: 16,
      gameCapa: "assets/Battlefield_hardline_capa.jpg",
      gameVersao: "PS4",
      gameJogadores: "4",
      gameFavorito: false,
    }, 
    {
      id: 4,
      gameCover: "assets/bt-5.jpg",
      gameLabel: "NEW",
      gameType: "DIGITAL | PS4",
      gamePrice: "R$ 389,99",
      gameDescription: "Battlefield V",
      gameVideo: "8k",
      gameClassificacao: 12,
      gameCapa: "assets/Battlefield_V_capa.jpg",
      gameVersao: "PS5",
      gameJogadores: "5",
      gameFavorito: false,
    }, 
  ];

  constructor(
    private http: HttpClient,
    private  tokenService: TokenService
    ) { }

    listaDoUsuario(nomeDoUsuario: string):Observable<Jogo> {
      return this.http.get<Jogo>(`${API}/${nomeDoUsuario}/photos`);
    }

    getJogoById(id: number): Jogo | null {      
      return this.jogos.find(jogo => jogo.id == id) ?? null;
    }
  
    getAllJogos(): Jogo[] {
      return this.jogos;
    }
    
}
