<script lang="ts">
    import './styles.scss';
</script>

<div class="content">
    <section>
        <div class="screen-1"></div>

        <div class="blue-buttons">
            {#each Array(8).fill(0) as _, i}
                <div></div>
            {/each}
        </div>

        <div class="white-buttons">
            <div>
                {#each Array(2).fill(0) as _, i}
                    <div></div>
                {/each}
            </div>
            
            <div class="yellow-circle"></div> 
        </div>

        <div class="screen-2">
            <div></div>
            <div></div>
        </div>
    </section>
</div>