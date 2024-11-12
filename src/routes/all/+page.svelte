<script lang="ts">
    import axios from 'axios';
    import { onMount } from 'svelte';
    import type { PokemonApiResponse, Pokemon } from '../../utils/types.js';
    import PokeCard from '../../components/Pokemon-card/PokeCard.svelte';
    import './styles.scss'

    let pokemonList: Pokemon[] = [];

    async function fetchPokemonData() {
        try {
            const response = await axios.get<PokemonApiResponse>('https://pokeapi.co/api/v2/pokemon?limit=107');
            
            const promises = response.data.results.map(async (pokemon) => {
                const res = await axios.get<Pokemon>(pokemon.url);

                return {
                    ...res.data,
                    types: res.data.types.map(typeInfo => ({
                        type: {
                            name: typeInfo.type.name
                        }
                    }))
                };
            });

            pokemonList = await Promise.all(promises);
        } catch (error) {
            console.error('Erro ao buscar os dados dos Pokémon:', error);
        }
    }


    onMount(fetchPokemonData);
</script>

<div class="pokemon-container">
    {#each pokemonList as pokemon, index}
        <PokeCard {pokemon} />
    {/each}
</div>
