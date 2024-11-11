<script lang="ts">
    import type { Pokemon } from '../../utils/types.js';
    export let pokemon: Pokemon;
    import './styles.scss'
</script>

<div class="card">
    <img src={pokemon.sprites.other.showdown.front_default} alt="{pokemon.name} sprite" >
    <span>{pokemon.name}</span>
</div>