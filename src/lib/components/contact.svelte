<script lang="ts">
  import { enhance } from '$app/forms';
  import { PUBLIC_GOOGLE_MAPS_KEY } from '$env/static/public';
  export let form: { sent?: boolean; error?: string } | null = null;
</script>

<main>
  
  <div class="relative w-full h-[65vh] overflow-hidden">
    <iframe
      src={`https://www.google.com/maps/embed/v1/place?key=${PUBLIC_GOOGLE_MAPS_KEY}&q=${encodeURIComponent('John Machado Jiu-Jitsu, Allen, TX')}&zoom=15`}
      class="absolute inset-0 w-full h-full border-0"
      allowfullscreen
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>


<div class="bg-black text-white">
  <div class="mx-auto max-w-6xl px-4">
    <div class="grid md:grid-cols-2">
      <div class="py-5 ">
  <div class="flex flex-nowrap items-center gap-3 whitespace-nowrap text-lg md:text-xl font-bold font-play">
    <span>Please fill out the form below to sign up or call us at</span>
    <a href="tel:+14698857905" class="underline underline-offset-4 hover:no-underline hover:text-yellow-300">
      (469) 885-7905
    </a>
    <span>and we will get back to you! •</span>

    <!-- operating hours link kept inline -->
    <a href="/programs" class="inline-flex items-center hover:text-yellow-300">
      Click here to see our operating hours
    </a>
  </div>
</div>
      <div class="hidden md:block"></div>
    </div>
  </div>
</div>

  <section class="bg-black text-white">
  <div class="mx-auto max-w-6xl px-4 py-12 grid gap-10 md:grid-cols-2 items-start">
    <!-- contact form -->
    <div class="form-container md:pr-8">
      <form method="POST"class="max-w-2xl grid gap-4" use:enhance>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="name"
            placeholder="Full name"
            required
            class="w-full rounded-md bg-zinc-900 border border-zinc-700 p-3 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            class="w-full rounded-md bg-zinc-900 border border-zinc-700 p-3 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          class="w-full rounded-md bg-zinc-900 border border-zinc-700 p-3 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-white/50"
        />

        <textarea
          name="message"
          placeholder="I'd like to sign up…"
          required
          rows="5"
          class="w-full rounded-md bg-zinc-900 border border-zinc-700 p-3 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-white/50"
        ></textarea>

        <!-- helps block bots -->
        <input type="text" name="company" class="hidden" tabindex="-1" autocomplete="off" />

        <button type="submit" class="inline-flex items-center justify-center rounded-md bg-white text-black px-5 py-3 font-play font-medium transition hover:opacity-50">
          Send
        </button>

        {#if form?.sent}
          <p class="text-green-400 mt-2 font-play">Thanks — message sent!</p>
        {/if}
        {#if form?.error}
          <p class="text-red-400 mt-2 font-play">{form.error}</p>
        {/if}
      </form>
    </div>

    <!-- socials (thin divider on md+) -->
    <aside class=" md:self-stretch md:border-l md:border-white">
      <div class="max-w-sm md:ml-auto">
        <h2 class="font-play text-2xl mb-4">Our Social Media:</h2>
        <ul class="flex md:flex-col flex-wrap gap-6">
          <!-- Facebook -->
          <li>
            <a
              href="https://www.facebook.com/johnmachadoacademy/"
              target="_blank"
              rel="noreferrer"
              class="group inline-flex items-center gap-3"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" class="w-7 h-7 fill-white/90 transition group-hover:fill-white">
                <path
                  d="M22 12.06C22 6.49 17.52 2 11.94 2S2 6.49 2 12.06c0 4.99 3.66 9.13 8.44 9.94v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.62.77-1.62 1.56v1.87h2.76l-.44 2.9h-2.32V22c4.78-.81 8.44-4.95 8.44-9.94Z"
                />
              </svg>
              <span class="hover:text-yellow-300 text-xl">Facebook</span>
            </a>
          </li>

          <!-- Instagram -->
          <li>
            <a
              href="https://www.instagram.com/johnmachadoacademy/"
              target="_blank"
              rel="noreferrer"
              class="group inline-flex items-center gap-3"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" class="w-7 h-7 fill-white/90 transition group-hover:fill-white">
                <path
                  d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.51 5.51 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5ZM17.75 6.5a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 17.75 6.5Z"
                />
              </svg>
              <span class="hover:text-yellow-300 text-xl">Instagram</span>
            </a>
          </li>

          <!-- YouTube -->
          <li>
            <a
              href="https://www.youtube.com/@johnmachado1"
              target="_blank"
              rel="noreferrer"
              class="group inline-flex items-center gap-3"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" class="w-7 h-7 fill-white/90 transition group-hover:fill-white">
                <path
                  d="M23.5 7.5a3.3 3.3 0 0 0-2.33-2.33C19.23 4.7 12 4.7 12 4.7s-7.23 0-9.17.47A3.3 3.3 0 0 0 .5 7.5 34.92 34.92 0 0 0 0 12a34.92 34.92 0 0 0 .5 4.5 3.3 3.3 0 0 0 2.33 2.33C4.77 19.3 12 19.3 12 19.3s7.23 0 9.17-.47A3.3 3.3 0 0 0 23.5 16.5 34.92 34.92 0 0 0 24 12a34.92 34.92 0 0 0-.5-4.5ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z"
                />
              </svg>
              <span class="hover:text-yellow-300 text-xl">YouTube</span>
            </a>
          </li>

          <!-- Gmail -->
          <li>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=john@johnmachadobjj.com&su=Sign-up&body=Hi%20John%20Machado%20BJJ%20Allen%2C%0A%0A"
              target="_blank"
              rel="noreferrer"
              class="group inline-flex items-center gap-3"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                class="w-7 h-7 text-white/90 transition group-hover:text-white"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" ry="2"></rect>
                <path d="M3 7l9 6 9-6"></path>
              </svg>
              <span class="hover:text-yellow-300 text-xl">Gmail</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</section>

  
</main>
