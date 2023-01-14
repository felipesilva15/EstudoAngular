import { BoundElementProperty } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ex02',
  templateUrl: './ex02.component.html',
  styleUrls: ['./ex02.component.css']
})
export class Ex02Component {
  constructor(){ };

  urlBaseImagem: string = '../../assets/';
  urlImagem: string = ''
  listaImagem: Array<string> = ['languageHtml.webp', 'sadJavascript.webp', 'programmingIsntStressful.webp'];

  mudarImagem(gap: number): void{
    let position: number = 0;
    let urlImagemAtual: string = this.urlImagem.split('/').reverse()[0];
    
    if(!gap || gap == 0){
      gap = 1;
    }

    // Descobre qual o index da imagem atual
    this.listaImagem.forEach((element, index) => {
      if(element == urlImagemAtual){
        position = index + gap;
      }
    });

    // Define a imagem
    if(position > this.listaImagem.length - 1){
      this.urlImagem = this.urlBaseImagem + this.listaImagem[0];
    } else if(position < 0){
      this.urlImagem = this.urlBaseImagem + this.listaImagem[this.listaImagem.length - 1];
    } else{
      this.urlImagem = this.urlBaseImagem + this.listaImagem[position];
    }
  }

  ngOnInit(): void{
    this.urlImagem = this.urlBaseImagem + this.listaImagem[0];
  }
}
