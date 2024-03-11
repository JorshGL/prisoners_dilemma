<template>
  <div class="max-w-xl mx-auto">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
      rel="stylesheet"
    />
    <div class="grid grid-rows-3 grid-cols-3 mt-4 text-3xl">
      <div
        id="title"
        class="pt-10 text-cyan-200 col-span-3 font-Lobster w-auto text-center text-6xl font-semibold"
      >
        {{ lang.thanksTo }}
      </div>

      <div
        class="col-span-3 w-auto py-6 text font-bold bg-gradient-to-r from-sky-400 to-slate-300 bg-clip-text text-transparent font-Lobster text-center"
      >
        Jorge Gallego
      </div>
      <div
        class="w-auto p-3 font-semibold font-Lobster text-center bg-gradient-to-r py-2 from-blue-500 to-sky-300 bg-clip-text text-transparent"
      >
        Sergio Herrera
      </div>
      <div
        class="w-auto p-3 font-semibold font-Lobster text-center bg-gradient-to-t py-2 from-blue-500 to-blue-400 bg-clip-text text-transparent"
      >
        Jean Paul Delgado
      </div>
      <div
        class="w-auto p-3 font-semibold font-Lobster text-center bg-gradient-to-l py-2 from-blue-500 to-sky-300 bg-clip-text text-transparent"
      >
        Juan David Trujillo
      </div>
    </div>
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
