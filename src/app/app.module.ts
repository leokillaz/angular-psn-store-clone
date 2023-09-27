import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutenticacaoModule } from './autenticacao/autenticacao.module';
import { MenuBarModule } from './components/menu-bar/menu-bar.module';
import { RodapeModule } from './components/rodape/rodape.module';
import { JogosModule } from './jogos/jogos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MenuBarModule,
    RodapeModule,
    AutenticacaoModule,
    JogosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
