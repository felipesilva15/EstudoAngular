import { Injectable } from '@angular/core';

// Importa o HTTP
import { HttpClient } from '@angular/common/http';

// Importa o observable(Utilizado para consumir serviços no background sem travar)
import { Observable } from 'rxjs';

// Importa a model
import { cepRetorno } from "../models/cepRetorno";

@Injectable({
  providedIn: 'root'
})
export class CepService {
  constructor(private http: HttpClient){ }

  // Realiza a consulta do CEP na API
  buscaCep(cep: string): Observable<cepRetorno> {
    return this.http.get<cepRetorno>(`https://viacep.com.br/ws/${cep}/json`);
  }
}
