import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pokemonRetorno } from "../models/pokemonRetorno";

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  constructor(private http: HttpClient){ }

  // Realiza a consulta do CEP na API
  requisitarPokemon(pokemon: string): Observable<any> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  }
}
