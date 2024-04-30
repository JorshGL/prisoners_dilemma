<template>
    <transition name ="modal-animation">
        <div v-show="modalActive" class="modal">
            <transition name="modal-animation-inner">
                <div v-show="modalActive" class="modal-inner">
                    
                    <div class="modal-content">
                        <CarouselSet                        
                            :pagination= "true"
                            :startAutoPlay="false"
                            :timeout="3000"                 
                            class="carousel" v-slot="{ currentSlide }"> 

                            <SlidesSet v-for="(slide, index) in carouselSlides" :key="index">                                    
                                <div v-show="currentSlide === index + 1" class="slide-info">
                                    <img :src="require(`@/assets/${slide}.jpg`)" alt=""> 
                                </div>                                                
                            </SlidesSet>
                            
                        </CarouselSet>
                        <i @click="close" type="button" class="far fa-times-circle"></i>
                    </div>                
                    <button @click="close">Cerrar</button>
                </div>
            </transition>
        </div>
    </transition>
    </template>
    
    <script>
    import CarouselSet from "./CarouselSet.vue";
    import SlidesSet from "./SlidesSet.vue";
    export default {
        props: ['modalActive'],
    
        components: { CarouselSet, SlidesSet},
    
        setup(props, { emit }) {
    
                
            const close = () => {
    
                emit("close")
            }
    
            
            const carouselSlides = ['bg-1','bg-2','bg-3'];
    
        
    
            return {
                close,
                carouselSlides,
            }
    
        },
    
    
    }
    
    
    </script>
    
    <style lang="scss" scoped>
    
    
    .modal-animation-enter-active,
    .modal-animation-leave-active {
        transition: opacity .3s cubic-bezier(.52, 0.02, 0.19, 1.02);
    }
    
    .modal-animation-enter-from,
    .modal-animation-leave-to {
        opacity: 0;
    }
    
    .modal-animation-inner-enter-active {
        transition: all .3s cubic-bezier(.52, 0.02, 0.19, 1.02) 0.15s;
    }
    
    .modal-animation-inner-leave-active {
        transition: all .3s cubic-bezier(.52, 0.02, 0.19, 1.02);
    }
    
    .modal-animation-inner-enter-from {
        opacity: 0;
        transform: scale(0.8);
    }
    
    .modal-animation-inner-leave-to {
        transform: scale(0.8);
    }
    
    .modal {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(255, 255, 255, 0.7);
        
    
        .modal-inner {
            
            position: relative;
            max-width: 640px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            border-radius: 30px;
        
        .modal-content {

            border-radius: 30px;
            
            
    
            .carousel{
                display: flex;
                border-radius: 30px;
                
                
                .slide-info{
                    
                    display: flex;
                    height: 80vh;
                    border-radius: 30px;             
                    
                }
    
                img{
                    display: flex;
                    max-width: 100%;
                    height: auto;
                    width: auto;
                    object-fit: cover;
                    border-radius: 30px;              
                    
                }
            }
        }
    
            i {
                
                position: absolute;
                top: 15px;
                right: 15px;
                font-size: 20px;
                cursor: pointer;
                color: #fff;
                background-color: gray;
                border-radius: 20px;
                
    
                &:hover {
                    color: #6347c7;
                    
                }
            }
    
            button {
                cursor: pointer;
                position: absolute;
                bottom: 10px;
                right: 15px;
                padding: 10px 15px;
                border: none;
                border-radius: 30px;
                font-size: 16px;
                background-color: #6347c7;
                color: #fff;
                
                &:hover {
                    scale: 1.1;
                }
                
            }
        }
    }
    
    
    </style>