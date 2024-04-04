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
        <div v-html="lang.body.p1"></div>
        <h1
          class="text-3xl font-bold italic bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent mt-7"
        >
          {{ lang.navbar.title }}
        </h1>
        <div class="flex-auto flex justify-center mb-5">
          <!-- <div class="w-36 h-36 sm:h-48 sm:w-48 mx-5 flex flex-col text-center">
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
          </div> -->
        </div>
        <div CLASS="mt-10">
          <div>
            <p class="text-center">
              {{ lang.body.p2 }}
            </p>
            <div>
              <div
                class="text-justify items-center px-16 xl:px-50 2xl:px-96 my-7"
              >
                <div class="flex flex-col my-7">
                  <p class="h-auto" v-html="lang.body.p3"></p>
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
                  <p class="h-auto" v-html="lang.body.p4"></p>
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
                  <p class="h-auto" v-html="lang.body.p5"></p>
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
              <div>
                <p class="text-center" v-html="lang.body.p6"></p>
              </div>
            </div>
            <div class="mt-4 flex justify-center">
              <Matrix />
            </div>
            <p
              class="text-justify items-center px-16 xl:px-50 2xl:px-96 my-7"
              v-html="lang.body.p7"
            ></p>
            <div class="mt-3">
              <p v-html="lang.body.p8"></p>
              <div class="mt-5 flex justify-center"><QuantumMatrix /></div>
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
import QuantumMatrix from "./QuanticMatrix.vue";
import Matrix from "./Matrix.vue";
export default {
  components: {
    Matrix,
    QuantumMatrix,
  },
  setup() {
    const store = useStore();
    const data = computed(() => {
      return {
        img: {
          UAO: require(`@/assets/logos/UAO.png`),
          Quantum: require(`@/assets/logos/Quantum box.png`),
          Univalle: require(`@/assets/logos/Univalle.png`),
          Prisioner1: require(`@/assets/prisioners/prisioner1.png`),
          Prisioner2: require(`@/assets//prisioners/prisioner2.jpg`),
        },
      };
    });
    const lang = computed(() => store.getters.getLang);
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
#asd::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  background: url(https://api.iconify.design/eos-icons:atom-electron.svg?color=%23ffffff)
    no-repeat;
  background-size: cover;
  height: 22px;
  width: 22px;
  cursor: pointer;
}
</style>
