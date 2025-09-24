<script lang="ts">
    import Legacy from '$lib/components/legacy.svelte';
    export let data: import('./$types').PageData;
</script>

<Legacy posters={data.postersPath}/>