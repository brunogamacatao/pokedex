import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Pokemon } from '../../model/Pokemon';
import { PokemonServiceProvider } from '../../providers/pokemon-service/pokemon-service';

@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html',
})
export class DetalhePage {
  public pokemon: Pokemon;
  public dados: any = {};

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public pokemonSrv: PokemonServiceProvider) {
    this.pokemon = <Pokemon>this.navParams.get('pokemon');
    this.pokemonSrv.pokemon(this.pokemon.id).subscribe((result) => {
      this.dados = result.json();
    });
  }
}
