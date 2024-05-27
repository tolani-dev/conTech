<template>
  <header v-if="route.meta" class="w-full bg-primary fixed mb-20 top-0 z-30 left-0 right-0 lg:shadow-xl rounded-b">

    <div
      class="hidden justify-between p-5 items-center lg:container md:max-w-[100%] lg:max-w-[85%] mx-auto md:flex h-[12vh]">
      <div class="w-[80px] md:w-[120px] lg:w-[200px]">
        <a href="/"><img src="/src/assets/icons/logo.svg" alt="logo logo" class="object-fill"></a>
      </div>
      <div>
        <div class="flex items-center sm:gap-5 lg:gap-10">
          <a href="/">
            <div
              class="capitalize font-semibold text-white text-sm md:text-base cursor-pointer border-b border-transparent hover:border-b-4 hover:border-secondary">
              Agenda
            </div>
          </a>

          <div
            class="capitalize font-semibold text-white text-sm md:text-base cursor-pointer border-b border-transparent hover:border-b-4 hover:border-secondary">
            <a href="/#speakers"> speakers</a>
          </div>
          <div
            class="capitalize font-semibold text-white text-sm md:text-base cursor-pointer border-b border-transparent hover:border-b-4 hover:border-secondary">
            <a href="/patners"> Patners</a>
          </div>
          <div
            class="bg-secondary text-primary font-semibold text-sm px-5 py-2 rounded-lg capitalize cursor-pointer hover:bg-indigo">
            <a href="#qr">Register</a>
          </div>
        </div>
      </div>
    </div>

    <!--  -->

    <!-- Mobile view -->
    <!-- <div v-if="drawerModal == true" id="navDrawer"
      class="w-[50%] h-screen md:hidden flex flex-col bg-black absolute top-0 rounded-b pt-5 pb-10 shadow" :class="drawerModal
    ? 'animate__animated animate__slideInLeft'
    : 'animate__animated animate__slideOutLeft'
    ">
      <div class="mb-3">
        <button @click="closeNav" id="closeNav"
          class="ml-5 bg-primary text-white py-2 px-4 hover:bg-indigo rounded-full cursor-pointer">
          x
        </button>
      </div>

      <div class="flex justify-between p-4 h-full">
        <div class="space-y-7">
          <div class="capitalize font-semibold text-white text-sm cursor-pointer border-b border-transparent">
            <a href="/#agenda" @click="closeNav()"> agenda</a>
          </div>

          <div class="capitalize font-semibold text-white text-sm cursor-pointer border-b border-transparent">
            <a href="/#patners" @click="closeNav()">about us</a>
          </div>

          <div class="capitalize font-semibold text-white text-sm cursor-pointer border-b border-transparent">
            <a @click="closeNav()" href="/#speakers">speakers</a>
          </div>
          <div @click="closeNav()"
            class="capitalize font-semibold text-white text-sm cursor-pointer border-b border-transparent">
            <a href="#callback">contact us </a>
          </div>
          <div @click="closeNav()"
        class="capitalize font-semibold text-white text-sm cursor-pointer border-b border-transparent">
        <a href="" target="_blank" rel="noreferrer noopener">press
        </a>
      </div>
          <button @click="closeNav()"
            class="bg-primary mt-5 flex justify-center items-center mx-auto text-white font-semibold text-sm px-5 py-2 rounded-full capitalize cursor-pointer hover:bg-indigo">
            <a href="#qr">Book an appointment</a>
          </button>
        </div>
      </div>
    </div> -->
    <!--  -->
    <div v-if="drawerModal" id="navDrawer"
      class="w-full md:hidden flex flex-col bg-secondary absolute top-0 rounded-b pt-5 pb-10 shadow" :class="drawerModal
    ? 'animate__animated animate__slideInDown'
    : 'animate__animated animate__slideInUp'
    " style="display: flex;">
      <div>
        <button @click="closeNav" id="closeNav"
          class="ml-[50px] bg-primary text-white py-2 px-4 hover:bg-indigo rounded-full cursor-pointer">
          x
        </button>
      </div>

      <div class="flex justify-center items-center h-full">
        <div class="space-y-7">
          <div class="capitalize font-semibold text-white text-sm cursor-pointer border-b border-transparent">
            <a href="/#agenda" @click="closeNav()"> Agenda</a>
          </div>

          <div class="capitalize font-semibold text-white text-sm cursor-pointer border-b border-transparent">
            <a href="/#speakers" @click="closeNav()">Speakers</a>
          </div>

          <div class="capitalize font-semibold text-white text-sm cursor-pointer border-b border-transparent">
            <a @click="closeNav()" href="/#patners">Patners</a>
          </div>
          <button @click="closeNav()"
            class="bg-primary mt-5 flex justify-center items-center mx-auto text-white font-semibold text-sm px-5 py-2 rounded-full capitalize cursor-pointer hover:bg-indigo">
            <a href="#qr"> Register</a>
          </button>
        </div>
      </div>
    </div>

    <div @click="openNav" id="openNav" class="pt-5 pl-[50px] md:hidden cursor-pointer">
      <img src="/src/assets/icons/menu.svg" alt="">
    </div>
  </header>
  <router-view />
  <footer>
    <section class="bg-primary h-fit lg:relative">
      <img src="/src/assets/icons/Capa_2.svg" alt="capa" class="absolute -top-6 right-[2%] w-12" />
      <div class="lg:w-[50vw] m-auto">
      <div class="lg:absolute flex justify-between lg:top-[-6vw] w-full lg:w-[50%] rounded-lg items-center p-10 patnerbg">
        <div class="">
          <h3 class="font-bold text-3xl">Support or Partner with ConTech Nigeria 2024</h3>
          <div class="grid sm:grid-cols-2 mt-[40px] md:mt-[80px] lg:my-10 gap-10 lg:w-[25vw]">
            <button
              class="rounded-lg bg-primary text-secondary-shades px-2 py-2 ml-9 sm:ml-0 mb-4 sm:mb-0 text-xs"><span>Partner
                with Us</span></button>
            <button class="rounded-lg border-[1px] border-primary px-8 py-2 text-primary ml-3 sm:ml-0 text-xs"><span>For
                Sponsorship</span></button>
          </div>
        </div>
        <div>
          <img src="/src/assets/icons/handshake.svg" alt="handshake" class="" />
        </div>
      </div>
    </div>
    </section>
    <section class="bg-primary md:h-screen">
    <div class="m-auto lg:w-[80%] px-3 lg:px-0 pt-[75px] sm:pt-[130px] lg:pt-[300px]">
      <div class="grid grid-cols-2 sm:grid-cols-4 lg:gap-20 md:justify-items-center">
        <div class="mb-10 sm:mb-0">
          <img src="/src/assets/icons/logobottom.svg" alt="expect" class="sm:w-full w-[50%]" />
        </div>
        <div class="mb-10 sm:mb-0">
          <h3 class="text-secondary-shades font-bold lg:mb-4">Menu</h3>
          <p class="text-secondary-shades text-xs md:text-lg">Home</p>
          <p class="text-secondary-shades text-xs md:text-lg">Contact</p>
        </div>
        <div class="">
          <h3 class="text-secondary-shades font-bold lg:mb-4">Quick Links</h3>
          <p class="text-secondary-shades text-xs md:text-lg">Partnership</p>
          <p class="text-secondary-shades text-xs md:text-lg">Become a Partner</p>
          <p class="text-secondary-shades text-xs md:text-lg">Volunteer with Us</p>
          <p class="text-secondary-shades text-xs md:text-lg">Join the Community</p>
        </div>
        <div class="">
          <h3 class="text-secondary-shades font-bold lg:mb-4">Contact Us</h3>
          <p class="grid grid-cols-2 w-[30%] items-center"><img src="/src/assets/icons/mail.svg" alt="mail" /><span
              class="text-secondary-shades text-[8px] sm:text-[12px] ">contech@ksdigitalinnovations.com
              kehinde@ksdigitalinnovations.com</span></p>
          <div class="flex flex-row gap-4 mt-3 items-center w-full">
            <img src="/src/assets/icons/phone.svg" alt="mail" class="w-5 h-5" />
            <div class="text-secondary-shades text-[8px] sm:text-[12px] leading-3 text-balance"><p>+234 706 666 4512</p> <p>+234 706 666 4512</p> <p>+234 706 666 4512</p></div>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="grid grid-cols-2 items-center lg:grid-cols-3 mt-10 sm:mt-[150px] pb-10 sm:pb-0">
        <div class="grid grid-cols-4 w-[30vw] sm:w-[20vw] md:w-[10vw]">
          <img src="/src/assets/icons/facebook.svg" alt="facebook" />
          <img src="/src/assets/icons/linkedIn.svg" alt="linkedIn" />
          <img src="/src/assets/icons/instagram.svg" alt="instagram" />
          <img src="/src/assets/icons/twitter.svg" alt="twitter" />
        </div>
        <p class="text-secondary-shades text-[8px] sm:text-[12px]">Copyright © 2023 ConTech. All rights reserved.</p>
      </div>
    </div>
  </section>
  </footer>

</template>

<script lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
  name: "appNavBar",
  components: {},
  setup(props, ctx) {
    const route = useRoute();
    const active = computed(() => route.path);
    const drawerModal = ref(false);

    const openNav = () => {
      console.log("hello");
      drawerModal.value = true;
    }
    const closeNav = () => {
      drawerModal.value = false
    }
    return {
      active,
      drawerModal,
      closeNav,
      openNav,
      route,
    }
  },
})
</script>

<style scoped>
.patnerbg {
  background-image: url("/src/assets/icons/backgrounddown.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

}
</style>
