<script lang="ts">
    import Navbar from '$lib/components/Navbar/Navbar.svelte';
    import Slideshow from './LandingSlideshow.svelte';
    import ReviewSlideshow, { type Review } from './ReviewSlideshow.svelte';

    const LandPics = [
        '/LandingPics/Screenshot 2025-04-11 at 2.08.51 PM.png',
        '/LandingPics/Screenshot 2025-05-03 at 4.39.58 PM.png',
        '/LandingPics/2022-08-01.jpeg',
        '/LandingPics/IMG_20200217_201230.jpeg',
        '/LandingPics/IMG_E16812E63CCD-1.jpeg'
    ];

    const reviews: Review[] =[
        {
            text: "Master John is incredibly knowledgeable and just a stand-up human being. He and his brothers are so humble and generous that it truly will blow you away. As both a jujiteiro and a spinal specialist I am incredibly picky about what JiuJitsu schools I endorse. I am proud to say that I recommend that anyone looking for an amazing school to start or continue their jiujitsu journey should look no further than John Machado Brazilian Jiu-Jitsu.",
            author: "Dr.Christian Nelson (Advocate Wellness)",
            rating: 5
        },
        {
            text: "Knowledgeable and friendly staff, great instruction and great attitude overall. A must attend while in the DFW area!",
            author: "Javier Mendez",
            rating: 5
        },
        {
            text: "I’ve been training at the John Machado Brazilian Jiu Jitsu Academy since Spring 2021 with no previous training in any other martial art. Master Machado and his family never cease to make me feel like family. I am continually learning/growing from the excellent instruction of Master Machado and also from several black and brown belt instructors.The various levels and ages of training partners also keep me learning and constantly challenged. All who train are always willing to help others grow and improve with high level competition and respect.",
            author: "Brent Matthews",
            rating: 5
        },
        {
            text: "Perfect atmosphere for learning BJJ.",
            author: "Huy Nguyen",
            rating: 5
        },
        {
            text: "This place is amazing. The Machado family has built a legacy, and the opportunity to come learn here is a once in a lifetime opportunity. Everyone here treats you like family, no better place to train!",
            author: "Stephan Dunn",
            rating: 5
        },
        {
            text: "If you balance a stressful course load or a demanding job, then this is the perfect relief. When you enter this gym, you forget about all your problems. when you leave the gym you are better equipped to deal with your problems because your mind has been cleared.",
            author: "Mays Alshaikhsalama",
            rating: 5
        },
    ]
</script> 

<main  id="home">
    <Slideshow images={LandPics} interval={5000} fadeDuration={800} />
    <div class="flex flex-col md:flex-row items-center justify-center space-y-1 md:space-y-0 md:space-x-4 bg-black text-white py-5 px-6 text-center">
        <a href="/contact" class="flex items-center space-x-2 hover:text-yellow-300 text-xl">
    <img src="/icons/location-pin.png" alt="Location" class="w-7 h-7" />
        <span class="font-bold font-play">111 Central Expy S #116, Allen, TX 75013</span>
    </a>
     <a href="tel:+14698857905" class="flex items-center space-x-2 hover:text-yellow-300 text-xl">
          <span class="font-bold font-play">(469) 885‑7905</span>
        </a>
      </div>

<section class="relative w-full bg-cover bg-center py-45" style="background-image: url('/LandingPics/2021-10-25.webp');">
    <div class="absolute inset-0 bg-black/60 z-0"></div>
    <div class="relative container mx-auto px-6 text-center md:text-left">
        <h1 class="text-white text-2xl md:text-4xl font-play font-bold leading-tight">
          John Machado Jiu‑Jitsu is the place to be for world‑class Brazilian Jiu‑Jitsu training.
          Led by Head Instructor Master John Machado, a 7th‑degree Coral Belt in Brazilian Jiu‑Jitsu.
          For over 40 years the Machado Brothers have been dedicated to the art of Brazilian Jiu‑Jitsu.
        </h1>
        <p class="mt-6 text-white text-xl md:text-2xl font-play whitespace-nowraps">
         Train with the best in Brazilian Jiu‑Jitsu in the Allen area to build confidence, master real-world self-defense, and transform your body and mind.
         Whether you're a beginner or seasoned athlete, our expert instructors are here to guide you in every step of the way in a supportive and challenging environment.
        </p>
      </div>
</section>

    <div class="flex flex-col md:flex-row items-center justify-center space-y-1 md:space-y-0 md:space-x-4 bg-black text-white py-5 px-6 text-center">
        <a href="/programs" class="flex items-center space-x-2 hover:text-yellow-300 text-xl">
            <span class="font-large font-bold font-play">Ready to roll? Browse our schedule and programs to try a free BJJ Class!</span>
        </a>
  </div>

  <ReviewSlideshow {reviews} interval={7000} slideDuration={600} />


</main>