<template>
  
<BannerSlot bannerTitle="Products"></BannerSlot>


   <div>
    <div class="max-w-7xl mx-auto px-6 py-10">


      <div class="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
  
  <div v-for="product in productStore.products" :key="product.id" class="w-full h-full box">
      <!-- Start Testimonial -->
        <div class="single-image-box">
           <img class="mx-auto w-full h-full pt-4" :src="product.img" alt="">
        </div>
        <div class="grid sm:grid-cols-3 items-center text-center sm:text-left justify-center mt-5">
          <div class="sm:col-span-2">
            <p class="font-bold">{{ product.title }}</p>
          </div>
          <div class="col-span-1 mt-5">
            <RouterLink :to="{ name: 'product-details', params: { id: product.id } }">
            <button
            class="px-2 py-1 border-2 font-semibold hover:bg-primary hover:text-white transition duration-500 ease-in-out hover:border-primary border-black rounded-full">Get
            Now</button>
          </RouterLink>
          </div>
        </div>
      <!-- End Testimonial -->
  </div>
</div>
        
           



    </div>
   </div>

</template>
<script>
import { ref, onMounted } from 'vue';
import BannerSlot from '../components/BannerSlot.vue';
import { useProductStore } from '../stores/productStore';

export default {
    name: "Products",
    data() {
      return {
          msg: "This is Products page",
          
        };
    },
  components: { BannerSlot },

  setup() {
    const productStore = useProductStore();
    onMounted(() => {
      // Fetch products when the component is mounted
      productStore.fetchProducts();
      console.log('products', productStore.products)
    });
    return {
      productStore,
    };
  },

}
</script>
<style>
 .p-paginator.p-component {
    border: 1px solid #ddd;
    margin-top: 100px;
}
.p-dropdown.p-component.p-inputwrapper.p-inputwrapper-filled.p-paginator-rpp-options {
    border: 1px solid #ddd !important;
}
button.p-paginator-page.p-paginator-element.p-link.p-highlight {
    background: #F0FDFA;
    color: #22C55E;
} 



.single-image-box{
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
.single-image-box img{
  margin: auto !important;
    width: unset !important;
    height: 85% !important;
    padding-top: 20px;
}
.single-image-box:hover {
    background: linear-gradient(transparent 40%, #003376 40%) no-repeat;
}
.single-image-box:hover img{
  @keyframes upDown {

0%,
100% {
  transform: translateY(0);
}

50% {
  transform: translateY(2px);
}
}

animation: upDown 3s ease-in infinite alternate-reverse;
}
.owl-carousel.owl-loaded {
    display: block;
}
.owl-carousel {
    /* display: none; */
    width: 100%;
    z-index: 1;
}
.owl-carousel, .owl-carousel .owl-item {
    -webkit-tap-highlight-color: transparent;
    position: relative;
}
</style>