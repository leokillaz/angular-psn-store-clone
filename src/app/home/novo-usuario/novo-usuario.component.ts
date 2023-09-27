import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NovoUsuarioService } from './novo-usuario.service';
import { NovoUsuario } from './novo-usuario';
import { UsuarioExisteService } from './usuario-existe.service';
import { minusculoValidator } from './minusculo.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  novoUsuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService,
    private usuarioExisteService: UsuarioExisteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group(
      {
        email: [
          '', 
          [Validators.required, Validators.email],
          [this.usuarioExisteService.emailJaExiste()],
        ],
        fullName: ['', [Validators.required, Validators.minLength(4)]],
        userName: [
          '',
          [minusculoValidator],
          [this.usuarioExisteService.usuarioJaExiste()],
        ],
        password: ['', [Validators.required, Validators.minLength(8)]],
      },
    );
  }

  cadastrar(){
    if (this.novoUsuarioForm.valid) {
      const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
      this.novoUsuarioService.cadastaNovoUsuario(novoUsuario).subscribe(
        () => {
          this.router.navigate(['']);
        },
        (err) => {
          console.log(err);
        }
        );
    }
    
  }
}
