<template>
  <!-- Fonts: -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
    rel="stylesheet"
  />
  <div class="flex flex-col justify-center inset-0">
    <div
      id="title"
      class="pt-4 col-span-3 font-Lobster text-center text-2xl sm:text-3xl lg:text-6xl font-semibold"
    >
      {{ lang.thanksTo }}
    </div>
    <div
      class="flex flex-wrap flex-col lg:flex-col xl:flex-row sm:mx-1 sm:my-3 text-center text-xl sm:text-2xl lg:text-[19.5px] 2xl:text-3xl justify-around"
    >
      <div
        v-for="index in 7"
        :key="index"
        v-html="list[randomIndexes[index - 1]]"
      ></div>
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
    const lang = computed(() => store.getters.getLang.acknowledgements);
    const list = [
      `<a
        class="flex-auto text font-bold bg-gradient-to-r lg:py-3 from-slate-500 to-slate-300 bg-clip-text text-transparent duration-300 font-Lobster text-center hover:scale-105 hover:duration-300 hover:from-pink-500 hover:to-orange-400 hover:bg-gradient-to-l"
        href="https://github.com/JorshGL/"
        target="_blank"
        id="thanks"
      >
        Jorge Gallego
      </a>`,
      ` <a
        class="flex-auto text font-bold bg-gradient-to-r lg:py-3 from-slate-200 to-slate-400 bg-clip-text text-transparent duration-300 font-Lobster text-center hover:scale-105 hover:duration-300 hover:from-pink-500 hover:to-orange-400 hover:bg-gradient-to-l"
      >
        Marcela Herrera
      </a>`,
      `<a
        class="flex-auto text font-bold bg-gradient-to-r lg:py-3 from-slate-200 to-slate-300 bg-clip-text text-transparent duration-300 font-Lobster text-center hover:scale-105 hover:duration-300 hover:from-pink-500 hover:to-orange-400 hover:bg-gradient-to-l"
        href="https://github.com/aliss-55"
        target="_blank"
        id="thanks"
      >
        Allison Tobar
      </a>`,
      ` <a
        class="flex-auto text font-bold bg-gradient-to-r lg:py-3 from-slate-200 to-slate-300 bg-clip-text text-transparent duration-300 font-Lobster text-center hover:scale-105 hover:duration-300 hover:from-pink-500 hover:to-orange-400 hover:bg-gradient-to-l"
        href="https://github.com/SAHV-24"
        target="_blank"
        id="thanks"
      >
        Sergio Herrera
      </a>`,
      `<a
        class="flex-auto text font-bold bg-gradient-to-r lg:py-3 from-slate-200 to-slate-300 bg-clip-text text-transparent duration-300 font-Lobster text-center hover:scale-105 hover:duration-300 hover:from-pink-500 hover:to-orange-400 hover:bg-gradient-to-l"
        href="https://github.com/paulomeister"
        target="_blank"
        id="thanks"
      >
        Jean Paul Delgado
      </a>`,
      `<a
        class="flex-auto text font-bold bg-gradient-to-r lg:py-3 sm:mx-0 from-slate-200 to-slate-500 bg-clip-text text-transparent duration-300 font-Lobster text-center hover:scale-105 hover:duration-300 hover:from-pink-500 hover:to-orange-400 hover:bg-gradient-to-l"
        href="https://github.com/juandavid764"
        target="_blank"
        id="thanks"
      >
        Juan David Trujillo
      </a>`,
      `<a
        class="flex-auto text font-bold bg-gradient-to-r lg:py-3 sm:mx-0 from-slate-200 to-slate-500 bg-clip-text text-transparent duration-300 font-Lobster text-center hover:scale-105 hover:duration-300 hover:from-pink-500 hover:to-orange-400 hover:bg-gradient-to-l"
        href="https://ciencias.univalle.edu.co/departamento-de-fisica/personal/docentes/omar-calderon-losada"
        target="_blank"
        id="thanks"
      >
        Omar Calderón
      </a>`,
    ];

    const randomIndexes = computed(() => {
      const indexes = [];
      while (indexes.length < 7) {
        const randomIndex = Math.floor(Math.random() * list.length);
        if (!indexes.includes(randomIndex)) {
          indexes.push(randomIndex);
        }
      }
      return indexes;
    });

    return {
      lang,
      list,
      randomIndexes,
    };
  },
};
</script>

<style>
/* Tus estilos CSS aquí */
#title {
  color: #eeeeee;
  text-shadow: 2px 2px 2px #e15fed, -2px -2px 2px #246260;
}

.currentRoute {
  text-shadow: 1.5px 1.5px 1.5px #e15fed;
}

#thanks:hover {
  font-size: 110%; /* Aumento del tamaño de la fuente */
  padding: 5px; /* Aumento de la altura del contenedor */
  transition: font-size 300ms ease-in-out, padding 300ms ease-in-out; /* Transición suave durante 300ms */
}
</style>
