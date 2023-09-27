import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeCardsModule } from '../components/home-cards/home-cards.module';
import { DetalheJogoComponent } from './detalhe-jogo/detalhe-jogo.component';
import { GradeJogosComponent } from './grade-jogos/grade-jogos.component';
import { JogoComponent } from './jogo/jogo.component';
import { JogosRoutingModule } from './jogos-routing.module';
import { ListaJogosComponent } from './lista-jogos/lista-jogos.component';
import { NovoJogoComponent } from './novo-jogo/novo-jogo.component';

@NgModule({
  declarations: [
    ListaJogosComponent,
    JogoComponent,
    GradeJogosComponent,
    NovoJogoComponent,
    DetalheJogoComponent,
  ],
  imports: [
    FormsModule,
    CommonModule, 
    JogosRoutingModule, 
    HomeCardsModule,
  ],
})
export class JogosModule { }
