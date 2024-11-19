<script lang="ts">
    import '../styles/home.scss';
    import { onMount } from 'svelte';
    import { typeColors, type Pokemon } from '../utils/types.js';
    import { PokemonClient } from 'pokenode-ts';

    let dayPokemon: Pokemon;

    function getRandomPokemonId(): number {
        return Math.floor(Math.random() * 151) + 1;
    }

    async function getDescription(id: number): Promise<string | undefined> {
        const api = new PokemonClient();

        try {
            const data = await api.getCharacteristicById(id);
            return data.descriptions[7]?.description;
        } catch (error) {
            console.error('Erro ao buscar descrição:', error);
            return 'Descrição não encontrada';
        }
    }

    async function fetchRandomPokemon() {
        const randomId = getRandomPokemonId();
        const api = new PokemonClient();

        try {
            const data = await api.getPokemonById(randomId);

            const description = await getDescription(randomId);

            dayPokemon = {
                id: data.id,
                name: data.name,
                url: data.sprites.front_default || '',
                types: data.types.map((type) => ({
                    type: type.type,
                    color: typeColors[type.type.name],
                })),
                sprites: data.sprites.other?.dream_world.front_default || '',
                description: description,
            };
        } catch (error) {
            console.error('Erro ao buscar dados do Pokémon:', error);
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
                    src={dayPokemon.url}
                    alt="{dayPokemon.name} sprite"
                />
    
                <div class="day-pkm-txt">
                    <h2>{dayPokemon.name}</h2>
                    
                    {#each dayPokemon.types as pkm}
                        <span style="background-color: {typeColors[pkm.type.name]}">{pkm.type.name}</span>
                    {/each}

                    <p>{dayPokemon.description}</p>
                </div>
            </div>
        </div>
    {:else}
        <p>Loading Pokémon...</p>
    {/if}
</div>
