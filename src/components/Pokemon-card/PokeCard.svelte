<script lang="ts">
    import type { Pokemon } from '../../utils/types.js';
    import { typeColors } from '../../utils/types.js'
    export let pokemon: Pokemon;
    import './styles.scss'
</script>

<div class="card">
    <img src={pokemon.sprites.other.showdown.front_default} alt="{pokemon.name} sprite" >
    <p>{pokemon.name}</p>
    <span>#{pokemon.id}</span>

    <div class="types-display">
        {#each pokemon.types as pkm}
            <span style="background-color: {typeColors[pkm.type.name]}">{pkm.type.name}</span>
        {/each}
    </div>
</div>