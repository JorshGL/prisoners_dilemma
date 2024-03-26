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
      <div class="lg:text-xl text-justify sm:px-40 lg:px-56">
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
          class="text-3xl font-bold italic bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent mt-7"
        >
          El Dilema del Prisionero
        </h1>
        <div class="flex-auto flex justify-center mb-5">
          <div class="w-36 h-36 sm:h-48 sm:w-48 mx-5 flex flex-col text-center">
            <img
              :src="data.img.Prisioner1"
              alt="Quantum box logo"
              class="hover:scale-105 hover:duration-200 duration-200"
            />
            <p>Prisionero 1</p>
          </div>
          <div class="w-36 h-36 sm:h-48 sm:w-48 mx-5 flex flex-col text-center">
            <img
              :src="data.img.Prisioner1"
              alt="Quantum box logo"
              class="hover:scale-105 hover:duration-200 duration-200"
            />
            <p>Prisionero 2</p>
          </div>
        </div>
        <div CLASS="mt-10">
          <div>
            <p class="text-center">
              El dilema del prisionero, es un problema en el que hay dos
              prisioneros que han cometido un crimen juntos.
            </p>
            <br />
            <div
              class="text-justify items-center px-16 xl:px-50 2xl:px-96 my-7"
            >
              <div class="flex flex-col my-7">
                <p class="h-auto">
                  Suponga que los prisioneros son separados y se les dice a cada
                  uno que su pena será reducida a 5 años si y solo si, los dos
                  <span class="text-rose-400 font-semibold">delatan</span>
                  al otro.
                </p>
                <div class="flex flex-row justify-center">
                  <img
                    :src="data.img.Prisioner1"
                    alt="Quantum box logo"
                    class="hover:scale-105 hover:duration-200 duration-200 w-24 lg:w-32 mx-5"
                  /><img
                    :src="data.img.Prisioner1"
                    alt="Quantum box logo"
                    class="hover:scale-105 hover:duration-200 duration-200 w-24 lg:w-32 mx-5"
                  />
                </div>
              </div>
              <div class="flex flex-col my-7">
                <p class="h-auto">
                  En caso contrario, si los dos
                  <span class="text-rose-400 font-semibold">callan</span>,
                  tendrán una pena de tan solo 1 año de prisión.
                </p>
                <div class="flex flex-row justify-center">
                  <img
                    :src="data.img.Prisioner1"
                    alt="Quantum box logo"
                    class="hover:animate-spin hover:duration-200 duration-200 w-24 lg:w-32 mx-5"
                  /><img
                    :src="data.img.Prisioner1"
                    alt="Quantum box logo"
                    class="hover:animate-spin hover:duration-200 duration-200 w-24 lg:w-32 mx-5"
                  />
                </div>
              </div>
              <div class="flex flex-col my-7">
                <p class="h-auto">
                  El último caso es que si los prisioneros tienen respuestas
                  distintas, un prisionero delató y el otro calló, entonces la
                  pena del que calló será de 20 años y el otro saldrá libre.
                </p>
                <div class="flex flex-row justify-center">
                  <img
                    :src="data.img.Prisioner1"
                    alt="Quantum box logo"
                    class="hover:scale-105 hover:duration-200 duration-200 w-24 lg:w-32 mx-5"
                  /><img
                    :src="data.img.Prisioner1"
                    alt="Quantum box logo"
                    class="hover:scale-105 hover:duration-1000 duration-1000 w-24 lg:w-32 mx-5 hover:animate-ping"
                  />
                </div>
              </div>
            </div>
            <P CLASS="text-center"
              >Si los resultados son puestos en una tabla, obtenemos la
              siguiente matriz:
            </P>
            <div>
              <table class="border-collapse rounded-md border border-slate-300">
                <thead>
                  <th class="border border-slate-300">Jugador 1</th>
                </thead>
                <tr>
                  <th class="border border-slate-300">b</th>
                  <th class="border border-slate-300">b</th>
                </tr>
                <tr>
                  <th class="border border-slate-300">c</th>
                </tr>
              </table>
            </div>
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
