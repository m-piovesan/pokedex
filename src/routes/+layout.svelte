<script lang="ts">
    import '../styles/global.scss';
    import Sidebar from '../components/Sidebar/Sidebar.svelte'
    import Sidebar2 from '../components/Sidebar-rightside/Sidebar2.svelte';
    import '../styles/layout.scss';
    let { children } = $props();
</script>

<div class="base-layout">
    <Sidebar />
    
    <div class="children">
        {@render children()}
    </div>

    <Sidebar2 />
</div>

