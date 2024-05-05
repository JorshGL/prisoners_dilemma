<template>
  <div class="grid grid-cols-1 row-start-2 items-center gap-2 md:flex md:flex-col">
    <!-- Grafica div -->
    <div
      class="row-start-2 md:flex md:flex-col space-y-2 items-center justify-center text-center"
    >
      <!-- texto "Porcentaje%" -->
      <div class="font-semibold w-full md:text-xl text-sm">
        {{ lang.wernerParameter }}:
        <!-- iput Porcentaje -->
        <input
          v-model="wernerParameter"
          type="number"
          min="0"
          max="100"
          class="w-1/3 bg-zinc-700 rounded-md px-2 outline-none out-of-range:bg-[#FF7171] text-right"
        />
        %
      </div>
      <!-- Dimensiones Graph -->
      <div class="md:h-40 md:w-40">
        <Graph :entanglementParameter="wernerParameter" />
      </div>
      <input
        class=""
        v-model="wernerParameter"
        type="range"
        min="0"
        max="100"
        id="entanglementSlider"
      />
    </div>

    <!-- div Buttons characters -->
    <div
      class="m-5 row-start-1 md:row-start-2 h-full text-center flex flex-col justify-center"
    >
      <!-- Selecciona tu estrategia -->
      <span class="text-sm font-semibold md:col-span-2 md:text-xl">{{
        lang.buttonsTitle
      }}</span>

      <div class="gap-4 justify-center grid grid-cols-2 items-center md:gap-3">
        <!-- Jugador A y B -->
        <div
          class="pt-3 col-span-2 flex items-center justify-around self-start"
        >
          <span class="text-xs md:text-sm">{{ lang.playerATitle }}</span>
          <span class="text-xs md:text-sm">{{ lang.playerBTitle }}</span>
        </div>
        <!-- Botones cooperar -->
        <button
          v-on:click="setStrategy('A', '0')"
          :class="[
            'text-xs md:text-sm p-1 bg-zinc-700 rounded-md h-10 md:h-7 md:w-24 lg:w-32',
            strategy.playerA === '0'
              ? 'bg-slate-800 shadow-md shadow-[#E15FED] transition duration-300 ease-in-out'
              : '',
          ]"
        >
          {{ lang.buttons.cooperate }}
        </button>
        <button
          v-on:click="setStrategy('B', '0')"
          :class="[
            'text-xs md:text-sm p-1 bg-zinc-700 rounded-md h-10 sm:h-15 md:h-7',
            strategy.playerB === '0'
              ? 'bg-slate-800 shadow-md shadow-[#E15FED] transition duration-300 ease-in-out'
              : '',
          ]"
        >
          {{ lang.buttons.cooperate }}
        </button>
        <button
          v-on:click="setStrategy('A', '1')"
          :class="[
            'text-xs md:text-sm p-1 bg-zinc-700 rounded-md h-10 md:h-7',
            strategy.playerA === '1'
              ? 'bg-slate-800 shadow-md shadow-[#ff7674] transition duration-300 ease-in-out'
              : '',
          ]"
        >
          {{ lang.buttons.deflect }}
        </button>
        <button
          v-on:click="setStrategy('B', '1')"
          :class="[
            'text-xs  md:text-sm p-1 bg-zinc-700 rounded-md h-10 md:h-7',
            strategy.playerB === '1'
              ? 'bg-slate-800 shadow-md shadow-[#ff7674] transition duration-300 ease-in-out'
              : '',
          ]"
        >
          {{ lang.buttons.deflect }}
        </button>
        <button
          v-on:click="setStrategy('A', '-1')"
          :class="[
            'text-xs md:text-sm p-1 bg-zinc-700 rounded-md h-10 md:h-7',
            strategy.playerA === '-1'
              ? 'bg-slate-800 shadow-md shadow-[#6EDCD9] transition duration-300 ease-in-out'
              : '',
          ]"
        >
          {{ lang.buttons.quantum }}
        </button>
        <button
          v-on:click="setStrategy('B', '-1')"
          :class="[
            'text-xs md:text-sm p-1 bg-zinc-700 rounded-md h-10 md:h-7',
            strategy.playerB === '-1'
              ? 'bg-slate-800 shadow-md shadow-[#6EDCD9] transition duration-300 ease-in-out'
              : '',
          ]"
        >
          {{ lang.buttons.quantum }}
        </button>
      </div>
    </div>

    <!--  Cantidad Rondas-->
    <div
      class="font-semibold col-start-1 col-span-2 text-center m-2 gap-0 items-center justify-center md:gap-2 md:flex md:flex-col md:span-2"
    >
      {{ lang.rounds }}
      <input
        type="number"
        v-model="rounds"
        class="w-1/3 bg-zinc-700 rounded-md px-2 outline-none text-center"
      />
    </div>

    <!-- Run Button -->
    <button
      v-on:click="run"
      class="col-start-1 col-span-2 flex items-center justify-center font-bold text-xl text-zinc-800 bg-[#6EDCD9] px-10 py-3 m-2 rounded-md"
    >
      {{ lang.run }}
      <svg width="32" height="32" viewBox="0 0 24 24">
        <path fill="#27272A" d="M8 19V5l11 7Z" />
      </svg>
    </button>
  </div>
</template>
<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import Graph from "./Graph.vue";
export default {
  components: {
    Graph,
  },
  setup() {
    const store = useStore();
    const wernerParameter = ref(0);
    const lang = computed(() => store.getters.getLang.controls);
    const rounds = ref(1024);
    const strategy = computed(() => store.state.settings.strategy);

    const setStrategy = (player, strategy) => {
      return store.dispatch("setStrategy", {
        player: player,
        strategy: strategy,
      });
    };

    const run = () =>
      store.dispatch("run", {
        w: wernerParameter.value / 100,
        strategy: strategy.value,
      });

    return {
      wernerParameter,
      setStrategy,
      lang,
      strategy,
      rounds,
      run,
    };
  },
};
</script>

<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  appearance: none;
}

#entanglementSlider {
  appearance: none;
  background-color: rgb(63 63 70);
  width: 100%;
  height: 5px;
  border-radius: 6px;
  margin-top: 15px;
}

#entanglementSlider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  background: url(https://api.iconify.design/eos-icons:atom-electron.svg?color=%23ffffff)
    no-repeat;
  background-size: cover;
  height: 22px;
  width: 22px;
  cursor: pointer;
}

.shadows1 {
  box-shadow: -1px -1px 5px #6edcd9;
}

.shadows2 {
  box-shadow: 1.5px 1.5px 5px #e15fed, -1.5px -1.5px 5px #6edcd9;
}

.shadows3 {
  box-shadow: 3px 3px 5px #e15fed, -3px -3px 5px #6edcd9;
}
</style>
