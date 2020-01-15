import { Component, OnInit } from '@angular/core';
import { usuario } from '../model/usuario';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {
  public user: usuario;


  ngOnInit() {
    // initialize model here
    this.user = {
      id: null,
      login: '',
      senha: '',
      rsenha: ''
    }
  }

  onSubmit(model: usuario, isValid: boolean) {
    console.log(model, isValid);
    //Postar para o servico
  }

}