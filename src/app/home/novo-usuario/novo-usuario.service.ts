import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoUsuario } from './novo-usuario';
import { environment } from 'src/environments/environment';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(
    private http: HttpClient
  ) { }

  cadastaNovoUsuario(novoUsuario: NovoUsuario){
    return this.http.post(`${API}/user/signup`, novoUsuario)
  }

  verifiqueUsuarioExistente(nomeDoUsuario: string){
    return this.http.get(`${API}/user/exists/${nomeDoUsuario}`)
  }

  verifiqueEmailExistente(emailUsuario: string){
    return this.http.get(`${API}/user/exists/email/${emailUsuario}`)
  }
}
