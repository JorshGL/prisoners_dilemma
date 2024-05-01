<template>
  <table
    class="table md:w-[900px] text-center bg-zinc-800 rounded-lg overflow-hidden md:my-6"
  >
    <th class="bg-slate-800" colspan="2">{{ lang.title }}</th>
    <tr>
      <td>{{ lang.playerATitle }}</td>
      <td>{{ lang.playerBTitle }}</td>
    </tr>
    <tr>
      <td>
        {{
          results.years_playerA != null ? results.years_playerA : "¯\\_(ツ)_/¯"
        }}
      </td>
      <td>
        {{
          results.years_playerB != null ? results.years_playerB : "¯\\_(ツ)_/¯"
        }}
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
    const lang = computed(() => store.getters.getLang.results);
    const results = computed(() => store.state.results);
    return {
      results,
      lang,
    };
  },
};
</script>
