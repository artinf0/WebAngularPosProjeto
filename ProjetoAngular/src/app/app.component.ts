import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-angular';
  removerTitulo = false;


  toggleRemoverTitulo() {
    this.removerTitulo = !this.removerTitulo;
  }
}