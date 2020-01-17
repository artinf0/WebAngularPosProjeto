import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PacientesRoutingModule } from './pacientes-routing.module';
import { ListarComponent } from './listar/listar.component';
import { PacientesComponent } from './pacientes.component';
import { PacienteFormComponent } from './paciente-form/paciente-form.component';
import {MatFormFieldModule, MatButtonModule,MatInputModule,MatDialogModule, MatIconModule, MatTableModule, MatToolbarModule} from '@angular/material';
import { MasksPipe } from './masks.pipe';


@NgModule({
  declarations: [ListarComponent, PacientesComponent, PacienteFormComponent, MasksPipe],
  imports: [
    CommonModule,
    PacientesRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,MatTableModule
  ],
  exports: [
    ListarComponent
  ]
})
export class PacientesModule { }
