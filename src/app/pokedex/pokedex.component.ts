import { Component, OnInit } from '@angular/core';
import { PokemonService } from './../pokemon.service';
@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  id: string="";
  name: string="";
  imageSrc: string;
  constructor(private _pokemonService: PokemonService) { }

  ngOnInit() {
  }
  getPokemon(){
  	console.log('getPokemon', this.id);
  	this._pokemonService.requestPokemon(this.id)
  	.then((data)=>{
  		console.log("then", data);
  		console.log(data.sprites.front_default);
  		this.imageSrc = data.sprites.front_default;
  		this.name = data.name;
  		this.id = "";
  	})
  }
}
