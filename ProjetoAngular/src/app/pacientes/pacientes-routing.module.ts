import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { PacientesComponent } from './pacientes.component';
import { PacienteFormComponent } from './paciente-form/paciente-form.component';

const routes: Routes = [
  {
    path: '',
    component: PacientesComponent,
    children: [
      {
        path: '',
        component: PacienteFormComponent
      },
      {
        path: 'listar',
        component: ListarComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PacientesRoutingModule { }
