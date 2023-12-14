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
        <div class="">
          <!--   -->
          <Carousel :value="productStore.products" :numVisible="4" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="2000">  
            <template #item="{ data }">
              <div class="w-full h-full img-box px-2 group">
                      <!-- Start Testimonial -->
                      <div class="single-image-box">
                        <img class="mx-auto w-full h-full pt-4 group-hover:translate-y-5 transition duration-500 ease-in-out" :src="data.img" alt="">
                      </div>
                      <div class="flex items-center justify-between mt-5">
                        <h3 class="font-bold">{{ data.title }}</h3>
                        <RouterLink :to="{ name: 'product-details', params: { id: data.id } }">
                          <button
                          class="px-2 py-1 border-2 font-semibold hover:bg-primary hover:text-white transition duration-500 ease-in-out hover:border-primary border-black rounded-full">Get
                          Now</button>
                        </RouterLink>
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

<script>

import { ref, onMounted } from 'vue';

import { RouterLink } from 'vue-router';

import { useProductStore } from "../stores/productStore"



export default {


setup() {

    const responsiveOptions = ref([
    { breakpoint: '1400px', numVisible: 4, numScroll: 1 },
    { breakpoint: '1199px', numVisible: 3, numScroll: 1 },
    { breakpoint: '767px', numVisible: 2, numScroll: 1 },
    { breakpoint: '575px', numVisible: 1, numScroll: 1 }
    ]);

  const productStore = useProductStore();

  onMounted(() => {
    // Fetch products when the component is mounted
    productStore.fetchProducts();
  });

  return {
    productStore,responsiveOptions
  };
    }

  }



</script>


<style>

.single-image-box:hover img {
        @keyframes upDown {

          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(20px);
          }
        }

        animation: upDown 3s ease-in infinite alternate-reverse;
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

      .single-image-box:hover {
        background: linear-gradient(transparent 40%, #003376 40%) no-repeat;
      }

 
</style>