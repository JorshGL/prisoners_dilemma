<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      
        <div class="home">  
    <theCarousel

        :pagination= "true"       
        class="carousel" v-slot="{ currentSlide }"> 
      <TheSlide v-for="(slide, index) in carouselSlides" :key="index">
        <div v-show="currentSlide === index + 1" class="slide-info"> 
          <img :src="require(`../../assets/${slide}.jpg`)" alt="">
        </div>

      </TheSlide>

    </theCarousel>
  </div>
      <div class="bg-white rounded-lg shadow-lg p-6">
        
        <button @click="TogglePopup()" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 z">
          Close
        </button>
      </div>
    </div>
  </template>

<script>
import TheCarousel from './TheCarousel.vue';
import TheSlide from './TheSlide.vue';


export default {
	props: ['TogglePopup'],
    name: 'HomeView',
  components: { TheSlide, TheCarousel },
  setup(){  
    
    const carouselSlides = ['bg-1','bg-2','bg-3'];
    //const { popupTriggers, TogglePopup } = TheCarousel();

    return { carouselSlides }
  },
  methods: {
    togglePopup() {
      // Call the TogglePopup function to toggle the popup triggers
      TogglePopup('buttonTrigger');
    }
  },
}
</script>

<style lang="scss" scoped>

.carousel{
  position: relative;
  max-height: 100vh;
  height: 100vh;
  z-index: 99;

  .slide-info{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100%;
    height: 100%;
    z-index: 95;
  }

  img{
    min-width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 95;
  }
}

.popup {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 50;
	background-color: rgba(0, 0, 0, 0.2);
	
	display: flex;
	align-items: center;
	justify-content: center;

	.popup-inner {
		background: #FFF;
		padding: 32px;
	}
}
</style>



