import { Component } from '@angular/core';

@Component({
  selector: 'app-ex05',
  templateUrl: './ex05.component.html',
  styleUrls: ['./ex05.component.css']
})
export class Ex05Component {
  listaDeTarefas: Array<string> = [
    'Lavar a louça',
    'Levar o cachorro para passear',
    'Arrumar o quarto',
    'Fazer o trabalho da faculdade',
    'Pagar contas',
    'Colocar roupas para lavar',
    'Estudar Angular'
  ];
}
