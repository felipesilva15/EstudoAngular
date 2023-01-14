import { Component } from '@angular/core';

@Component({
  selector: 'app-ex04',
  templateUrl: './ex04.component.html',
  styleUrls: ['./ex04.component.css']
})
export class Ex04Component {
  numero: number = 0;
  resultado: string = '';

  parOuImpar(): void{
    if(this.numero % 2 == 0){
      this.resultado = 'Este número é par';
    } else{
      this.resultado = 'Este número é ímpar';
    }
  }
}
