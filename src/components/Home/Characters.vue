<template>
    <div class="flex flex-col bg-zinc-800 w-full h-full rounded-xl justify-center items-center gap-12">
        <span class="text-3xl font-bold">TU ESTRATEGIA</span>
        <div class="grid auto-cols-min justify-center items-center gap-5 p-4 text-center">
            <div class="flex items-center justify-center">JUGADOR A</div>
            <div class="flex flex-col row-start-2 bg-zinc-900 h-60 w-48 rounded-xl items-center p-2 justify-center">
                <img :src="sprites.playerA"/>
            </div>
            
            <div class="row-start-2 h-60 w-32 text-7xl overflow-hidden bg-clip-text py-16">
                <span class="z-50 h-full w-full bg-zinc-800 inset-0">QC</span>
                <div class="z-0 inset-0">
                    <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                        <defs><path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" /></defs>
                        <g class="parallax">
                            <use xlink:href="#gentle-wave" x="48" y="0" fill="#E15FED" />
                            <use xlink:href="#gentle-wave" x="48" y="3" fill="#6EDCD9" />
                            <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                            <use xlink:href="#gentle-wave" x="48" y="7" fill="#E15FED" />
                        </g>
                    </svg>
                </div>
            </div>
            

            <div class="flex col-start-3 items-center justify-center">JUGADOR B</div>
            <div class="flex flex-col row-start-2 bg-zinc-900 h-60 w-48 rounded-xl items-center p-2 justify-center">
                <img :src="sprites.playerB"/>
            </div>
            
        </div>
    </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
    setup() {
        const store = useStore();
        const sprites = computed(() => {
            let strategy = store.state.settings.strategy;
            let entanglementLevel = store.state.settings.entanglementLevel;
            return {
                playerA: require(`@/assets/placeholders/${strategy.playerA}_kirby.png`),
                playerB: require(`@/assets/placeholders/${strategy.playerB}_knight.png`),
                entanglementLevel: {value: entanglementLevel, sprite: require('@/assets/chain.png')}
            }
        })

        return {
            sprites
        }
    }
}
</script>
<style scoped>
    .waves {
        width: 100%;
        height: 100%;
        min-height: 100px;
        max-height: 100px;
    }

    .parallax > use {
        animation: moveForever 25s cubic-bezier(.55, .5, .45, .5) infinite;
    }

    .parallax > use:nth-child(1) {
        animation-delay: -2s;
        animation-duration: 7s;
    }

    .parallax > use:nth-child(2) {
        animation-delay: -3s;
        animation-duration: 10s;
    }

    .parallax > use:nth-child(3) {
        animation-delay: -4s;
        animation-duration: 13s;
    }

    .parallax > use:nth-child(4) {
        animation-delay: -5s;
        animation-duration: 20s;
    }

    .moveToFront {
        transform: translate3d(0, 0, 100px)
    }

    @keyframes moveForever {
        0% {
            transform: translate3d(-90px, 0, 0);
        }
        100% {
            transform: translate3d(85px, 0, 0);
        }
    }
</style>