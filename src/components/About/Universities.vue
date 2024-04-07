<template>
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
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  components: {},
  setup() {
    const store = useStore();
    const data = computed(() => {
      return {
        img: {
          UAO: require(`@/assets/logos/UAO.png`),
          Quantum: require(`@/assets/logos/Quantum box.png`),
          Univalle: require(`@/assets/logos/Univalle.png`),
        },
      };
    });
    return {
      data,
    };
  },
};
</script>
