<template>
  <table
    class="border-collapse rounded-lg border-slate-300 text-center border-[3.5px] overflow-x-auto"
  >
    <thead>
      <th class="border-[3.5px] border-slate-300 text-xl px-3 lg:text-2xl">
        {{ lang.prisoner }}
      </th>
      <th class="border-[3.5px] font-semibold pt-4">
        <div class="flex flex-col items-center justify-center">
          <img
            :src="data.img.Prisioner1"
            alt="Quantum box logo"
            class="w-20 lg:w-32 mx-5"
          />
          <p>{{ lang.optionTwo }}</p>
        </div>
      </th>
      <th class="border-[3.5px] font-semibold pt-4">
        <div class="flex flex-col items-center justify-center border-none">
          <img
            :src="data.img.badPrisioner1"
            alt="Quantum box logo"
            class="flex-auto inset-0 w-16 lg:w-32 mx-5"
          />
          <p CLASS="text-rose-400">{{ lang.optionOne }}</p>
        </div>
      </th>
    </thead>
    <tr>
      <td class="border-[3.5px] border-slate-300 pt-4">
        <div class="flex flex-col items-center justify-center border-none">
          <img
            :src="data.img.Prisioner1"
            alt="Quantum box logo"
            class="w-20 lg:w-32 mx-5"
          />
          <p class="font-semibold">{{ lang.optionTwo }}</p>
        </div>
      </td>
      <td class="border-[3.5px] border-slate-300 py-4">
        {{ lang.yearOne }} , {{ lang.yearOne }}
      </td>
      <td class="border-[3.5px] border-slate-300 p-2">
        {{ lang.yearFive }}, <span class="text-rose-400">{{ lang.free }}</span>
      </td>
    </tr>
    <tr>
      <td class="border-[3.5px] font-semibold pt-4">
        <div class="flex flex-col items-center justify-center border-none">
          <img
            :src="data.img.badPrisioner1"
            alt="Quantum box logo"
            class="flex-auto inset-0 w-20 lg:w-32 mx-5"
          />
          <p CLASS="text-rose-400">{{ lang.optionOne }}</p>
        </div>
      </td>

      <td class="border-[3.5px] border-slate-300 p-2">
        <span class="text-rose-400">{{ lang.free }}</span> , {{ lang.yearFive }}
      </td>
      <td class="border-[3.5px] border-slate-300 p-2">
        <span class="text-rose-400">{{ lang.yearThree }}</span> ,
        <span class="text-rose-400">{{ lang.yearThree }}</span>
      </td>
    </tr>
  </table>
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
          Prisioner1: require("@/assets/prisioners/prisioner1.png"),
          badPrisioner1: require("@/assets/prisioners/betrayingPrisioner1.png"),
        },
      };
    });
    const lang = computed(() => store.getters.getLang.body);
    return {
      data,
      lang,
    };
  },
};
</script>

<style></style>
