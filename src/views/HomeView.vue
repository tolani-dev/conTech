<template>
  <!-- header -->
  <section class="bg-primary w-full h-full pt-[150px] md:pt-[200px] lg:pb-[10px] relative">
    <div class="m-auto w-[90%] lg:w-[60%] text-white">
      <img src="/src/assets/icons/Capa_3.svg" alt="capa"
        class="animate__animated  animate__pulse animate__infinite hidden lg:block lg:absolute top-[10.5vh] left-[16.5vw]" />
      <h4
        class="text-[40px] sm:text-[50px] md:text-[60px] font-bold m-auto leading-10 md:leading-[77px] sm:text-center">
        The largest convergence of Tech Disruptors in the AEC industry in Nigeria.
      </h4>
      <img src="/src/assets/icons/Capa_1.svg" alt="capa"
        class="animate__animated  animate__pulse animate__infinite hidden lg:block lg:absolute top-[25vh] right-[2vw]" />
      <img src="/src/assets/icons/Capa_2.svg" alt="capa"
        class="animate__animated  animate__pulse animate__infinite hidden lg:block lg:absolute top-[60vh] left-[2vw]" />
      <!-- <img src="/src/assets/icons/Capa_4.svg" alt="capa" class="animate__animated  animate__pulse animate__infinite hidden lg:block lg:absolute bottom-[40vh] left-[2vw]" /> -->
    </div>
    <!-- button -->
    <div class="sm:flex justify-center mt-[40px] md:mt-[80px] lg:my-10 gap-10">
      <button @click="registerBtn"
        class="rounded-lg bg-secondary px-8 py-2 ml-9 sm:ml-0 mb-4 sm:mb-0"><span>Register</span></button>
      <button @click="goToSponsor('sponsors')"
        class="rounded-lg border-[1px] border-secondary px-8 py-2 text-secondary ml-3 sm:ml-0"><span>For
          Sponsorship</span></button>
    </div>
    <div
      class="flex m-auto asset w-[70vw] sm:w-[70vw] lg:w-[50vw] xl:w-[50vw] sm:h-[30vh] md:h-[40vh] h-[30vh] mt-5 sm:mt-10 md:p-12 lg:p-0">
      <img src="/src/assets/icons/Groupwords.svg" alt="words" class="w-fit" />
    </div>
    <!-- <img src="/src/assets/icons/divider5.svg" alt="divider" class="hidden lg:block" /> -->
  </section>
  <section class="lg:h-full relative rectagle bg-[#e3e1ee] pb-10">
    <div
      class="relative flex justify-center items-center flex-col w-[80%] md:w-[70%] lg:w-[50%] m-auto pt-[50px] sm:pt-[100px]">
      <h3 class="font-extrabold sm:font-bold text-2xl md:text-4xl lg:text-5xl leading-10 text-[#0C0C0C] mb-10 sm:mb-10">
        What is ConTech Nigeria About?
      </h3>
      <div>
        <p class="mb-10 lg:text-lg lg:leading-7">
          ConTech Nigeria, spearheaded by a group of young innovators and professionals in the Architecture,
          Engineering, and Construction (AEC) sector, is the largest convergence of Tech disruptors, innovators, tech
          talents and enthusiasts, startups, and organizations in the Nigerian Construction Industry. This
          event(movement) serves as a catalyst for leveraging technological advancements and opportunities within
          Nigeria's AEC industry.
        </p>
        <p class="mb-10 lg:text-lg lg:leading-7">
          <span class="font-700 text-xl">Our mission</span> is to awaken technological innovation, bridge the investment
          opportunities gap, inspire tech talents and startups within the industry and empower the industry with the
          necessary resources and roadmaps to achieve sustainable technology development goals.
        </p>
        <p class="mb-10 lg:text-lg lg:leading-7">
          This inaugural event brings together innovative minds, industry experts and ConTech enthusiasts to explore the
          exciting potential of local tech solutions in shaping the future of the built environment.
        </p>
        <img src="/src/assets/icons/logo2.svg" alt="logo" class="items-center" />
      </div>
    </div>
    <!-- <div class="w-[524px] sm:w-[1400px] xl:w-[2000px] h-[65px] sm:h-[120px] lg:h-[202px] flex-shrink-0 rotate-[-7deg] bg-[#3A126B] mt-[-80px] sm:mt-[-190px] lg:mt-[-240px] xl:mt-[-290px] 2xl:mt-[-240px] ml-[-20px] flex items-center overflow-hidden"><div class="whitespace-nowrap will-change-transform animate-marquee flex items-center"><p class="text-[#F5F5F5] text-2xl sm:text-4xl lg:text-6xl xl:text-7xl font-kanitLight transition-colors">#GlobalTalent</p><p class="text-[#F5F5F5] text-2xl sm:text-4xl lg:text-6xl xl:text-7xl font-kanitLight transition-colors">#GlobalVisibility</p><p class="text-[#F5F5F5] text-2xl sm:text-4xl lg:text-6xl xl:text-7xl font-kanitLight transition-colors">#BlakskillOutlook</p><p class="text-[#F5F5F5] text-2xl sm:text-4xl lg:text-6xl xl:text-7xl font-kanitLight transition-colors">#VerifiedTalents</p><p class="text-[#F5F5F5] text-2xl sm:text-4xl lg:text-6xl xl:text-7xl font-kanitLight transition-colors">#TalentAcquisition</p><p class="text-[#F5F5F5] text-2xl sm:text-4xl lg:text-6xl xl:text-7xl font-kanitLight transition-colors">#TalentDevelopment</p></div></div> -->
    <!-- <div class="w-[524px] sm:w-[1400px] xl:w-[2000px] h-[65px] sm:h-[120px] lg:h-[202px] flex-shrink-0 rotate-[7deg] bg-[#3A126B] ml-[-20px] flex items-center overflow-hidden"><div class="whitespace-nowrap will-change-transform animate-marquee flex items-center"><p class="text-[#F5F5F5] text-2xl sm:text-4xl lg:text-6xl xl:text-7xl font-kanitLight transition-colors">#GlobalTalent</p><p class="text-[#F5F5F5] text-2xl sm:text-4xl lg:text-6xl xl:text-7xl font-kanitLight transition-colors">#GlobalVisibility</p><p class="text-[#F5F5F5] text-2xl sm:text-4xl lg:text-6xl xl:text-7xl font-kanitLight transition-colors">#BlakskillOutlook</p><p class="text-[#F5F5F5] text-2xl sm:text-4xl lg:text-6xl xl:text-7xl font-kanitLight transition-colors">#VerifiedTalents</p><p class="text-[#F5F5F5] text-2xl sm:text-4xl lg:text-6xl xl:text-7xl font-kanitLight transition-colors">#TalentAcquisition</p><p class="text-[#F5F5F5] text-2xl sm:text-4xl lg:text-6xl xl:text-7xl font-kanitLight transition-colors">#TalentDevelopment</p></div></div> -->
    <div class="pt-20 hidden md:block">
      <div
        class="w-[100vw] h-[7vh] flex-shrink-0 absolute bottom-[0vh] z-10 transform rotate-[4deg]  bg-primary-shades  flex items-center overflow-hidden">
        <div v-for="x in [1, 2, 3, 4, 5, 6, 7, 8, 9]" :key="x"
          class="px-7 whitespace-nowrap will-change-transform justify-between gap-4  flex-row animate-marquee flex items-center">
          <img src="/src/assets/icons/logo4.svg" class="" />
          <img src="/src/assets/icons/star.svg" class="w-5" />

        </div>
      </div>
      <div
        class="w-[100vw] h-[7vh] flex-shrink-0 absolute bottom-[0vh] z-10  rotate-[-4deg] bg-primary-shades flex items-center overflow-hidden">
        <div v-for="x in [1, 2, 3, 4, 5, 6, 7, 8, 9]" :key="x"
          class="px-7 whitespace-nowrap will-change-transform justify-between gap-4  flex-row animate-marquee2 flex items-center">
          <img src="/src/assets/icons/logo4.svg" class="" />
          <img src="/src/assets/icons/star.svg" class="w-5" />
        </div>
      </div>
    </div>
    <!-- <div class="track-wrapper">
      <div class="road-container road-container-1"><div class="road-track-wrapper"><img src="/src/assets/icons/divider2.svg" alt="Road Track" class="road-track fr-fic fr-dii">&nbsp;<img src="/src/assets/icons/divider2.svg" alt="Road Track" class="road-track fr-fic fr-dii"></div></div>
    </div> -->

  </section>
  <section class="bg-primary pt-[100x] relative">
    <img src="/src/assets/icons/Capa_6.svg" alt="capa"
      class="animate__animated  animate__pulse animate__infinite hidden lg:block lg:absolute top-[25vh] right-0" />
    <img src="/src/assets/icons/Hexagon_2.svg" alt="capa"
      class="animate__animated  animate__pulse animate__infinite hidden lg:block lg:absolute top-[60vh] left-0" />
    <div class="flex justify-center items-center flex-col w-[80%] lg:w-[50%] m-auto pt-[50px] sm:pt-[100px]">
      <h3 class="font-bold text-2xl md:text-4xl lg:text-5xl leading-10 text-[#EDEBF4] mb-10">ConTech Nigeria is aimed
        at</h3>
      <p class="text-[#EDEBF4] mb-10">This inaugural event brings together innovative minds, industry experts and
        ConTech enthusiasts to explore
        the exciting potential of local tech solutions in shaping the future of the built environment.
      </p>
      <div>
        <!--  -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!--  -->
          <div class="grid grid-flow-row gap-4">
            <div class="bg-primary-shades rounded-[15px]">
              <div class="p-10 w-[95%] m-auto items-center flex flex-col text-center h-full">
                <img src="/src/assets/icons/ignite.svg" alt="ignite" class="w-20 h-20" />
                <p class="text-secondary-shades">Igniting an awareness of locally developed technology in construction
                </p>
              </div>
            </div>
            <div class="bg-primary-shades rounded-[15px]">
              <div class="p-10 w-[95%] m-auto items-center flex flex-col text-center h-full">
                <img src="/src/assets/icons/accelerate.svg" alt="ignite" class="w-20 h-20" />
                <p class="text-secondary-shades">Accelerating collaboration between homegrown tech developers,
                  startups, industry professionals and potential users
                </p>
              </div>
            </div>
          </div>
          <div class="grid grid-flow-row gap-4">
            <div class="bg-primary-shades rounded-[15px] w-full">
              <div class="p-10 w-[95%] m-auto items-center flex flex-col text-center h-full">
                <img src="/src/assets/icons/showcasing.svg" alt="ignite" class="w-20 h-20" />
                <p class="text-secondary-shades">Showcasing cutting edge innovation and emerging technology in
                  response to challenges in the construction industry in Nigeria
                </p>
              </div>
            </div>
            <div class="bg-primary-shades rounded-[15px] w-full">
              <div class="p-10 w-[95%] m-auto items-center flex flex-col text-center h-full">
                <img src="/src/assets/icons/empower.svg" alt="ignite" class="w-20 h-20" />
                <p class="text-secondary-shades">Empowering local talent to sustain a thriving ConTech ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- <img src="/src/assets/icons/Grouptext.svg" alt="img" class="" /> -->
      </div>
      <div class="my-10">
        <button class="rounded-lg bg-secondary px-8 py-2" @click="registerBtn"><span>Register</span></button>
      </div>
    </div>
  </section>
  <section>
    <div class=" m-auto w-[80vw] p-3 md:p-6 lg:p-12">
      <div class="mb-7">
        <h3 class="font-bold text-2xl md:text-4xl lg:text-5xl leading-10 text-primary mb-2">What to Expect in ConTech
          2024</h3>
        <p>The following are the expected in the event coming up</p>
      </div>
      <div class="grid grids-col-1 sm:grid-cols-2 lg:grid-cols-4 gap-20">
        <div class="w-full relative">
          <img src="/src/assets/icons/expect1.svg" alt="expect" class="w-full" />
          <div class="bg-secondary p-5 text-center rounded-b-lg absolute bottom-0 w-full h-[10vh]">Master Classes</div>
        </div>
        <div class="w-full relative">
          <img src="/src/assets/icons/expect2.svg" alt="expect" class="w-full" />
          <div class="bg-secondary p-5 text-center rounded-b-lg absolute bottom-0 w-full h-[10vh]">Lightning Talks</div>
        </div>
        <div class="w-full relative">
          <img src="/src/assets/icons/expect3.svg" alt="expect" class="w-full" />
          <div class="bg-secondary p-5 text-center rounded-b-lg absolute bottom-0 w-full h-[10vh]">Brainstorming
            sessions
          </div>
        </div>
        <div class="w-full relative">
          <img src="/src/assets/icons/expect4.svg" alt="expect" class="w-full" />
          <div class="bg-secondary p-5 text-center rounded-b-lg absolute bottom-0 w-full h-[10vh]">Panel sessions</div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-primary relative">
    <img src="/src/assets/icons/Capa_7.svg" alt="capa"
      class="animate__animated  animate__pulse animate__infinite hidden lg:block lg:absolute top-[25vh] right-0" />
    <img src="/src/assets/icons/Torus_1_.svg" alt="capa"
      class="animate__animated  animate__pulse animate__infinite hidden lg:block lg:absolute top-[45vh] left-0" />
    <div class="flex justify-center flex-col items-center m-auto w-[80%] md:w-[70%] lg:w-[50%] py-[50px] sm:py-[100px]">
      <div>
        <h3 class="font-bold text-2xl md:text-4xl lg:text-5xl leading-10 text-secondary-shades mb-2 sm:text-center">Our
          Partners</h3>
        <p class="text-secondary-shades sm:text-2xl">A list of our partners for ConTech Nigeria 2024</p>
      </div>
      <div class="grid grid-cols-2 gap-4 items-center my-7">
        <img src="/src/assets/icons/patner1.svg" alt="" />
        <img src="/src/assets/icons/patner2.svg" alt="" />
      </div>
      <div>
        <button @click="becomeOurPatner" class="rounded-lg bg-secondary px-8 py-2"><span>Become Our
            Partner</span></button>
      </div>
    </div>
  </section>
  <section class="relative">
    <img src="/src/assets/icons/Capa_3.svg" alt="capa"
      class="animate__animated  animate__pulse animate__infinite hidden lg:block lg:absolute bottom-[-12vh] right-[16.5vw]" />
    <img src="/src/assets/icons/Capa_6.svg" alt="capa"
      class="animate__animated  animate__pulse animate__infinite hidden lg:block lg:absolute top-[5vh] right-0" />
    <div class="flex justify-center flex-col items-center m-auto w-[80%] md:w-[70%] lg:w-[50%] py-[60px] sm:py-[100px]">
      <div>
        <h3 class="font-bold text-2xl md:text-4xl lg:text-5xl leading-10 text-primary mb-2 sm:text-center">Join Our
          Communities</h3>
        <p class="text-primary sm:text-2xl">The following are the expected in the event coming up</p>
      </div>
      <div class="grid grid-cols-2 mt-[40px] md:mt-[80px] lg:my-10 gap-1 sm:gap-4 md:gap-10 lg:w-[25vw] items-center">
        <button @click="joinOurCommunity"
          class="rounded-lg bg-primary text-secondary-shades px-2 py-2 sm:ml-0 text-xs"><span>Join
            Community</span></button>
        <button @click="joinOurCommunity"
          class="rounded-lg border-[1px] border-primary sm:px-8 py-2 text-primary sm:ml-0 text-xs text-nowrap text-center"><span>Join
            Volunteers</span></button>
      </div>
      <div class="flex m-auto asset md:w-[55vw] mt-10">
        <img src="/src/assets/icons/phone1.svg" class="w-[]" />
      </div>
    </div>
  </section>
  <section class="bg-primary">
    <div class="flex justify-center flex-col items-center m-auto w-[80%] md:w-[70%] lg:w-[50%] py-[60px] sm:py-[100px]">
      <div>
        <h3 class="font-bold text-2xl md:text-4xl lg:text-5xl leading-10 text-secondary-shades mb-2">Everything you need
          to know about ConTech Nigeria 2024</h3>
        <p class="text-secondary-shades sm:text-2xl">The following are the expected in the event coming up</p>
      </div>
      <img src="/src/assets/icons/rainbow.svg" alt="" class="my-7" />
      <div class="">
        <!--  -->
        <div v-for="(item, index) in  whatToKnow " :key="index"
          class="w-[80vw] md:w-[70vw] lg:w-[50vw] flex justify-between gap-20 items-center border-b-[0.1px] border-secondary-shades">
          <div class="my-4 w-[85vw]">
            <h3 class="text-secondary-shades font-bold">{{ item.title }}</h3>
            <p v-if="item.isOpen == true" class="text-secondary-shades" :class="item.isOpen
        ? 'animate__animated animate__slideInDown'
        : 'animate__animated animate__slideOutDown'">{{ item.subtitle }}</p>
          </div>
          <div @click="toggleIsOpen(index)" class="w-[15vw]">
            <img v-if="item.isOpen" src="/src/assets/icons/hide.svg" alt="hide" class="w-10 h-5" />
            <img v-else src=" /src/assets/icons/show.svg" alt="hide" class="w-10 h-5" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="py-5 h-full lg:h-screen relative">
    <img src="/src/assets/icons/Capa_8.svg" alt="capa"
      class="animate__animated  animate__pulse animate__infinite hidden lg:block lg:absolute bottom-[12vh] left-0" />
    <img src="/src/assets/icons/Capa_9.svg" alt="capa"
      class="animate__animated  animate__pulse animate__infinite hidden lg:block lg:absolute bottom-[11vh] right-[6.5vw] z-10" />
    <div class="grid lg:grid-cols-3 w-[90vw] lg:w-[80vw] h-full m-auto items-center gap-20">
      <div class="relative seat">
        <div class="absolute bottom-0 bg-primary-tint rounded-b-xl p-18 w-full p-4 ">
          <h3 class="text-secondary-shades font-bold text-[18px] leading-6">Book your seat at ConTech</h3>
          <p class="text-secondary-shades mb-3 font-thin">Save a seat for yourself</p>
          <button @click="registerBtn"
            class="rounded-lg border-[1px] border-secondary px-8 py-2 text-secondary ml-3 sm:ml-0"><span>Register
              Now</span></button>
        </div>
      </div>
      <div class="relative seatTwo">
        <div class="absolute bottom-0 bg-primary-tint rounded-b-xl p-18 w-full p-4 ">
          <h3 class="text-secondary-shades font-bold text-[18px] leading-6">Exhibit at ConTech</h3>
          <p class="text-secondary-shades mb-3 font-thin">Exhibit your product or business to thousands of people</p>
          <button @click="goToSponsor('sponsors')"
            class="rounded-lg border-[1px] border-secondary px-8 py-2 text-secondary ml-3 sm:ml-0"><span>For
              Sponsorship</span></button>
        </div>
      </div>
      <div class="relative seatThree">
        <div class="absolute bottom-0 bg-primary-tint rounded-b-xl p-18 w-full p-4 ">
          <h3 class="text-secondary-shades font-bold text-[18px] leading-6">Become a Community Member</h3>
          <p class="text-secondary-shades mb-3 font-thin">Join our community</p>
          <button @click="joinOurCommunity"
            class="rounded-lg border-[1px] border-secondary px-8 py-2 text-secondary ml-3 sm:ml-0"><span>Register
              Now</span></button>
        </div>
      </div>
    </div>
  </section>
