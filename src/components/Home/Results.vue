<template>
        <table class="table w-full text-center bg-zinc-800 rounded-lg overflow-hidden my-6">
            <th class="bg-slate-800" colspan="2">Resultados</th>
            <tr>
                <td>
                    Jugador A
                </td>
                <td>
                    Jugador B
                </td>
            </tr>
            <tr>
                <td>{{results.years_playerA != null? results.years_playerA : '¯\\_(ツ)_/¯'}}</td>
                <td>{{results.years_playerB != null? results.years_playerB : '¯\\_(ツ)_/¯'}}</td>
            </tr>
        </table>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
    setup() {
        const store = useStore();
        const results = computed(() => store.state.results)
        return {
            results
        }
    }
}
</script>