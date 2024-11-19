<script lang="ts">
    import '../styles/home.scss';
    import axios from 'axios';
    import { onMount } from 'svelte';
    import { typeColors, type Pokemon } from '../utils/types.js';

    let dayPokemon: Pokemon;

    function getRandomPokemonId(): number {
        return Math.floor(Math.random() * 151) + 1;
    }

    async function fetchRandomPokemon() {
        const randomId = getRandomPokemonId();
        try {
            const response = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
            
            dayPokemon = {
                ...response.data,
                types: response.data.types.map(typeInfo => ({
                    type: {
                        name: typeInfo.type.name
                    }
                }))
            };
        } catch (error) {
            console.error('Erro ao buscar os dados do Pokémon:', error);
        }
    }

    onMount(fetchRandomPokemon);
</script>

<div class="home-container">
    <h1>Pokémon of the day</h1>

    {#if dayPokemon}
        <div class="day-pkm-card">
            <div class="day-pkm-content">
                <img 
                    src={dayPokemon.sprites.other.showdown.front_default}
                    alt="{dayPokemon.name} sprite"
                />
    
                <div class="day-pkm-txt">
                    <h2>{dayPokemon.name}</h2>
                    
                    {#each dayPokemon.types as pkm}
                        <span style="background-color: {typeColors[pkm.type.name]}">{pkm.type.name}</span>
                    {/each}
                </div>
            </div>
        </div>
    {:else}
        <p>Loading Pokémon...</p>
    {/if}
</div>