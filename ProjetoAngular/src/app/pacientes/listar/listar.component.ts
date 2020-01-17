import { Component, OnInit } from '@angular/core';
import {ServicoService} from '../servico/servico.service';
import {Router} from '@angular/router';
import {paciente} from '../model/paciente';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  public pacientes: paciente[];
  colunas: string[] = ['nome','cpf', 'telefone','cep','logradouro','bairro','estado', 'acoes'];

  valor : number;

  constructor(private servicoService: ServicoService,
              private router: Router) { }

  ngOnInit() {
    this.atualizar();
  }

  atualizar(): void {
    this.servicoService.listar().subscribe(pacientes => {
      this.pacientes = pacientes;
    });
  }

  editar({ id }: paciente): void {
    this.router.navigate(['editar', id]);
  }

  remover({ id }: paciente): void {
    this.servicoService.remover(id).subscribe(() => this.atualizar());
  }
}