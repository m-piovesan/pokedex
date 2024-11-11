<script lang="ts">
    import '../styles/global.scss';
    import Sidebar from '../components/Sidebar/Sidebar.svelte'
    import '../styles/layout.scss';
    let { children } = $props();
</script>

<div class="base-layout">
    <Sidebar />
    
    <div class="children">
        {@render children()}
    </div>

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
</div>

