import { Component, OnInit } from '@angular/core';
import { PokemonService } from './../pokemon.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {
  id1: string="";
  name1: string="";
  imageSrc1: string;
  id2: string="";
  name2: string="";
  imageSrc2: string;
  constructor(private _pokemonService: PokemonService) { }

  ngOnInit() {
  }
  getPokemon1(){
  	this._pokemonService.requestPokemon(this.id1)
  	.then((data)=>{
  		this.name1 = data.name;
  		this.imageSrc1 = data.sprites.front_default;
  	})
  }
  getPokemon2(){
  	this._pokemonService.requestPokemon(this.id2)
  	.then((data)=>{
  		this.name2 = data.name;
  		this.imageSrc2 = data.sprites.front_default;
  	})
  }

}
