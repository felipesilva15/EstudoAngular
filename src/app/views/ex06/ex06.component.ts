import { Component } from '@angular/core';
import { pokemonRetorno } from 'src/app/models/pokemonRetorno';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-ex06',
  templateUrl: './ex06.component.html',
  styleUrls: ['./ex06.component.css']
})
export class Ex06Component {
  constructor(private PokeApiService: PokeApiService){}

  pokemon: string = '';
  objPokemonRetorno: pokemonRetorno = new pokemonRetorno();

  consultarPokemon(): void{
    this.PokeApiService.requisitarPokemon(this.pokemon.trim().toLowerCase()).subscribe(
      // Deu certo. Popula o objeto
      retornoPokemon => {
        this.objPokemonRetorno.id = retornoPokemon.id;
        this.objPokemonRetorno.nome = this.camelCase(retornoPokemon.name);
        this.objPokemonRetorno.imageUrl = retornoPokemon.sprites.front_default;
        
        retornoPokemon.types.forEach((item: any, index: number) => {
          this.objPokemonRetorno.tipos[index] = this.camelCase(item.type.name);
        });
      },
      // Deu erro. Exibe ao usuário
      (err) => {
        alert(`Falha ao consultar Pokémon: ${err.message}`)
        console.log(err);
      }
    );
  }

  camelCase(str: string): string{
    let strCamelCase: string = str.toLowerCase().replace(/\b[a-z]/g, function(letter: string){
      return letter.toUpperCase();
    });;

    return(strCamelCase);
  }
}
