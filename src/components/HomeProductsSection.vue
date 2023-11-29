<template>
  <div class="max-w-7xl mx-auto px-6 py-10">
    <div class="text-center">
      <h1 class="md:text-h1 text-h4 font-bold text-primary">Products</h1>
      <p class="text-paragraph md:w-2/3 mx-auto mt-5">
        With our perfect multi-step process and state-of-the-art production line, we ensure the highest levels of purity and quality, offering premium products guaranteed to satisfy our customers every time.
      </p>
    </div>

    <div class="pt-0 md:pt-10">
      <div class="relative glide-08 mt-10 overflow-hidden">
        <div class="card">
          <!--   -->
          <Carousel :value="products" :numVisible="4" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="2000">  
            <template #item="{ data }">
              <div class="w-full h-full img-box px-2 group">
                      <!-- Start Testimonial -->
                      <div class="single-image-box">
                        <img class="mx-auto w-full h-full pt-4 group-hover:translate-y-5 transition duration-500 ease-in-out" :src="data.img" alt="">
                      </div>
                      <div class="flex items-center justify-between mt-5">
                        <h3 class="font-bold">{{ data.weight }}</h3>
                        <button
                          class="px-2 py-1 border-2 font-semibold hover:bg-primary hover:text-white transition duration-500 ease-in-out hover:border-primary border-black rounded-full">Get
                          Now</button>
                      </div>
                      <!-- End Testimonial -->
                    </div>
            </template>
          </Carousel>
        </div>

        <div class="text-center mt-10">
          <RouterLink to="/products">
            <button class="px-10 py-2 bg-primary hover:bg-secondary transition duration-500 ease-in-out rounded-full text-white font-semibold">View All</button>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import productImg1 from '../assets/images/1_Mai-Bottle-1000x1000.png'
import productImg2 from '../assets/images/1.5.png'
import productImg3 from '../assets/images/200ml.png'
import productImg4 from '../assets/images/2Mai-Bottle-1000x1000.png'
import productImg5 from '../assets/images/330-ML.png'
import productImg6 from '../assets/images/4-G-NBR.png'
import productImg7 from '../assets/images/5-G-New.png'
import productImg8 from '../assets/images/5-Ltr.png'

import { ref } from "vue";
import { RouterLink } from 'vue-router';

const responsiveOptions = ref([
  { breakpoint: '1400px', numVisible: 4, numScroll: 1 },
  { breakpoint: '1199px', numVisible: 3, numScroll: 1 },
  { breakpoint: '767px', numVisible: 2, numScroll: 1 },
  { breakpoint: '575px', numVisible: 1, numScroll: 1 }
]);

const products = ref([
        {
          id: 1,
          img: productImg1,
          weight: "1.5 LTR"
        },
        {
          id: 2,
          img: productImg2,
          weight: "2.5 LTR"
        },
        {
          id: 3,
          img: productImg3,
          weight: "3.5 LTR"
        },
        {
          id: 4,
          img: productImg4,
          weight: "4.5 LTR"
        },
        {
          id: 5,
          img: productImg5,
          weight: "5.5 LTR"
        },
        {
          id: 6,
          img: productImg6,
          weight: "6.5 LTR"
        },
        {
          id: 7,
          img: productImg7,
          weight: "7.5 LTR"
        },
        {
          id: 8,
          img: productImg8,
          weight: "8.5 LTR"
        },
      ],);

</script>


<style>

@keyframes upDown {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(2px);
    }
  }

  .single-image-box:hover {
    background: linear-gradient(transparent 40%, #003376 40%) no-repeat;
    animation: upDown 3s ease-in-out infinite alternate-reverse !important;
  }


    .single-image-box {
        height: 280px;
        background-size: cover;
        background-position: center;
        /* background-color: #cccc; */
        position: relative;
        z-index: 1;
        overflow: hidden;
        background: linear-gradient(transparent 40%, #cccc 40%) no-repeat;
        border-radius: 5px;

      }

      .single-image-box img {
        margin: auto !important;
        width: unset !important;
        height: 85% !important;
        padding-top: 20px;
      }
 
</style>