</template>


<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from 'vue-router';

export default defineComponent({
  name: "HomeView",
  setup(props, ctx) {
    console.log("welcome");
    const router = useRouter();
    const words = ref(["Product designers", "IT Professionals", "Builders", "Software Engineers", "Product designers", "Coder", "Engineers", "AEC Academic lecturers", "Facility Managers", "Architects", "Tech Developers", "Quantity surveyors", "Solution Architects", "Quantity surveyors", "Product designers", "IT Professionals", "Builders", "Software Engineers", "Product designers", "Coder", "Engineers", "AEC Academic lecturers", "Facility Managers", "Architects", "Tech Developers", "Quantity surveyors", "Solution Architects", "Quantity surveyors"]);
    const randomPosition = () => {
      return Math.floor(Math.random() * 250) + 'px'; // Adjust the range as needed
    }
    const randomColor = () => {
      return '#' + Math.floor(Math.random() * 16777215).toString(16); // Generates random hex color
    }

    const registerBtn = () => {
      console.log("jelo");
      let url = "https://www.eventbrite.com/e/contech-nigeria-2024-tickets-1013876631297?aff=oddtdtcreator";
      window.open(url, '_blank');
    }
    const becomeOurPatner = () => {
      router.push("/partner")
    }
    const joinOurCommunity = () => {
      let url = "https://docs.google.com/forms/d/e/1FAIpQLSfDfabGqgCnItd0Xx6ucW2SVd68GdigIW3ebKJMRDl__exqXw/viewform";
      window.open(url, '_blank');
    }
    const goToSponsor = (sectionId: any) => {
      console.log("jelo", sectionId);
      router.push({ name: 'partner', hash: `#${sectionId}` });
    }
    const whatToKnow = ref([
      {
        title: 'Is ConTech Nigeria 2024 a free or paid event?',
        subtitle: 'ConTech Nigeria 2024 is totally free.',
        isOpen: false,
      },
      {
        title: 'Is ConTech Nigeria an organisation?',
        subtitle: 'No, ConTech Nigeria is not an organisation. It is an ecosystem which is being pushed proudly by KS Digital Innovations and other progressive innovators in Nigeria to foster the development of exportable homegrown technological solutions in the AEC industry.',
        isOpen: false,
      },
      {
        title: 'Is ConTech Nigeria 2024 a one time event?',
        subtitle: 'ConTech Nigeria 2024 is a one time event but many more events will be organised by KS Digital Innovations to further enrich the ConTech ecosystem in Nigeria.',
        isOpen: false,
      },
      {
        title: 'What is the role of KS Digital Innovations in ConTech Nigeria?',
        subtitle: 'KS Digital Innovations is a ConTech startup that made a bold decision to spearhead the popularity and growth of ConTech in Nigeria.',
        isOpen: false,
      },
      // {
      //   title: 'Is ConTech Nigeria 2024 a free or paid event?',
      //   subtitle: 'ConTech Nigeria 2024 is totally free.',
      //   isOpen: false,
      // },
      // {
      //   title: 'Is ConTech Nigeria 2024 a free or paid event?',
      //   subtitle: 'ConTech Nigeria 2024 is totally free.',
      //   isOpen: false,
      // },
    ])
    const toggleIsOpen = (index: any) => {
      console.log("index", index)
      console.log("what", whatToKnow.value[index])
      whatToKnow.value[index].isOpen = !whatToKnow.value[index].isOpen
    }
    return {
      words,
      randomPosition,
      randomColor,
      registerBtn,
      goToSponsor,
      becomeOurPatner,
      joinOurCommunity,
      whatToKnow,
      toggleIsOpen,
    }
  },
})
</script>

