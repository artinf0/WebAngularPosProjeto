import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacientesRoutingModule } from './pacientes-routing.module';
import { ListarComponent } from './listar/listar.component';
import { PacientesComponent } from './pacientes.component';


@NgModule({
  declarations: [ListarComponent, PacientesComponent],
  imports: [
    CommonModule,
    PacientesRoutingModule
  ],
  exports: [
    ListarComponent
  ]
})
export class PacientesModule { }
