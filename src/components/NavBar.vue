<template>
  <nav class="flex flex-col justify-center items-center h-1/4 space-y-3 py-5">
    <h1 id="title" class="text-5xl font-bold">{{ lang.title }}</h1>
    <div class="flex space-x-6">
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
      <button v-on:click="cambiarIdioma">
        <em>{{ lang.change }}</em>
      </button>
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
