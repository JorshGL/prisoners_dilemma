<template>
  <div class="bg-zinc-900 xl:min-h-screen 2xl:min-h-screen relative lg:pb-32">
    <div class="text-white">
      <NavBar />
    </div>
    <div class="mt-5"><Body /></div>
    <div><Acknowledgements /></div>
    <div class="mt-30 absolute bottom-0 justify-center w-full">
      <Footer />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Body from "@/components/About/Body.vue";
import Footer from "@/components/About/Footer.vue";
import Acknowledgements from "@/components/About/Acknowledgements.vue";
export default {
  components: {
    NavBar,
    Body,
    Footer,
    Acknowledgements,
  },
};
</script>
, Acknoledgements
