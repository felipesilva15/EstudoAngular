import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  constructor(){}

  teste: string = 'Hello world';
  exibir: boolean = true;
  lista: Array<string> = [];
  valorSwitch: string = 'default';

  // Executado quando a página é aberta
  ngOnInit(): void{
    for (let i = 0; i < 10; i++) {
      this.lista[i] = `Item ${i}`;
    }
  }

  // Executado após a página ser aberta  
  ngAfterViewInit(): void{

  }

  // Função chamada pelos botões
  exibirFrases( mudarExibicao: boolean): void{
    this.exibir = mudarExibicao;
  }
}
