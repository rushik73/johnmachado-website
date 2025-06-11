<script lang="ts">
    import { fade } from 'svelte/transition';
    import { onMount, onDestroy } from 'svelte';
  
    export let images: string[] = [];
    export let interval = 5000;      // ms between slides
    export let fadeDuration = 800;   // ms for each fade
  
    let current = 0;
    let timer: ReturnType<typeof setInterval>;
  
    onMount(() => {
      timer = setInterval(() => {
        current = (current + 1) % images.length;
      }, interval);
    });
  
    onDestroy(() => {
      clearInterval(timer);
    });
  </script>
  
  <div class="relative w-full pt-[40%] overflow-hidden">
    {#each images as src, i}
      {#if i === current}
        <img
          src={src}
          alt="Slide {i + 1}"
          class="absolute inset-0 w-full h-full object-cover object-center"
          in:fade={{ duration: fadeDuration }}
          out:fade={{ duration: fadeDuration }}
        />
      {/if}
    {/each}
  </div>
  