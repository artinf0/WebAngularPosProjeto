import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { PacientesComponent } from './pacientes.component';


const routes: Routes = [
  {
    path: '',
    component: PacientesComponent,
    children: [
      {
        path: '',
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
