import { Component, OnInit } from '@angular/core';
import { Jogos } from '../jogos.model';
import { JogosService } from '../jogos.service';

@Component({
  selector: 'app-lista-jogos',
  templateUrl: './lista-jogos.component.html',
  styleUrls: ['./lista-jogos.component.css']
})
export class ListaJogosComponent implements OnInit {

  jogos!: Jogos;

  constructor(
    private jogosService: JogosService
  ) { }

  ngOnInit(): void {
    this.jogos = this.jogosService.getAllJogos();
  }

}
