<template>
  <nav class="flex flex-col items-center h-1/4 py-5">
    <div class="flex justify-center py-0">
      <h1 id="title" class="text-5xl font-bold justify-center px-3 py-2">
        {{ lang.title }}
      </h1>

      <button
        v-on:click="cambiarIdioma"
        class="text-2xl m-3 py-2 justify-end font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-500"
      >
        {{ lang.change }}
      </button>
    </div>

    <div class="flex space-x-6 py-0">
      <router-link
        to="/"
        :class="currentRoute === 'home' ? 'currentRoute' : 'text-zinc-100'"
        >{{ lang.home }}</router-link
      >
      <router-link
        to="/about"
        :class="currentRoute === 'about' ? 'currentRoute' : 'text-zinc-100'"
        >{{ lang.about }}</router-link
      >
    </div>
  </nav>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const currentRoute = computed(() => useRoute().name);
    const lang = computed(() => store.getters.getLang.navbar);

    return {
      currentRoute,
      lang,
    };
  },
  methods: {
    cambiarIdioma() {
      this.$store.commit("changeLanguage");
    },
  },
};
</script>

<style scoped>
#title {
  color: #eeeeee;
  text-shadow: 3px 3px 2px #e15fed, -3px -3px 2px #6edcd9;
}

.currentRoute {
  text-shadow: 1.5px 1.5px 1.5px #e15fed;
}
</style>
