import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Pokemon } from '../../model/Pokemon';

@Injectable()
export class PokemonServiceProvider {
  static readonly POKEDEX_URI = 'http://pokeapi.co/api/v1/pokedex/1/';

  constructor(public http: Http) {
  }

  pokedex() {
    return this.http.get(PokemonServiceProvider.POKEDEX_URI).map((result) => {
      return <Pokemon[]>(result.json().pokemon.map((p) => new Pokemon(p.name, p.resource_uri)));
    });
  }

  pokemon(id) {
    return this.http.get(`http://pokeapi.co/api/v2/pokemon/${id}`);
  }
}
