<template>
  <table
    class="border-collapse rounded-md border-slate-300 text-center border-[2px]"
  >
    <thead>
      <th class="border-[2px] border-slate-300 text-2xl">
        {{ lang.prisioner }}
      </th>
      <th class="border-[2px] font-semibold pt-4">
        <img
          :src="data.img.badPrisioner1"
          alt="Quantum box logo"
          class="flex-auto inset-0 w-24 lg:w-32 mx-5"
        />
        <p CLASS="text-rose-400">{{ lang.optionOne }}</p>
      </th>
      <th class="border-[2px] font-semibold pt-4">
        <img
          :src="data.img.Prisioner1"
          alt="Quantum box logo"
          class="w-24 lg:w-32 mx-5"
        />
        <p>{{ lang.optionTwo }}</p>
      </th>
    </thead>
    <tr>
      <td class="border-[2px] font-semibold pt-4">
        <img
          :src="data.img.badPrisioner1"
          alt="Quantum box logo"
          class="flex-auto inset-0 w-24 lg:w-32 mx-5"
        />
        <p CLASS="text-rose-400">{{ lang.optionOne }}</p>
      </td>

      <td class="border-[2px] border-slate-300 py-4">
        {{ lang.yearOne }} , {{ lang.yearOne }}
      </td>
      <td class="border-[2px] border-slate-300 p-2">
        {{ lang.yearFive }}, <span class="text-rose-400">{{ lang.free }}</span>
      </td>
    </tr>
    <tr>
      <td class="border-[2px] border-slate-300 pt-4">
        <img
          :src="data.img.Prisioner1"
          alt="Quantum box logo"
          class="w-24 lg:w-32 mx-5"
        />
        <p class="font-semibold">{{ lang.optionTwo }}</p>
      </td>

      <td class="border-[2px] border-slate-300 p-2">
        <span class="text-rose-400">{{ lang.free }}</span> , {{ lang.yearFive }}
      </td>
      <td class="border-[2px] border-slate-300 p-2">
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
