<script lang="ts">
  // This receives data returned by your action (success/error)
  export let form: import('./$types').ActionData | null = null;

  import Contact from '$lib/components/contact.svelte';
</script>

<Contact {form} />