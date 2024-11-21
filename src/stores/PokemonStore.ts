// src/stores/PokemonStore.ts
import { readable } from 'svelte/store';
import axios from 'axios';
import type { Pokemon, PokemonType } from '../utils/types.js';

export const pokemonData = readable<Pokemon[]>([], (set) => {
    const fetchData = async () => {
        try {
            // Busca os 151 primeiros Pokémon
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
            const basicPokemonList = response.data.results;

            // Para cada Pokémon, busca os detalhes
            const detailedPokemonList = await Promise.all(
                basicPokemonList.map(async (pokemon: { name: string; url: string }) => {
                    const details = await axios.get(pokemon.url);
                    const data = details.data;

                    return {
                        name: data.name,
                        url: pokemon.url,
                        sprites: data.sprites.other['showdown'].front_default,
                        types: data.types.map((t: { type: PokemonType }) => t.type.name),
                        id: data.id,
                    } as Pokemon;
                })
            );

            // Atualiza o store com a lista detalhada
            set(detailedPokemonList);
        } catch (error) {
            console.error('Erro ao buscar os Pokémon:', error);
        }
    };

    fetchData();

    return () => {};
});
