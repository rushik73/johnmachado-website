<script lang="ts">
    import {onMount} from 'svelte';
    import { fly } from 'svelte/transition';
    const CelebPics = [
        {
            image: '/Machado celebs/ChuckNorris.jpeg',
            desc: "Chuck Norris (Actor)",
        },
        {
            image: '/Machado celebs/KeanuReeves.jpg',
            desc: "Keanu Reeves (Actor)",
        },
        {
            image: '/Machado celebs/PauloCosta.jpeg',
            desc: "Paulo Costa (UFC Fighter)",
        },
        {
            image:'/Machado celebs/Chiwetel.jpg',
            desc: "Chiwetel Ejiofor (Actor)",
        },
        {
            image: '/Machado celebs/ThomasIanGriffith.jpg',
            desc: "Thomas Ian Griffith (Actor)",
        },
    ];

    const interval = 4000;
    const slideDuration = 500;
    
    let current = 0;
    let timer: ReturnType<typeof setInterval>;
    
    const next = () => {
        current = (current + 1) % CelebPics.length;
    };

    const prev = () => {
        current = (current - 1 + CelebPics.length) % CelebPics.length;
    };

    const resetTimer = () => {
        clearInterval(timer);
        timer = setInterval(next, interval); //run the next function every interval
    };

    onMount(() => { //lifecycle function that runs once, after the component is first rendered to the DOM.
        timer = setInterval(next, interval);
    });
</script>

<section>
  <div class="celeb-slides relative overflow-hidden w-full h-[360px]">
    {#each CelebPics as { image, desc }, i}
      {#if i === current}
        <div in:fly={{ duration: slideDuration }} out:fly={{ duration: slideDuration }}
             class="absolute inset-0 z-10 flex flex-col">

          <!-- image wrapper: positions arrows relative to the image width -->
          <div class="flex-1 min-h-0 grid place-items-center">
            <div class="relative mx-auto w-fit">
              <img src={image} alt={`John Machado with ${desc}`}
                   class="max-h-[300px] max-w-full object-contain" />

              <!-- Prev -->
              <button
                class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2
                       p-2 rounded-md bg-black/35 hover:bg-black/50 ring-1 ring-white/40
                       text-white z-20"
                on:click={prev}
                aria-label="Previous Affiliate">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                </svg>
              </button>

              <!-- Next -->
              <button
                class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2
                       p-2 rounded-md bg-black/35 hover:bg-black/50 ring-1 ring-white/40
                       text-white z-20"
                on:click={next}
                aria-label="Next Affiliate">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>

          <p class="text-center font-play text-base break-words p-2 shrink-0">{desc}</p>
        </div>
      {/if}
    {/each}
  </div>
</section>

