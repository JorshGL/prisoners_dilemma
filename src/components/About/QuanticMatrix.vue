<template>
  <table
    class="border-collapse border-slate-300 text-center border-[3px] rounded-lg"
  >
    <thead>
      <th class="border text-lg lg:text-2xl border-slate-300 px-3 rounded-lg">
        {{ lang.prisoner }}
      </th>
      <th class="border-[2px] font-semibold pt-5">
        <div class="flex flex-col items-center justify-center">
          <img
            :src="data.img.badPrisioner1"
            alt="Quantum box logo"
            class="flex-auto inset-0 w-14 lg:w-32 mx-5"
          />
          <p CLASS="text-rose-400 font-semibold ">{{ lang.optionOne }}</p>
        </div>
      </th>
      <th class="border-[2px] font-semibold pt-5 rounded-lg">
        <div class="flex flex-col justify-center items-center border-none">
          <img
            :src="data.img.Prisioner1"
            alt="Quantum box logo"
            class="w-14 lg:w-32 mx-5"
          />
          <p class="font-semibold">{{ lang.optionTwo }}</p>
        </div>
      </th>
      <th class="border-[2px] font-semibold pt-5">
        <div class="flex flex-col justify-center items-center border-none">
          <img
            :src="data.img.quanticPrisioner"
            alt="Quantum box logo"
            class="flex-auto inset-0 w-14 lg:w-32 mx-5"
          />
          <p CLASS="text-sky-400 italic font-bold">{{ lang.optionThree }}</p>
        </div>
      </th>
    </thead>
    <tr>
      <td class="border-[1.5px] font-semibold pt-5">
        <div class="flex flex-col justify-center items-center border-none">
          <img
            :src="data.img.badPrisioner1"
            alt="Quantum box logo"
            class="flex-auto inset-0 w-14 lg:w-32 mx-5"
          />
          <p CLASS="text-rose-400 font-semibold">{{ lang.optionOne }}</p>
        </div>
      </td>

      <td class="border-[2px] border-slate-300 p-2 text-[12px] sm:text-lg">
        {{ lang.yearThree }} , {{ lang.yearThree }}
      </td>
      <td class="border-[2px] border-slate-300 p-2 text-[12px] sm:text-lg">
        <span class="italic">{{ lang.free }}</span
        >, {{ lang.yearFive }}
      </td>
      <td class="border-[2px] border-slate-300 p-2 text-[12px] sm:text-lg">
        {{ lang.yearFive }}, <span class="italic">{{ lang.free }}</span>
      </td>
    </tr>
    <tr>
      <td class="p-2 items-center">
        <div class="flex flex-col justify-center items-center border-none">
          <img
            :src="data.img.Prisioner1"
            alt="Quantum box logo"
            class="w-14 lg:w-32 mx-5"
          />
          <p class="font-semibold">{{ lang.optionTwo }}</p>
        </div>
      </td>

      <td class="border-[2px] border-slate-300 p-2 text-[12px] sm:text-lg">
        {{ lang.yearFive }}, <span class="italic">{{ lang.free }}</span>
      </td>
      <td
        class="border-[2px] border-slate-300 p-2 italic font-bold text-md lg:text-2xl text-[12px] sm:text-lg text-[#00fff7]"
      >
        {{ lang.yearOne }} , {{ lang.yearOne }}
      </td>
      <td class="border-[2px] border-slate-300 p-2 text-[12px] sm:text-lg">
        {{ lang.yearThree }} , {{ lang.yearThree }}
      </td>
    </tr>
    <tr>
      <td class="border-[2px] border-slate-300 p-2">
        <div class="flex flex-col justify-center items-center border-none">
          <img
            :src="data.img.quanticPrisioner"
            alt="Quantum box logo"
            class="flex-auto inset-0 w-14 lg:w-32 mx-5"
          />
          <p CLASS="text-sky-400 font-bold">{{ lang.optionOne }}</p>
        </div>
      </td>

      <td class="border-[2px] border-slate-300 p-2 text-[12px] sm:text-lg">
        <span class="italic">{{ lang.free }}</span
        >, {{ lang.yearFive }}
      </td>
      <td class="border-[2px] border-slate-300 p-2 text-[12px] sm:text-lg">
        {{ lang.yearThree }} , {{ lang.yearThree }}
      </td>
      <td
        class="border-[2px] border-slate-300 p-2 italic font-bold text-md lg:text-2xl text-[#00fff7]"
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
