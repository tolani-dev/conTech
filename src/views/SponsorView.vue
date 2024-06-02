<template>
  <section class="bg-primary w-full lg:h-screen pt-[150px] md:pt-[200px] lg:pb-[40px] pb-10">
    <div class="m-auto w-[90%] lg:w-[60%] text-white">
      <img src="/src/assets/icons/Capa_3.svg" alt="capa"
        class="animate__animated  animate__pulse animate__infinite hidden lg:block lg:absolute top-[6.5%] right-[-5.5%]" />
      <h4
        class="text-[40px] sm:text-[50px] md:text-[60px] font-bold m-auto leading-10 md:leading-[77px] sm:text-center">
        Sponsors
      </h4>
      <p class="sm:text-center">Elevate Your Brand, Expand Your Audience</p>
      <img src="/src/assets/icons/Capa_4.svg" alt="capa"
        class="animate__animated  animate__pulse animate__infinite hidden lg:block lg:absolute bottom-[30%] left-[-3%]" />
    </div>
    <!-- button -->
    <div class="sm:flex justify-center mt-[40px] md:mt-[80px] lg:my-10 gap-10">
      <img src="/src/assets/icons/sponsors.svg" alt="" />
    </div>
    <!-- <div class="h-[30vh]">
      <img src="/src/assets/icons/divider3.svg" alt="divider" class="z-10 object-contain" />
    <img src="/src/assets/icons/divider4.svg" alt="divider" class="h-fit w-2" />
    </div> -->
    <div class="pt-20 hidden md:block">
      <div
        class="w-[100vw] h-[7vh] flex-shrink-0 absolute bottom-[0vh] z-10 transform rotate-[4deg]  bg-primary-shades  flex items-center overflow-hidden">
        <div v-for="x in [1,2,3,4,5,6,7,8,9]" :key="x" class="px-7 whitespace-nowrap will-change-transform justify-between gap-4  flex-row animate-marquee flex items-center">
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
  </section>
  <!-- <section class="bg-primary relative">
    <img src="/src/assets/icons/Capa_1.svg" alt="capa" class="animate__animated  animate__pulse animate__infinite hidden lg:block lg:absolute top-[30%] right-[-3%]" />
    <div class=" m-auto lg:w-[80%] p-12">
      <div class="mb-7">
        <h3 class="font-bold text-2xl md:text-4xl lg:text-5xl leading-10 text-secondary-shades mb-2 sm:text-center">Our
          Value Proposition</h3>
        <p class="sm:text-center text-secondary-shades">Sponsors for this inaugural event will have the opportunity to
          catalyze a ConTech coalition.</p>
      </div>
      <div class="grid grids-col-1 md:grid-cols-3 gap-5 lg:gap-20">
        <div class="w-full">
          <div class="bg-[#FFBE6D] p-4 rounded-t-lg">
            <h3 class="font-bold">Platinum Tier</h3>
            <p class="font-bold">(N5,000,000 and above)</p>
          </div>
          <div class="bg-[#FFF2E1] p-6 rounded-b-lg">
            <ul class="list-disc">
              <li>Now this is a story all about how, my life got flipped-turned upside down</li>

            </ul>
            <ul class="list-disc">
              <li>Prominent inclusion of the company's logo in all online publications.
              </li>
            </ul>
            <ul class="list-disc">
              <li>Inclusion of the company logo in all marketing collaterals
                (Posters, Fliers, Standees)</li>
            </ul>
            <ul class="list-disc">
              <li>Inclusion of the company's logo
                in all pre-event publicity activities Inclusion of the company's logo on event website</li>
            </ul>
            <ul class="list-disc">
              <li>Live-on-stage
                acknowledgements throughout
                the event.</li>
            </ul>
            <ul class="list-disc">
              <li>Access to VIP section
                Naming Rights for a specific section of the event</li>
            </ul>
            <ul class="list-disc">
              <li>Opportunity to be part of brainstorming and panel sessions.</li>
            </ul>
            <ul class="list-disc">
              <li>Access to participant information for further communications
                3 team slots for post-event bootcamps.</li>
            </ul>
            <div class="mt-4">
              <button class="border-[1px] border-black px-8 py-3 text-black ml-3 sm:ml-0"><span>Sponsor
                  ConTech</span></button>
            </div>
          </div>
        </div>
        <div class="w-full">
          <div class="bg-[#6EC1F8] p-4 rounded-t-lg">
            <h3 class="font-bold">Diamond Tier</h3>
            <p class="font-bold">(N13,000,000 and above)</p>
          </div>
          <div class="bg-[#CDEBFF] p-6 rounded-b-lg">
            <ul class="list-disc">
              <li>Now this is a story all about how, my life got flipped-turned upside down</li>
            </ul>
            <ul class="list-disc">
              <li>Prominent inclusion of the company's logo in all online publications.
              </li>
            </ul>
            <ul class="list-disc">
              <li>Inclusion of the company logo in all marketing collaterals
                (Posters, Fliers, Standees)</li>
            </ul>
            <ul class="list-disc">
              <li>Inclusion of the company's logo
                in all pre-event publicity activities Inclusion of the company's logo on event website</li>
            </ul>
            <ul class="list-disc">
              <li>Live-on-stage
                acknowledgements throughout
                the event.</li>
            </ul>
            <ul class="list-disc">
              <li>Access to VIP section
                Naming Rights for a specific section of the event</li>
            </ul>
            <ul class="list-disc">
              <li>Opportunity to be part of brainstorming and panel sessions.</li>
            </ul>
            <ul class="list-disc">
              <li>Access to participant information for further communications
                3 team slots for post-event bootcamps.</li>
            </ul>
            <div class="mt-4">
              <button class="border-[1px] border-black px-8 py-3 text-black ml-3 sm:ml-0"><span>Sponsor
                  ConTech</span></button>
            </div>
          </div>
        </div>
        <div class="w-full">
          <div class="bg-[#FDB3B3] p-4 rounded-t-lg">
            <h3 class="font-bold">Gold Tier</h3>
            <p class="font-bold">(N5,000,000 and above)</p>
          </div>
          <div class="bg-[#FFDCDC] p-6 rounded-b-lg">
            <ul class="list-disc">
              <li>Now this is a story all about how, my life got flipped-turned upside down</li>
            </ul>
            <ul class="list-disc">
              <li>Prominent inclusion of the company's logo in all online publications.
              </li>
            </ul>
            <ul class="list-disc">
              <li>Inclusion of the company logo in all marketing collaterals
                (Posters, Fliers, Standees)</li>
            </ul>
            <ul class="list-disc">
              <li>Inclusion of the company's logo
                in all pre-event publicity activities Inclusion of the company's logo on event website</li>
            </ul>
            <ul class="list-disc">
              <li>Live-on-stage
                acknowledgements throughout
                the event.</li>
            </ul>
            <ul class="list-disc">
              <li>Access to VIP section
                Naming Rights for a specific section of the event</li>
            </ul>
            <ul class="list-disc">
              <li>Opportunity to be part of brainstorming and panel sessions.</li>
            </ul>
            <ul class="list-disc">
              <li>Access to participant information for further communications
                3 team slots for post-event bootcamps.</li>
            </ul>
            <div class="mt-4">
              <button class="border-[1px] border-black px-8 py-3 text-black ml-3 sm:ml-0"><span>Sponsor
                  ConTech</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> -->
  <section class="h-sceen relative bg-primary">
    <img src="/src/assets/icons/Capa_1.svg" alt="capa"
      class="animate__animated  animate__pulse animate__infinite hidden lg:block lg:absolute top-[30%] right-[-3%]" />
    <img src="/src/assets/icons/Group.svg" alt="capa"
      class="animate__animated  animate__pulse animate__infinite hidden lg:block lg:absolute bottom-[30%] left-[2%] w-12" />
    <div class="m-auto p-5  md:p-10 lg:p-20 mb-20">
      <div class="mb-12">
        <h3 class="font-bold text-2xl md:text-4xl lg:text-5xl leading-10 text-secondary-shades mb-2 sm:text-center">
          Benefits of
          Partnering with ConTech</h3>
        <p class="sm:text-center text-secondary-shades">Sponsors for this inaugural event will have the opportunity to
          catalyze a
          ConTech coalition. </p>
      </div>
      <div class="lg:w-[60vw] m-auto">
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-[0.5px] border-secondary-shades rounded-[20px]">
          <div
            class="w-full flex justify-center flex-col items-center border-[0.5px] border-secondary-shades p-9 rounded-tl-[20px] sm:rounded-tl-[20px] rounded-tr-[20px] md:rounded-tr-none">
            <img src="/src/assets/icons/visibility.svg" alt="" class="h-17 w-17" />
            <h3 class="font-bold text-secondary-shades">Visibility</h3>
            <p class="text-secondary-shades">Logo placement on marketing materials, website, and event signage.</p>
          </div>
          <div
            class="w-full flex justify-center flex-col items-center border-[0.5px] border-secondary-shades p-9 md:rounded-tr-[20px] lg:rounded-tr-none">
            <img src="/src/assets/icons/brand.svg" alt="" class="h-17 w-17" />
            <h3 class="font-bold text-secondary-shades">Brand Exposure</h3>
            <p class="text-secondary-shades">Opportunity for product demos, branded giveaways, and promotional
              materials.</p>
          </div>
          <div
            class="w-full flex justify-center flex-col items-center border-[0.5px] border-secondary-shades p-9  lg:rounded-tr-[20px]">
            <img src="/src/assets/icons/network.svg" alt="" class="h-17 w-17" />
            <h3 class="font-bold text-secondary-shades">Networking</h3>
            <p class="text-secondary-shades">Access to networking events and attendee list.</p>
          </div>
          <div
            class="w-full flex justify-center flex-col items-center border-[0.5px] border-secondary-shades p-9  lg:rounded-bl-[20px]">
            <img src="/src/assets/icons/member.svg" alt="" class="h-17 w-17" />
            <h3 class="font-bold text-secondary-shades">Thought Leadership</h3>
            <p class="text-secondary-shades">Speaking opportunities and participation in brainstorming and panel
              sessions.</p>
          </div>
          <div
            class="w-full flex justify-center flex-col items-center border-[0.5px] border-secondary-shades p-9 md:rounded-bl-[20px] lg:rounded-bl-none">
            <img src="/src/assets/icons/bootcamp.svg" alt="" class="h-17 w-17" />
            <h3 class="font-bold text-secondary-shades">Bootcamp Participation</h3>
            <p class="text-secondary-shades">Participation in Post event bootcamps with free slots for sponsors and
              partners.</p>
          </div>
          <div
            class="w-full flex justify-center flex-col items-center border-[0.5px] border-secondary-shades p-9 rounded-bl-[20px] md:rounded-bl-none rounded-br-[20px] sm:rounded-br-[20px]">
            <img src="/src/assets/icons/media.svg" alt="" class="h-17 w-17" />
            <h3 class="font-bold text-secondary-shades">Media Coverage</h3>
            <p class="text-secondary-shades">Inclusion in press releases, social media mentions, and post-event
              coverage.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="lg:h-screen" id="sponsors">
    <div class="lg:w-[90%] m-auto p-5 md:p-6 lg:p-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div class="w-[]">
          <h3 class="">
            <p class="font-bold text-2xl md:text-4xl lg:text-5xl leading-10 text-primary-tint mb-2 md:text-start">Become
              a</p>
            <p class="font-bold text-2xl md:text-4xl lg:text-5xl leading-10 text-primary-tint mb-2"><span
                class="font-bold text-2xl md:text-4xl lg:text-5xl leading-10 text-primary-tint mb-2">CONTECH
              </span>Sponsor</p>
          </h3>
          <p class="text-primary">By teaming up with CONTECH, you've opened doors to a world of networking opportunities
            and strategic collaborations.</p>
          <img src="/src/assets/icons/sponsor.svg" alt="sponsor" class="w-[500px] -left-10 " />
        </div>
        <div class="form-container">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfJNU8pbfw9Tu5pPZici3lcKW8CtIIrBEcw2pl5va4Lx6PZJg/viewform"
            frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
      </div>
    </div>

  </section>
  <section class="bg-primary relative">
    <img src="/src/assets/icons/Capa_7.svg" alt="capa"
      class="animate__animated  animate__pulse animate__infinite hidden lg:block lg:absolute top-[25vh] right-0" />
    <img src="/src/assets/icons/Hexagon_3.svg" alt="capa"
      class="animate__animated  animate__pulse animate__infinite hidden lg:block lg:absolute top-0 left-0" />
    <div
      class="flex justify-center flex-col items-center m-auto w-[90vw] md:w-[70%] lg:w-[50%] py-[120px] sm:py-[100px]">
      <div>
        <h3 class="font-bold text-2xl md:text-4xl lg:text-5xl leading-10 text-secondary-shades mb-2">Everything you need
          to know about ConTech Nigeria 2024</h3>
        <p class="text-secondary-shades sm:text-2xl">The following are the expected in the event coming up</p>
      </div>
      <img src="/src/assets/icons/rainbow.svg" alt="" class="my-7" />
      <div class="">
        <div class="flex justify-between items-center gap-5 sm:gap-[13vw] md:gap-[25vw] border-b-[0.1px] border-secondary-shades">
          <div class="my-4">
            <h3 class="text-secondary-shades font-[600] md:font-bold">Is ConTech Nigeria 2024 a free or paid event?</h3>
            <p class="text-secondary-shades text-[12px] sm:text-[15px]">ConTech Nigeria 2024 is totally free.</p>
          </div>
          <div>
            <img src="/src/assets/icons/hide.svg" alt="hide" class="w-5 h-5" />
          </div>
        </div>
        <div class="flex justify-between items-center gap-5 sm:gap-[13vw] md:gap-[25vw] border-b-[0.1px] border-secondary-shades">
          <div class="my-4">
            <h3 class="text-secondary-shades font-bold">Is ConTech Nigeria 2024 a free or paid event?</h3>
            <p class="text-secondary-shades">ConTech Nigeria 2024 is totally free.</p>
          </div>
          <div>
            <img src="/src/assets/icons/hide.svg" alt="hide" class="w-5 h-5" />
          </div>
        </div>
        <div class="flex justify-between items-center gap-5 sm:gap-[13vw] md:gap-[25vw] border-b-[0.1px] border-secondary-shades">
          <div class="my-4">
            <h3 class="text-secondary-shades font-bold">Is ConTech Nigeria 2024 a free or paid event?</h3>
            <p class="text-secondary-shades">ConTech Nigeria 2024 is totally free.</p>
          </div>
          <div>
            <img src="/src/assets/icons/hide.svg" alt="hide" class="w-5 h-5" />
          </div>
        </div>
        <div class="flex justify-between items-center gap-5 sm:gap-[13vw] md:gap-[25vw] border-b-[0.1px] border-secondary-shades">
          <div class="my-4">
            <h3 class="text-secondary-shades font-bold">Is ConTech Nigeria 2024 a free or paid event?</h3>
            <p class="text-secondary-shades">ConTech Nigeria 2024 is totally free.</p>
          </div>
          <div>
            <img src="/src/assets/icons/hide.svg" alt="hide" class="w-5 h-5" />
          </div>
        </div>
        <div class="flex justify-between items-center gap-5 sm:gap-[13vw] md:gap-[25vw] border-b-[0.1px] border-secondary-shades">
          <div class="my-4">
            <h3 class="text-secondary-shades font-bold">Is ConTech Nigeria 2024 a free or paid event?</h3>
            <p class="text-secondary-shades">ConTech Nigeria 2024 is totally free.</p>
          </div>
          <div>
            <img src="/src/assets/icons/hide.svg" alt="hide" class="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="py-5 h-full lg:h-screen relative">
      <img src="/src/assets/icons/Capa_8.svg" alt="capa" class="animate__animated  animate__pulse animate__infinite hidden lg:block lg:absolute bottom-[12vh] left-0" />
      <img src="/src/assets/icons/Capa_9.svg" alt="capa" class="animate__animated  animate__pulse animate__infinite hidden lg:block lg:absolute bottom-[11vh] right-[6.5vw] z-10" />
      <div class="grid lg:grid-cols-3 gap-20 w-[90vw] lg:w-[80vw] h-full m-auto items-center">
        <div class="relative seat">
          <div class="absolute bottom-0 bg-primary-tint rounded-b-xl p-18 w-full p-4" >
          <h3 class="text-secondary-shades font-bold text-[18px] leading-6">Book your seat at ConTech</h3>
          <p class="text-secondary-shades mb-3 font-thin">Save a seat for yourself</p>
          <button @click="registerBtn" class="rounded-lg border-[1px] border-secondary px-8 py-2 text-secondary ml-3 sm:ml-0"><span>Register Now</span></button>
        </div>
        </div>
        <div class="relative seatTwo">
          <div class="absolute bottom-0 bg-primary-tint rounded-b-xl p-18 w-full p-4" >
          <h3 class="text-secondary-shades font-bold text-[18px] leading-6">Exhibit at ConTech</h3>
          <p class="text-secondary-shades mb-3 font-thin">Exhibit your product or business to thousands of people</p>
          <button @click="goToSponsor('sponsors')" class="rounded-lg border-[1px] border-secondary px-8 py-2 text-secondary ml-3 sm:ml-0"><span>For Sponsorship</span></button>
        </div>
        </div>
        <div class="relative seatThree">
          <div class="absolute bottom-0 bg-primary-tint rounded-b-xl p-18 w-full p-4" >
          <h3 class="text-secondary-shades font-bold text-[18px] leading-6">Become a Community Member</h3>
          <p class="text-secondary-shades mb-3 font-thin">Join our community</p>
          <button @click="joinOurCommunity" class="rounded-lg border-[1px] border-secondary px-8 py-2 text-secondary ml-3 sm:ml-0"><span>Register Now</span></button>
        </div>
        </div>
      </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "SponsorView",
  setup(props, ctx) {
    const router = useRouter();
    const registerBtn = () => {
      console.log("jelo");
      let url = "https://www.eventbrite.com/e/contech-nigeria-2024-tickets-906636854237?aff=oddtdtcreator";
      window.open(url, '_blank');
    }
    const goToSponsor = (sectionId: any) => {
      console.log("jelo", sectionId);
      router.push({ name: 'patners', hash: `#${sectionId}` });
    }
    const becomeOurPatner = () => {
      router.push("/patners")
    }
    const joinOurCommunity = () => {
      let url = "https://docs.google.com/forms/d/e/1FAIpQLSfDfabGqgCnItd0Xx6ucW2SVd68GdigIW3ebKJMRDl__exqXw/viewform";
            window.open(url, '_blank');
    }
    return {
      registerBtn,
      becomeOurPatner,
      joinOurCommunity,
      goToSponsor,
    }
  },
})
</script>
<style scoped>
.form-container {
  max-width: 100%;
  /* margin: 0 auto; */
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

iframe {
  width: 100%;
  height: 600px;
  /* Adjust height as needed */
  border: none;
}

.seat {
  background-image: url("/src/assets/icons/seat.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 50vh;
  border-bottom-left-radius: 0%;
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
  border-bottom-right-radius: 0.75rem/* 12px */;
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
  border-bottom-right-radius: 0.75rem/* 12px */;
  /* border-bottom-left-radius: 0.75rem12px; */
  /* margin: auto; */
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

</style>
