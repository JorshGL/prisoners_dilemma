<template>
  <!-- Contenedor Raiz -->
  <body class="bg-zinc-900 text-white md:h-min 2xl:h-screen">
    <NavBar />
    <div class="grid grid-cols-1 w-full p-5 md:p-2 md:grid-cols-3">
      <div
        class="row-start-2 h-min md:col-span-1 md:row-span-3 md:col-start-1 md:row-start-1"
      >
        <Controls />
      </div>
      <div
        class="mb-8 md:mb-0 row-start-1 col-span-2 h-min md:col-start-2 md:row-start-1 md:row-span-2 md:col-span-2"
      >
        <Characters />
      </div>
      <div
        class="row-start-3 col-span-2 h-min pt-6 md:pt-0 md:flex md:flex-1 md:justify-center md:col-start-2"
      >
        <Results />
      </div>
    </div>
    <div class="flex flex-col mt-3">
      <Footer />
    </div>
  </body>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Controls from "@/components/Home/Controls.vue";
import Characters from "@/components/Home/Characters.vue";
import Results from "@/components/Home/Results.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    NavBar,
    Controls,
    Characters,
    Results,
    Footer,
  },
};
</script>