<style scoped>
.transparent-image {
  opacity: 0.5;
  /* Adjust the value between 0 and 1, where 1 is fully opaque and 0 is fully transparent */
}

.will-change-transform {
  /* will-change: transform; */
}

.animate-marquee {
  animation: marquee 25s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(0%);
  }
}

@keyframes marquee2 {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(100%);
  }
}

.animate-marquee2 {
  animation: marquee2 32s linear infinite;
}

.overflow-x-hidden {
  overflow-x: hidden;
}

.nowrap {
  white-space: nowrap;
}

.scrol {
  background-image: url("/src/assets/icons/divider5.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 10vh;
  /* margin: auto; */
}

.seat {
  background-image: url("/src/assets/icons/seat.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 60vh;
  border-bottom-left-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem
    /* 12px */
  ;
  /* border-bottom-left-radius: 0.75rem12px; */
  /* margin: auto; */
}

.seatTwo {
  background-image: url("/src/assets/icons/seat2.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 60vh;
  border-bottom-left-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem
    /* 12px */
  ;
  /* border-bottom-left-radius: 0.75rem12px; */
  /* margin: auto; */
}

.seatThree {
  background-image: url("/src/assets/icons/seat3.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 60vh;
  border-bottom-left-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem
    /* 12px */
  ;
  /* border-bottom-left-radius: 0.75rem12px; */
  /* margin: auto; */
}

.word-container {
  width: 100%;
  height: 300px;
  border: 2px solid #ccc;
  padding: 10px;
  /* position: absolute; */
  overflow: hidden;
}

.word {
  position: absolute;
  font-size: 12px;
  color: #fff;
  /* Ensuring the text color contrasts with the background */
  padding-left: 15px;
  padding-right: 15px;
  /* Adding some padding for better visibility */
  border-radius: 50%;
  /* Rounded corners for the words */
}

.rectangle {
  position: relative;
  background-image: url('/src/assets/icons/Rectangle.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* overflow: hidden; */
}

.asset {
  background-image: url("/src/assets/icons/ContechAsset 7.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

.expectone {
  background-image: url("/src/assets/icons/expect1.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
