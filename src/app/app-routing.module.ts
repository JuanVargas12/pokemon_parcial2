import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetalleComponent } from './pokemon/pokemon-detalle/pokemon-detalle.component';
import { PokemonListarComponent } from './pokemon/pokemon-listar/pokemon-listar.component';
import { TypeListComponent } from './type/type-listar/type-listar.component';

const routes: Routes = [
  { path: '', component: PokemonListarComponent },
  { path: 'pokemon/:id', component: PokemonDetalleComponent },
  { path: 'type/:type', component: TypeListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
