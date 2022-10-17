<template>
    <div id="bg" class="flex flex-col bg-zinc-900 w-full h-full rounded-xl justify-center items-center space-y-12 overflow-hidden relative">
        <span class="text-3xl font-bold">{{ lang.title }}</span>
        <div class="z-10 grid auto-cols-min justify-center items-center gap-y-5 gap-x-24 p-4 text-center">
            <div class="flex items-center justify-center">JUGADOR A</div>
            <div class="flex flex-col row-start-2 bg-zinc-900 h-60 w-48 rounded-xl items-center p-2 justify-center overflow-hidden">
                <img class="hover:scale-125 transition duration-300 ease-in-out" :src="data.playerA.sprite"/>
            </div>
        
            <div class="flex items-center justify-center">JUGADOR B</div>
            <div class="flex flex-col row-start-2 bg-zinc-900 h-60 w-48 rounded-xl items-center p-2 justify-center overflow-hidden">
                <img class="hover:scale-125 transition duration-300 ease-in-out" :src="data.playerB.sprite"/>
            </div>
        </div>

        <div class="absolute bottom-0 w-full z-0">
            <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                <defs><path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" /></defs>
                <g class="parallax">
                    <use xlink:href="#gentle-wave" x="48" y="0" fill="#E15FED" />
                    <use xlink:href="#gentle-wave" x="48" y="3" fill="#6EDCD9" />
                    <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                    <use xlink:href="#gentle-wave" x="48" y="7" fill="#c79fca" />
                </g>
            </svg>
        </div>
    </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
    setup() {
        const store = useStore();
        const data = computed(() => {
            let strategy = store.state.settings.strategy;
            let entanglementLevel = store.state.settings.entanglementLevel;
            return {
                playerA: { value: strategy.playerA, sprite: require(`@/assets/placeholders/${strategy.playerA}_kirby.png`)},
                playerB: { value: strategy.playerB, sprite: require(`@/assets/placeholders/${strategy.playerB}_knight.png`)},
                entanglementLevel: {value: entanglementLevel, sprite: require('@/assets/chain.png')},
            }
        })
        const lang = computed(() => store.getters.getLang.characters)

        return {
            data,
            lang
        }
    }
}
</script>
<style scoped>
    #bg {
        background-image: url('@/assets/bg-characters.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .waves {
        width: 100%;
        height: 100%;
        min-height: 20vw;
        max-height: 20vw;
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