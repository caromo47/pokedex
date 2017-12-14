import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PokemonService {

  constructor(private _http: Http) { }
  requestPokemon(id){
  	console.log('in requestPokemon service method');
  	return this._http.get('http://pokeapi.co/api/v2/pokemon/'+id).map(Response=>Response.json()).toPromise();
  }
}
