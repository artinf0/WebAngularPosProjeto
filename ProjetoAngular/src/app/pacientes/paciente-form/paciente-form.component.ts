import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { paciente } from '../model/paciente'

@Component({
  selector: 'app-paciente-form',
  templateUrl: './paciente-form.component.html',
  styleUrls: ['./paciente-form.component.css']
})
export class PacienteFormComponent implements OnInit {

  formPaciente: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm(new paciente());
  }

  createForm(paciente: paciente) {
    this.formPaciente = this.formBuilder.group({
      nome: [paciente.nome],
      cpf: [paciente.cpf],
      telefone: [paciente.telefone],
      cep: [paciente.cep],
      endereco: [paciente.logradouro],
      bairro: [paciente.bairro],
      cidade: [paciente.cidade],
      estado: [paciente.estado]
    })
  }

  onSubmit() {
    //Adicionar para salvar no endpoint
    console.log(this.formPaciente.value);

    this.formPaciente.reset(new paciente());
  }

}
