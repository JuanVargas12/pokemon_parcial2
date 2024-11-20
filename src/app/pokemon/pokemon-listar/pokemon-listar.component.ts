import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-listar',
  templateUrl: './pokemon-listar.component.html',
  styleUrls: ['./pokemon-listar.component.css']
})
export class PokemonListarComponent implements OnInit {
  pokemon: any;

  constructor(
    private route: ActivatedRoute,
    private PokemonService: PokemonService
  ) {}


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.PokemonService.getPokemon(id!).subscribe((data) => {
      this.pokemon = data;
    });
  }
}

