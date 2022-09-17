<template>
    <div class="flex flex-col items-center gap-2">
        
        <div class="flex flex-col space-y-2">
            <span class="w-full">
                Entanglement level: 
                <input v-model="entanglementLevel" type="number" min="0" max="100" class="w-1/6 bg-zinc-700 rounded-md px-2 outline-none out-of-range:bg-[#FF7171] text-right"/>
                 %
            </span>
            <input v-model="entanglementLevel" type="range" min="0" max="100" id="entanglementSlider">
        </div>

        <span class="col-span-2 mt-2 text-lg font-semibold">Pick your strategy</span>
        <div class="grid grid-rows-4 grid-cols-2 items-center gap-3  justify-center">
            <div class="col-span-2 flex items-center justify-around self-start"><span>Player A</span><span>Player B</span></div>
            <button v-on:click="setStrategy('A', 0)" class="p-2 bg-zinc-700 rounded-md">Cooperate</button>
            <button v-on:click="setStrategy('B', 0)" class="p-2 bg-zinc-700 rounded-md">Cooperate</button>
            <button v-on:click="setStrategy('A', 1)" class="p-2 bg-zinc-700 rounded-md">Defect</button>
            <button v-on:click="setStrategy('B', 1)" class="p-2 bg-zinc-700 rounded-md">Defect</button>
            <button v-on:click="setStrategy('A', 2)" :class="[
                                                        'ease-in-out duration-[380ms] rounded-md p-2',
                                                        entanglementLevel > 0 && entanglementLevel <= 33? 
                                                        'text-white shadows1 bg-zinc-700' :
                                                        entanglementLevel > 33 && entanglementLevel <= 66?
                                                        'text-white shadows2 bg-zinc-700' :
                                                        entanglementLevel > 66 && entanglementLevel <= 100?
                                                        'text-white shadows3 bg-zinc-700' :
                                                        'text-zinc-500 bg-zinc-800'
                                                        ]">
            Quantum
            </button>
            
            <button v-on:click="setStrategy('B', 2)" :class="[
                                                        'ease-in-out duration-[350ms] rounded-md p-2',
                                                        entanglementLevel > 0 && entanglementLevel <= 33? 
                                                        'text-white shadows1 bg-zinc-700' :
                                                        entanglementLevel > 33 && entanglementLevel <= 66?
                                                        'text-white shadows2 bg-zinc-700' :
                                                        entanglementLevel > 66 && entanglementLevel <= 100?
                                                        'text-white shadows3 bg-zinc-700' :
                                                        'text-zinc-500 bg-zinc-800'
                                                        ]">
            Quantum
            </button>
        </div>

        <div class="span-2 text-center m-2 flex flex-col gap-2 items-center justify-center">How many rounds you want to play?
            <input type="number" class="w-1/6 bg-zinc-700 rounded-md px-2 outline-none text-center"/>
        </div>

        <button class="flex items-center justify-center font-bold text-xl text-zinc-800 bg-[#6EDCD9] px-10 py-3 m-2 rounded-md">RUN
            <svg width="32" height="32" viewBox="0 0 24 24"><path fill="#27272A" d="M8 19V5l11 7Z"/></svg>
        </button>
            
    </div>
</template>
<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
    setup() {
        const store = useStore();
        const entanglementLevel = ref(0);

        const setStrategy = (player, strategy) => {
            store.dispatch("setStrategy", { player: player, strategy: strategy });
            
        }

        return {
            entanglementLevel,
            setStrategy
        }
    }
}
</script>


<style scoped>
   input[type=number]::-webkit-inner-spin-button,
   input[type=number]::-webkit-outer-spin-button {
        appearance: none;
    }

    #entanglementSlider {
        appearance: none;
        background-color:rgb(63 63 70);
        width: 100%;
        height: 5px;
        border-radius: 6px;
        margin-top: 15px;
    }

    #entanglementSlider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        background: url(https://api.iconify.design/eos-icons:atom-electron.svg?color=%23ffffff) no-repeat;
        background-size: cover;
        height: 22px;
        width: 22px;
        cursor: pointer;
    }

    .shadows1 {
        box-shadow: 
            -1px -1px 5px #6EDCD9;
    }

    .shadows2 {
        box-shadow: 
            1.5px 1.5px 5px #E15FED,
            -1.5px -1.5px 5px #6EDCD9;
    }

    .shadows3 {
        box-shadow: 
            3px 3px 5px #E15FED,
            -3px -3px 5px #6EDCD9;
    }
</style>