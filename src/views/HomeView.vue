<template>
  <div class="bg-zinc-900 text-white h-full">
    <NavBar />
    <div class="grid grid-cols-3 grid-rows-3 w-full h-fit p-10 space-x-5">
      <div class="row-span-3">
        <Controls />
      </div>
      <div class="row-span-2 col-span-2">
        <Characters />
      </div>
      <div class="col-span-2">
        <Results />
      </div>
      <div>
        <button>Hola</button>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Controls from "@/components/Home/Controls.vue";
import Characters from "@/components/Home/Characters.vue";
import Results from "@/components/Home/Results.vue";
export default {
  components: {
    NavBar,
    Controls,
    Characters,
    Results,
  },
};
</script>
