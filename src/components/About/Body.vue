<template>
  <div class="grid grid-cols-1">
    <div class="grid grid-rows-1 place-content-center">
      <div class="flex h-32 sm:h-52">
        <div class="pt-4 w-24 mx-1 sm:w-44 sm:h-44 sm:mx-10">
          <img :src="data.img.UAO" alt="" />
        </div>
        <div class="w-32 mx-1 sm:w-52 sm:mx-10">
          <img :src="data.img.Quantum" alt="Quantum box logo" class="" />
        </div>
        <div class="w-16 h-16 pt-4 mx-1 sm:w-32 sm:h-32 sm:mx-10">
          <img :src="data.img.Univalle" alt="Quantum box logo" class="" />
        </div>
      </div>
    </div>

    <div
      class="pt-7 sm:pt-2 grid-rows-1 place-items-center text-center px-4 text-white"
    >
      <h1 class="text-4xl mb-3.5" id="title">{{ lang.titleOne }}</h1>
      <div class="lg:text-lg text-justify sm:px-40 lg:px-72">
        <p class="">
          La investigación y divulgación de la computación cuántica ha aumentado
          en los últimos años, sin embargo
          <strong>¿cuál es el propósito de esta?</strong><br /><br />Una de las
          más notorias aplicaciones de esto es en la teoría de juegos. ya que en
          un futuro no tan lejano, podría optimizar estrategias, mejorar el
          renderizado de aplicaciones y trabajar muy de la mano con la IA para
          hacer que el usuario tenga una experiencia más inmersiva.
        </p>
        <br />
        <p>
          Un problema que puede explicar la importancia de la computación
          cuántica es el
          <span
            class="bg-gradient-to-r from-rose-400 to-purple-400 font-bold bg-clip-text text-transparent"
            >dilema del prisionero</span
          >, el cual es un modelo útil para analizar una variedad de situaciones
          de toma de decisiones estratégicas en las que la
          <strong>cooperación</strong> y <strong>la traición</strong> son
          factores clave.
        </p>
        <h1
          class="text-3xl font-bold italic bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent"
        >
          El Dilema del Prisionero
        </h1>
        <div class="flex-auto flex justify-center">
          <div class="sm:h-48 sm:w-48 ">
            <img :src="data.img.Prisioner1" alt="Quantum box logo" class="" />
          </div>
          <div class="sm:h-48 sm:w-48 ">
            <img :src="data.img.Prisioner2" alt="Quantum box logo" class="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const data = computed(() => {
      return {
        img: {
          UAO: require(`@/assets/UAO.png`),
          Quantum: require(`@/assets/Quantum box.png`),
          Univalle: require(`@/assets/Univalle.png`),
          Prisioner1: require(`@/assets/prisioner1.png`),
          Prisioner2: require(`@/assets/prisioner2.jpg`),
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
  text-shadow: 2px 2px 2px #e15fed, -2px -2px 2px #6edcd9;
}

.currentRoute {
  text-shadow: 1.5px 1.5px 1.5px #e15fed;
}
</style>
