import { Component } from '@angular/core';

// Importa o service e a model
import { cepRetorno } from 'src/app/models/cepRetorno';
import { CepService } from 'src/app/services/cep.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component {
  constructor(private CepService: CepService){ };

  cep: string = '';
  objetoCepRetorno: cepRetorno = new cepRetorno();

  ngOnInit(): void{

  }

  consultarCep(): void{
    // Formata o cep
    let cepFormatado: string = this.cep.replace(/[^0-9]/g, '') ?? '';

    // Valida se o CEP foi preenchido
    if(!cepFormatado || cepFormatado == ''){
      alert('Informe um CEP para realizar a consulta!');
      return;
    }

    // Realiza a consulta do CEP
    this.CepService.buscaCep(cepFormatado).subscribe(
      // Deu certo. Popula o objeto
      retornoCep => {
        this.objetoCepRetorno = retornoCep;
      },
      // Deu erro. Exibe ao usuário
      (err) => {
        alert(`Falha ao consultar CEP: ${err.message}`)
        console.log(err);
      }
    );
  }
}
