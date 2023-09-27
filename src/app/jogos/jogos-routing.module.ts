import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalheJogoComponent } from './detalhe-jogo/detalhe-jogo.component';
import { ListaJogosComponent } from './lista-jogos/lista-jogos.component';

const routes: Routes = [
  {
    path: '',
    component: ListaJogosComponent
  },
  {
    path: ':jogoId',
    component: DetalheJogoComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JogosRoutingModule { }
