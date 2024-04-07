<template>
  <table
    class="border-collapse rounded-md border-slate-300 text-center border-[2px]"
  >
    <thead>
      <th class="border-[2px] text-2xl border-slate-300">
        {{ lang.prisioners }}
      </th>
      <th class="border-[2px] font-semibold pt-5">
        <img
          :src="data.img.badPrisioner1"
          alt="Quantum box logo"
          class="flex-auto inset-0 w-24 lg:w-32 mx-5"
        />
        <p CLASS="text-rose-400 font-semibold ">{{ lang.optionOne }}</p>
      </th>
      <th class="border-[2px] font-semibold pt-5">
        <img
          :src="data.img.Prisioner1"
          alt="Quantum box logo"
          class="w-24 lg:w-32 mx-5"
        />
        <p class="font-semibold">{{ lang.optionTwo }}</p>
      </th>
      <th class="border-[2px] font-semibold pt-5">
        <img
          :src="data.img.quanticPrisioner"
          alt="Quantum box logo"
          class="flex-auto inset-0 w-24 lg:w-32 mx-5"
        />
        <p CLASS="text-sky-400 italic font-bold">{{ lang.optionThree }}</p>
      </th>
    </thead>
    <tr>
      <td class="border-[2px] font-semibold pt-5">
        <img
          :src="data.img.badPrisioner1"
          alt="Quantum box logo"
          class="flex-auto inset-0 w-24 lg:w-32 mx-5"
        />
        <p CLASS="text-rose-400 font-semibold">{{ lang.optionOne }}</p>
      </td>

      <td class="border-[2px] border-slate-300 p-2">
        {{ lang.yearThree }} , {{ lang.yearThree }}
      </td>
      <td class="border-[2px] border-slate-300 p-2">
        <span class="italic">{{ lang.free }}</span
        >, {{ lang.yearFive }}
      </td>
      <td class="border-[2px] border-slate-300 p-2">
        {{ lang.yearFive }}, <span class="italic">{{ lang.free }}</span>
      </td>
    </tr>
    <tr>
      <td class="border-[2px] border-slate-300 p-2">
        <img
          :src="data.img.Prisioner1"
          alt="Quantum box logo"
          class="w-24 lg:w-32 mx-5"
        />
        <p class="font-semibold">{{ lang.optionTwo }}</p>
      </td>

      <td class="border-[2px] border-slate-300 p-2">
        {{ lang.yearFive }}, <span class="italic">{{ lang.free }}</span>
      </td>
      <td
        class="border-[2px] border-slate-300 p-2 italic font-bold text-2xl text-[#00fff7]"
      >
        {{ lang.yearOne }} , {{ lang.yearOne }}
      </td>
      <td class="border-[2px] border-slate-300 p-2">
        {{ lang.yearThree }} , {{ lang.yearThree }}
      </td>
    </tr>
    <tr>
      <td class="border-[2px] border-slate-300 p-2">
        <img
          :src="data.img.quanticPrisioner"
          alt="Quantum box logo"
          class="flex-auto inset-0 w-24 lg:w-32 mx-5"
        />
        <p CLASS="text-sky-400 font-bold">{{ lang.optionOne }}</p>
      </td>

      <td class="border-[2px] border-slate-300 p-2">
        <span class="italic">{{ lang.free }}</span
        >, {{ lang.yearFive }}
      </td>
      <td class="border-[2px] border-slate-300 p-2">
        {{ lang.yearThree }} , {{ lang.yearThree }}
      </td>
      <td
        class="border-[2px] border-slate-300 p-2 italic font-bold text-2xl text-[#00fff7]"
      >
        {{ lang.yearOne }}, {{ lang.yearOne }}
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
          quanticPrisioner: require("@/assets/prisioners/quanticPrisioner.png"),
        },
      };
    });
    const lang = computed(() => store.getters.getLang.body);
    return { data, lang };
  },
};
</script>
