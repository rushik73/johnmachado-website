<script lang="ts" context="module">
    // only in context="module" can you export types
    export type Review = {
      text: string;
      author: string;
      rating: number;
    };
  </script>

<script lang="ts" >
    import {onMount, onDestroy} from 'svelte';

     interface Review{
        text: string;
        author: string;
        rating: number;
    }

    export let reviews: Review[] = [];
    export let interval = 6000;
    export let slideDuration = 500;

    let current = 0;
    let timer: ReturnType<typeof setInterval>;

    const resetTimer = () => {
        clearInterval(timer);
        timer = setInterval(next, interval);
    };

    const prev = () => {
        current = (current - 1 + reviews.length) % reviews.length
        resetTimer();
    };

    const next = () => {
        current = (current + 1) % reviews.length
        resetTimer();
    };

    onMount(() => {
        timer = setInterval(next, interval);
    });
</script>

<section class="relative py-16 px-4 min-h-[65vh] overflow-hidden">
    <!-- 1) Background image layer -->
    <div
      class="absolute inset-0 bg-[url('/LandingPics/IMG_2018.jpg')] bg-center bg-cover"
    ></div>
  
    <!-- 2) Semi‑opaque black overlay -->
    <div class="absolute inset-0 bg-black/50"></div>
  
    <!-- 3) Your content on top -->
    <div class="relative z-10 text-white text-center w-full">
      <h1 class="font-play font-bold text-7xl">REVIEWS</h1>
      <p class="text-base uppercase tracking-widest mb-8 drop-shadow-sm">Powered by Google</p>
  
      <!-- slider viewport -->
      <div class="overflow-hidden w-screen">
        <div
          class="flex items-start transition-transform duration-500 ease-in-out"
          style="width: {reviews.length * 100}%; transform: translateX(-{current * (100 / reviews.length)}%);"
        >
          {#each reviews as { text, author, rating }}
            <div class="w-screen flex-shrink-0 px-4 flex justify-center">
              <div class="px-6 md:px-10 py-6 backdrop-blur-md rounded-xl max-w-4xl w-full">
                <p class="font-sans text-lg md:text-xl leading-relaxed text-gray-200 mb-6">
                  {text}
                </p>
                <div class="flex items-center justify-center space-x-3">
                  <span class="font-bold text-white">{author}</span>
                  <div class="flex space-x-1 text-yellow-400">
                    {#each Array(5) as _, i}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5 fill-current {i < rating ? '' : 'opacity-30'}"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09L5.5 11.545 1 7.91l6.06-.91L10 1l2.94 6 6.06.91-4.5 3.636 1.378 6.545z"/>
                      </svg>
                    {/each}
                  </div>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
  
      <!-- dots -->
      <div class="flex justify-center space-x-2 mt-8">
        {#each reviews as _, idx}
          <button
            class="w-3 h-3 rounded-full {idx === current ? 'bg-white' : 'bg-gray-600'}"
            on:click={() => { current = idx; resetTimer(); }}
          />
        {/each}
      </div>
  
      <!-- Prev/Next arrows -->
      <button
        class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full z-20"
        on:click={prev}
        aria-label="Previous review"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 19l-7-7 7-7"/>
        </svg>
      </button>
  
      <button
        class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full z-20"
        on:click={next}
        aria-label="Next review"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 5l7 7-7 7"/>
        </svg>
      </button>
    </div>
  </section>