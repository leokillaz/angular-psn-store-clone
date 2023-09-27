import { Injectable } from '@angular/core';
import { NovoUsuarioService } from './novo-usuario.service';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {

  constructor(
    private novoUsuarioService: NovoUsuarioService
  ) { }

  emailJaExiste(){
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((emailUsuario) => 
          this.novoUsuarioService.verifiqueEmailExistente(emailUsuario)
          ),
          map((emailExiste) =>
            emailExiste ? { emailExistente: true } : null
          ),
          first()
        )
    }
  }

  usuarioJaExiste(){
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((nomeDoUsuario) => 
          this.novoUsuarioService.verifiqueUsuarioExistente(nomeDoUsuario)
          ),
          map((userNameExiste) =>
            userNameExiste ? { userNameExistente: true } : null
          ),
          first()
        )
    }
  }
}
