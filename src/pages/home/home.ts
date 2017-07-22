import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { PokemonServiceProvider } from '../../providers/pokemon-service/pokemon-service';
import { Pokemon } from '../../model/Pokemon';
import { DetalhePage } from '../detalhe/detalhe';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public pokemons: Pokemon[];

  constructor(public navCtrl: NavController, 
              public loadingCtrl: LoadingController,
              public pokemonSrv: PokemonServiceProvider) {
    let loading = this.loadingCtrl.create({
      content: "Carregando os Pokemons ..."
    });

    this.pokemonSrv.pokedex().subscribe((result) => {
      this.pokemons = result;
      loading.dismiss();
    });
  }

  exibirDetalhe(p) {
    this.navCtrl.push(DetalhePage, {pokemon: p});
  }

  buscaPokemons(event) {
    let val = event.target.value;

    this.pokemonSrv.pokedex().subscribe((result) => {
      this.pokemons = result.filter((pokemon) => {
        return (pokemon.name.toLowerCase().indexOf(val.toLowerCase()) >= 0);        
      });
    });
  }
}
