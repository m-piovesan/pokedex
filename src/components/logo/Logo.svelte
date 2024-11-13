<script lang="ts">
</script>

<div>
    <h1>Pokédex</h1>
    <img src="/pokedex-logo.png" alt="logo">
</div>

<style lang="scss">
    @use '../../styles/mixins.scss' as *;

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        
        h1 {
            font-family: "Rock Salt", cursive;
            color: $light-yellow;
        }

        img {
            width: 50px;
            height: 50px;
        }

        cursor: pointer;
    }
</style>