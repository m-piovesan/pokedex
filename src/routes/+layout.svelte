<!-- layout.svelte -->
<script lang="ts">
    import '../styles/global.scss';
    import Sidebar from '../components/Sidebar/Sidebar.svelte'
    import '../styles/layout.scss';
    let { children } = $props();
</script>

<div class="container">
    <Sidebar />
    {@render children()}
</div>

