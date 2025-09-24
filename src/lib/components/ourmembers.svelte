<script lang=ts>
    const members: Members = [
        {
            Name: "Master John Machado",
            Role: "Head Instructor",
            Rank: "7th Degree Coral Belt",
            Image: "/Members/john-machado.jpg"
        },
        {
            Name: "Professor John Machado Jr",
            Role: "Advanced Class Instructor", 
            Rank: "3rd Degree Black Belt",
            Image: "/Members/john-machado-jr.jpg"
        },
        {
            Name: "Professor Jean Machado",
            Role: "Beginner Class Instructor", 
            Rank: "2nd Degree Black Belt",
            Image: "/Members/Jean-Machado-Brazilian-Jiu-Jitsu-Instructor-at-John-Machado-Allen.jpg"
        },
        {
            Name: "Roberta Hardin",
            Role: "Operations Manager/Receptionist",
            Rank: "Purple Belt",
            Image: "/Members/Bobbie.jpg"
        },
        {
            Name: "Professor Steve Myers",
            Role: "Beginner/Advanced Class Instructor", 
            Rank: "2nd Degree Black Belt",
            Image: "/Members/Steve-Myers-Brazilian-Jiu-Jitsu-Instructor-at-John-Machado-Allen.jpg"
        },
        {
            Name: "Professor Mat Polley",
            Role: "Beginner/Advanced Class Instructor", 
            Rank: "3rd Degree Black Belt",
            Image: "/Members/mat-polley.jpg"
        }, 
        {
            Name: "Professor Clyde Campos",
            Role: "Beginner/Advanced/Wrestling Class Instructor", 
            Rank: "Black Belt",
            Image: "/Members/clyde-campos.jpg"
        },
        {
            Name: "Professor Robert Foster",
            Role: "Evening Advanced Class Instructor", 
            Rank: "Black Belt",
            Image: "/Members/Robert-Foster-Brazilian-Jiu-Jitsu-Instructor-at-John-Machado-Allen-Kids-Class.jpg"
        },
        {
            Name: "Jacob Schwann",
            Role: "Wrestling/Competition Class Instructor, Competitor", 
            Rank: "Brown Belt",
            Image: "/Members/jacob-schwann.jpg"
        },
        {
            Name: "Camillo Latorre",
            Role: "Advanced Class Instructor, Competitor", 
            Rank: "Brown Belt",
            Image: "/Members/Camillo-Latorre.jpg"

        },
        {
            Name: "Mikal Jordan",
            Role: "Noon Class Instructor, Competitor", 
            Rank: "Brown Belt",
            Image: "/Members/Mikal-Jordan.jpg"
        },
        {
            Name: "Joel Halpin",
            Role: "Noon Class Instructor",
            Rank: "Purple Belt",
            Image: "/Members/Joel-Halpin.jpg"
        },
        {
            Name: "Professor Keith Bryant",
            Role: "Morning Class Instructor", 
            Rank: "Black Belt",
            Image: "/Members/Keith-Bryant-Brazilian-Jiu-Jitsu-Instructor-Machado-Allen-TX-1.jpg"
        }, 
        {
            Name: "Professor Andrew Zai", 
            Role: "Morning Class Instructor",
            Rank: "Black Belt",
            Image: "/Members/andrew-zai.jpg"
        }, 
        {
            Name: "Beau Vernon",
            Role: "Morning Class Instructor", 
            Rank: "Brown Belt",
            Image: "/Members/Beau-vernon.jpg"
        }, 
        {
            Name: "Johnny Chinchilla",
            Role: "Youth Class Instructor", 
            Rank: "Brown Belt",
            Image: "/Members/johnny-chinchilla.png"
        },
        {
            Name: "Andrew Doyle",
            Role: "Wrestling Class Instructor",
            Rank: "Purple Belt",
            Image: "/Members/Andrew-Doyle.jpg"
        },
    ];
</script>

<main>
    <div class="member-title" style=" background:linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/Members-Title.jpg') center/cover no-repeat; width:100%; height:450px; display:grid; place-items:center; " >
        <h1 style="color:#fff; margin:0; text-align:center; font-weight:700; font-size:2.5rem; font-family:'Play'">
            Instructors & Competitors
        </h1>
    </div>

    <div class="profiles-container max-w-6xl mx-auto px-4 mt-8 md:mt-12 lg:mt-16">
  <div class="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
    {#each members as member}
      <article class="bg-white overflow-hidden shadow-md flex flex-col h-full">
        <img
          src={member.Image}
          alt={member.Role}
          class="w-full h-36 sm:h-40 md:h-44 object-cover object-top" />
        <div class="p-3 flex-1">
          <p class="text-black-900 text-sm text-center font-bold font-play">{member.Name}</p>
          <p class="text-black-900 text-sm text-center font-play">{member.Role}</p>
          <p class="text-black-700 text-xs text-center font-play">{member.Rank}</p>
        </div>
      </article>
    {/each}
  </div>
</div>


</main>