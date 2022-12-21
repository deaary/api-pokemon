import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pokemon } from './models/pokemon';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pokemon!: Pokemon

  formPokemon: FormGroup = this.formBuilder.group(
    {
      name: ['',[Validators.required]]
    }
  )

  constructor(
    private pokemonService: PokemonService,
    private formBuilder: FormBuilder
  ) { }

  buscarPokemon():void {
  const pokeName: string = this.formPokemon.value.name  

    this.pokemonService.getPokemon(pokeName).subscribe(
      (poke) => {
        this.pokemon = poke
      }
    )
  }
  }