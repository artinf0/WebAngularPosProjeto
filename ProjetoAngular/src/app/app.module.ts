import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { PacientesModule } from './Pacientes/pacientes.module';
// import { UsuariosModule } from './Usuarios/usuarios.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
    // PacientesModule,
    // UsuariosModule,
    
  ],
  entryComponents:[AppComponent] ,   
  bootstrap: [AppComponent],  
  providers: []
})
export class AppModule { }
