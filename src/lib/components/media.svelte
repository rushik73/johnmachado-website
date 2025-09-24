<script>
    import {onMount} from 'svelte';
    let data;

    onMount(() => {
        const resp = await fetch('https://www.imdb.com/name/nm0532403/?ref_=mv_close');
        data = resp.json();
    });
</script>

