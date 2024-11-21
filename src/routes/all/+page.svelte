<script lang="ts">
    import PokeCard from '../../components/Pokemon-card/PokeCard.svelte';
    import './styles.scss';
    import { pokemonData } from '../../stores/PokemonStore.js';
    import type { Pokemon } from '../../utils/types.js';

    let pokemonList: Pokemon[] = [];
    $: $pokemonData && (pokemonList = $pokemonData);
</script>

<div class="pokemon-container">
    {#if pokemonList.length > 0}
        {#each pokemonList as pokemon (pokemon.id)}
            <PokeCard {pokemon} />
        {/each}
    {:else}
        <p>Carregando os Pokémon...</p>
    {/if}
</div>
