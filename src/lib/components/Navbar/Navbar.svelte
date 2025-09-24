<script lang="ts" >
    
  import { fade, slide } from "svelte/transition";
  import {Hamburger} from 'svelte-hamburgers';
  

  let isOpen = false;
  const toggleMenu = () => { isOpen = !isOpen; };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Programs", href: "/programs" },
    { name: "Legacy", href: "/legacy" },
    { name: "Our Members", href: "/ourmembers" },
    { name: "Contact", href: "/contact"},
    { name: "Shop", href: "https://shopmachado.com"}
  ];
</script>

<nav class="bg-black text-white px-6 py-4">
  <div class="container mx-auto flex items-center justify-between">

    <!-- Logo & Title -->
    <div class="flex items-center space-x-10">
      <img src="/logo.png" alt="My logo" class="h-18 w-auto" />
      <span class="text-xl font-play font-bold">JOHN MACHADO JIU-JITSU ACADEMY</span>
    </div>

    <!-- Desktop Menu -->
    <ul class="hidden md:flex space-x-14 list-none text-lg ml-10 font-play">
      {#each navLinks as link} 
        <li>
          <a href={link.href} class="text-white hover:text-yellow-300">{link.name}</a>
        </li>
      {/each}
    </ul>

    <!-- Hamburger (mobile) -->
  
    <div class="md:hidden">
      <Hamburger
        bind:open={isOpen}
        on:click={toggleMenu}
        ariaLabel="Toggle menu"
        --color="white"
        --active-color="white"
      />
    </div>
  </div>

  

  <!-- Mobile Menu -->
  {#if isOpen}
    <ul in:slide out:fade class="md:hidden mt-2 space-y-2 px-4 list-none bg-black">
      {#each navLinks as link}
        <li>
          <a href={link.href} class="block py-2 px-4 text-white font-play font-bold hover:text-yellow-300">{link.name}</a>
        </li>
      {/each}
    </ul>
  {/if}
</nav>