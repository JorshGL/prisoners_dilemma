<template>
  <body class="bg-zinc-900">
    <div class="sahv">
      <NavBar />
    </div>
    <div class="">
      <Body />
    </div>
    <div class="mt-5 mb-10">
      <Universities />
    </div>
    <div class="relative mt-7">
      <div
        class="absolute bg-gradient-to-r from-pink-400 to-blue-400 inset-0 rounded-xl blur-md mx-10 sm:mx-16 lg:mx-10"
      ></div>
      <div class="relative bg-zinc-900 rounded-xl mx-10 sm:mx-16 lg:mx-10 pb-6">
        <Acknowledgements />
      </div>
    </div>

    <div>
      <Footer />
    </div>
  </body>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Body from "@/components/About/Body.vue";
import Footer from "@/components/Footer.vue";
import Acknowledgements from "@/components/About/Acknowledgements.vue";
import Universities from "@/components/About/Universities.vue";

export default {
  components: {
    NavBar,
    Body,
    Footer,
    Acknowledgements,
    Universities,
  },
};
</script>
