<template>
    <div class="flex flex-col items-center">
        <div class="flex flex-col space-y-2">
            <span class="w-full">
                Entanglement level: 
                <input v-model="entanglementLevel" type="number" min="0" max="100" id="entanglementInput" class="w-1/6 bg-zinc-700 rounded-md px-2 outline-none out-of-range:bg-[#FF7171] text-right"/>
                 %
            </span>
            <input v-model="entanglementLevel" type="range" min="0" max="100" id="entanglementSlider">
        </div>
        
    </div>
</template>
<script>
import { ref, watchEffect } from "vue";
export default {
    setup() {
        const entanglementLevel = ref(0);
        return {
            entanglementLevel
        }
    }
}
</script>


<style scoped>
    #entanglementInput::-webkit-inner-spin-button,
    #entanglementInput::-webkit-outer-spin-button {
        -webkit-appearance: none;
    }

    #entanglementSlider {
        -webkit-appearance: none;
        background-color:rgb(63 63 70);
        width: 100%;
        height: 5px;
        border-radius: 6px;
        margin-top: 15px;
    }

    #entanglementSlider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        background: url(https://api.iconify.design/clarity:atom-line.svg?color=%23ffffff) no-repeat;
        background-size: cover;
        height: 22px;
        width: 22px;
        cursor: pointer;
        color: white;
    }
</style>