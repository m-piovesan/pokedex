<script lang="ts">
    import type { Pokemon } from '../../utils/types.ts';
    import { typeColors } from '../../utils/types.js';
    export let pokemon: Pokemon;
    import './styles.scss';
</script>

<div class="card">
    <img src={pokemon.sprites} alt="{pokemon.name} sprite">

    <p>{pokemon.name}</p>
    <span>#{pokemon.id}</span>

    <div class="types-display">
        {#each pokemon.types as type}
            <span style="background-color: {typeColors[type]}">{type}</span>
        {/each}
    </div>
</div>
