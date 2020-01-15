import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import {MatFormFieldModule, MatButtonModule,MatInputModule,MatDialogModule} from '@angular/material';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { ValidasenhaDirective } from './validasenha.directive';

@NgModule({
  declarations: [ UsuarioFormComponent, ValidasenhaDirective],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule
  ]
})
export class UsuariosModule { }
