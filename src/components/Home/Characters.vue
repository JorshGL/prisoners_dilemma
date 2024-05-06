<template>
  <div
    id="bg"
    class="flex flex-col col bg-zinc-900 max-w-full rounded-xl justify-center items-center md:space-y-12 overflow-hidden relative"
  >
    <!-- Tu estrategioa -->
    <span class="sm:text-xs font-bold md:text-3xl my-5">{{ lang.title }}</span>

    <!-- Contenedor personajes -->
    <div
      class="z-10 grid md:auto-cols-min justify-center items-center gap-y-5 gap-x-24 text-center px-3 md:p-4"
    >
      <div class="flex items-center justify-center text-xs md:text-base">
        <strong>{{ lang.playerATitle }}</strong>
      </div>
      <div
        class="flex flex-col row-start-2 h-44 w-24 bg-transparent rounded-xl items-center p-2 justify-center overflow-hidden md:h-60 md:w-40 lg:w-48 animate-bounce"
      >
        <!-- Img Personaje A -->
        <img
          class="hover:scale-105 transition duration-300 ease-in-out w-24 md:w-auto md:h-3/4 h-fit"
          :src="data.playerA.sprite"
        />
      </div>

      <div class="flex items-center justify-center text-xs md:text-base">
        <strong>{{ lang.playerBTitle }}</strong>
      </div>
      <div
        class="flex flex-col row-start-2 h-44 w-24 bg-transparent rounded-xl items-center p-2 justify-center overflow-hidden md:h-60 md:w-40 lg:w-48 animate-bounce"
      >
        <!-- Img Personaje B -->
        <img
          class="hover:scale-105 transition duration-300 ease-in-out w-24 md:w-auto md:h-3/4 h-fit"
          :src="data.playerB.sprite"
        />
      </div>
    </div>

    <div class="absolute bottom-0 w-full z-0">
      <svg
        class="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g class="parallax">
          <use xlink:href="#gentle-wave" x="48" y="0" fill="#E15FED" />
          <use xlink:href="#gentle-wave" x="48" y="3" fill="#6EDCD9" />
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="5"
            fill="rgba(255,255,255,0.3)"
          />
          <use xlink:href="#gentle-wave" x="48" y="7" fill="#c79fca" />
        </g>
      </svg>
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
      let strategy = store.state.settings.strategy;
      let entanglementLevel = store.state.settings.entanglementLevel;
      return {
        playerA: {
          value: strategy.playerA,
          sprite: require(`@/assets/placeholders/${strategy.playerA}_kirby.png`),
        },
        playerB: {
          value: strategy.playerB,
          sprite: require(`@/assets/placeholders/${strategy.playerB}_knight.png`),
        },
        entanglementLevel: {
          value: entanglementLevel,
          sprite: require("@/assets/chain.png"),
        },
      };
    });
    const lang = computed(() => store.getters.getLang.characters);

    return {
      data,
      lang,
    };
  },
};
</script>
<style scoped>
#bg {
  background-image: url("@/assets/bg-characters.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.waves {
  width: 100%;
  height: 100%;
  min-height: 20vw;
  max-height: 20vw;
}

.parallax > use {
  animation: moveForever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}

.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}

.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}

.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}

.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}

.moveToFront {
  transform: translate3d(0, 0, 100px);
}

@keyframes moveForever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}
</style>
