import { Component } from '@angular/core';

@Component({
  selector: 'app-ex03',
  templateUrl: './ex03.component.html',
  styleUrls: ['./ex03.component.css']
})
export class Ex03Component {
  n1: number = 0;
  n2: number = 0;
  result: number = 0;

  somar(): void{
    this.result = this.n1 + this.n2;
  }
}
