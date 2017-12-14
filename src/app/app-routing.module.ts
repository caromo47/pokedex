import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokedexComponent } from './pokedex/pokedex.component';
import { BattleComponent } from './battle/battle.component';

const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
  	path: 'pokedex',
  	component: PokedexComponent
  },
  {
  	path: 'battle',
  	component: BattleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
