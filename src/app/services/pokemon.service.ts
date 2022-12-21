import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http: HttpClient
  ) { }

  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/'  

  getPokemon(pokemon:string): Observable<Pokemon>{
    
    return this.http.get<Pokemon>(this.baseUrl+pokemon)    
  }
}
