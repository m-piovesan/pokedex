<script lang="ts">
    import { onMount } from 'svelte';
    import '../styles/home.scss';
    import { typeColors, type Pokemon } from '../utils/types.js';
    import { pokemonData } from '../stores/PokemonStore.js';

    function getRandomPokemonId(): number {
        return Math.floor(Math.random() * 151) + 1;
    }

    let dayPokemon: Pokemon | null = null;

    onMount(() => {
        const randomId = getRandomPokemonId();
        dayPokemon = $pokemonData[randomId - 1];
    });
</script>

<div class="home-container">
    <h1>Pokémon of the day</h1>

    {#if dayPokemon}
        <div class="day-pkm-card">
            <div class="day-pkm-content">
                <img 
                    src={dayPokemon.sprites}
                    alt="{dayPokemon.name} sprite"
                />
    
                <div class="day-pkm-txt">
                    <h2>{dayPokemon.name}</h2>
                    
                    {#each dayPokemon.types as type}
                        <span style="background-color: {typeColors[type]}">{type}</span>
                    {/each}

                    <p>{dayPokemon.description}</p>
                </div>
            </div>
        </div>
    {:else}
        <p>Loading Pokémon...</p>
    {/if}
</div>
