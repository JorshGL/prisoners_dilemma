<template>
  <div class="flex flex-col items-center gap-2">
    <div
      class="flex flex-col space-y-2 items-center justify-center text-center"
    >
      <div class="w-full">
        {{ lang.wernerParameter }}:
        <input
          v-model="wernerParameter"
          type="number"
          min="0"
          max="100"
          class="w-1/3 bg-zinc-700 rounded-md px-2 outline-none out-of-range:bg-[#FF7171] text-right"
        />
        %
      </div>
      <div><Graph :entanglementParameter="wernerParameter" /></div>
      <input
        v-model="wernerParameter"
        type="range"
        min="0"
        max="100"
        id="entanglementSlider"
      />
    </div>

    <span class="col-span-2 mt-2 text-l g font-semibold">{{
      lang.buttonsTitle
    }}</span>
    <div class="grid grid-cols-2 items-center gap-3 justify-center">
      <div class="col-span-2 flex items-center justify-around self-start">
        <span>{{ lang.playerATitle }}</span>
        <span>{{ lang.playerBTitle }}</span>
      </div>
      <button
        v-on:click="setStrategy('A', '0')"
        :class="[
          'p-2 bg-zinc-700 rounded-md',
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
          'p-2 bg-zinc-700 rounded-md',
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
          'p-2 bg-zinc-700 rounded-md',
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
          'p-2 bg-zinc-700 rounded-md',
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
          'p-2 bg-zinc-700 rounded-md',
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
          'p-2 bg-zinc-700 rounded-md',
          strategy.playerB === '-1'
            ? 'bg-slate-800 shadow-md shadow-[#6EDCD9] transition duration-300 ease-in-out'
            : '',
        ]"
      >
        {{ lang.buttons.quantum }}
      </button>
    </div>

    <div
      class="span-2 text-center m-2 flex flex-col gap-2 items-center justify-center"
    >
      {{ lang.rounds }}
      <input
        type="number"
        v-model="rounds"
        class="w-1/3 bg-zinc-700 rounded-md px-2 outline-none text-center"
      />
    </div>

    <button
      v-on:click="run"
      class="flex items-center justify-center font-bold text-xl text-zinc-800 bg-[#6EDCD9] px-10 py-3 m-2 rounded-md"
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
