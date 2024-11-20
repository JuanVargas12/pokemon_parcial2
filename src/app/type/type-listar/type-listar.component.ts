import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../pokemon/pokemon.service';

@Component({
  selector: 'app-type-listar',
  templateUrl: './type-listar.component.html',
  styleUrls: ['./type-listar.component.css']
})
export class TypeListComponent implements OnInit {
  type: string = '';
  pokemons: any[] = []; 
  
  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.type = this.route.snapshot.paramMap.get('type') || '';
    this.cargarPokemonsPorTipo();
  }

  cargarPokemonsPorTipo(): void {
    this.pokemonService.getPokemonsByType(this.type).subscribe((data) => {
      this.pokemons = data.pokemon.map((p: any) => ({
        name: p.pokemon.name,
        url: p.pokemon.url
      }));
    });
  }
}