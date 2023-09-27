import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {

  user$ = this.usuarioService.retornaUsuario();

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
    ) { }
    
    // redirecionarParaLogin() {
    //   this.router.navigate(['']);
    // }

    logout() {
      this.usuarioService.logout();
      this.router.navigate(['']);
    }

}
