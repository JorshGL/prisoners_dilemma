<template>
  <!-- Fonts: -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
    rel="stylesheet"
  />

  <div
    id="title"
    class="py-5 col-span-3 font-Lobster text-center text-4xl sm:text-6xl font-semibold"
  >
    {{ lang.thanksTo }}
  </div>
  <div
    class="flex-wrap sm:mx-2 sm:my-3 text-center flex text 1xl sm:text-2xl justify-around"
  >
    <a
      class="flex-auto text font-bold bg-gradient-to-r from-slate-500 to-slate-300 bg-clip-text text-transparent duration-300 font-Lobster text-center hover:scale-110 hover:duration-300 hover:from-pink-500 hover:to-orange-400 hover:bg-gradient-to-l"
      href="https://github.com/JorshGL/"
      target="_blank"
    >
      Jorge Gallego
    </a>
    <a
      class="flex-auto text font-bold bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent duration-300 font-Lobster text-center hover:scale-110 hover:duration-300 hover:from-pink-500 hover:to-orange-400 hover:bg-gradient-to-l"
    >
      Marcela Herrera
    </a>
    <a
      class="flex-auto text font-bold bg-gradient-to-r from-slate-200 to-slate-300 bg-clip-text text-transparent duration-300 font-Lobster text-center hover:scale-110 hover:duration-300 hover:from-pink-500 hover:to-orange-400 hover:bg-gradient-to-l"
      href="https://github.com/aliss-55"
      target="_blank"
    >
      Allison Tobar
    </a>
    <a
      class="flex-auto text font-bold bg-gradient-to-r from-slate-200 to-slate-300 bg-clip-text text-transparent duration-300 font-Lobster text-center hover:scale-110 hover:duration-300 hover:from-pink-500 hover:to-orange-400 hover:bg-gradient-to-l"
      href="https://github.com/SAHV-24"
      target="_blank"
    >
      Sergio Herrera
    </a>
    <a
      class="flex-auto text font-bold bg-gradient-to-r from-slate-200 to-slate-300 bg-clip-text text-transparent duration-300 font-Lobster text-center hover:scale-110 hover:duration-300 hover:from-pink-500 hover:to-orange-400 hover:bg-gradient-to-l"
      href="https://github.com/paulomeister"
      target="_blank"
    >
      Jean Paul Delgado
    </a>
    <a
      class="flex-auto text font-bold bg-gradient-to-r sm:mx-0 from-slate-200 to-slate-500 bg-clip-text text-transparent duration-300 font-Lobster text-center hover:scale-110 hover:duration-300 hover:from-pink-500 hover:to-orange-400 hover:bg-gradient-to-l"
      href="https://github.com/juandavid764"
      target="_blank"
    >
      Juan David Trujillo
    </a>
  </div>
</template>

<script>
import store from "@/store";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const data = computed(() => {
      return {
        img: {
          source: require(`@/assets/Quantum box.png`),
        },
      };
    });
    const lang = computed(() => store.getters.getLang.acknowledgements);
    return {
      data,
      lang,
    };
  },
};
</script>

<style scoped>
#title {
  color: #eeeeee;
  text-shadow: 2px 2px 2px #e15fed, -2px -2px 2px #246260;
}

.currentRoute {
  text-shadow: 1.5px 1.5px 1.5px #e15fed;
}
</style>
