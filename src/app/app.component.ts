import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'API';

  mostrar1:boolean = false;
  abrirModal1() {
    this.mostrar1 = !this.mostrar1;
  }

 fechar() {
    this.mostrar1 = false;
  }
}

