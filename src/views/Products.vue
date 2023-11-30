<template>
  
<BannerSlot bannerTitle="Products"></BannerSlot>


<div>
    <div class="max-w-7xl mx-auto px-6 py-10">
      <div class="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
  
                <div v-for="product in products" :key="product.id" class="w-full h-full box">
                    <!-- Start Testimonial -->
                      <div class="single-image-box">
                         <img class="mx-auto w-full h-full pt-4" :src="product.img" alt="">
                      </div>
                      <div class="flex items-center justify-between mt-5">
                        <h3 class="font-bold">{{ product.title }}</h3>
                        <RouterLink :to="{ name: 'product-details', params: { title: product.title.replace(/ /g, '-') } }">
                          <button
                          class="px-2 py-1 border-2 font-semibold hover:bg-primary hover:text-white transition duration-500 ease-in-out hover:border-primary border-black rounded-full">Get
                          Now</button>
                        </RouterLink>
                      </div>
                    <!-- End Testimonial -->
                </div>
          
           

    </div>


           <!-- Pagination -->
<nav class="flex items-center -space-x-px mt-20 justify-center">
  <button type="button" class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
    <svg class="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
    <span class="hidden sm:block">Previous</span>
  </button>
  <button type="button" class="min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-200 text-gray-800 border border-gray-200 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-600 dark:border-gray-700 dark:text-white dark:focus:bg-gray-500" aria-current="page">1</button>
  <button type="button" class="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">2</button>
  <button type="button" class="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">3</button>
  <button type="button" class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
    <span class="hidden sm:block">Next</span>
    <svg class="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
  </button>
</nav>
<!-- End Pagination -->
    </div>
   </div>

</template>
<script>
import { mapState } from 'pinia';
import BannerSlot from '../components/BannerSlot.vue';
import { useProductStore } from '../stores/productStore';

export default {
    name: "Products",
    data() {
        return {
            msg: "This is Products page"
        };
    },
  components: { BannerSlot },

  computed: {
    ...mapState(useProductStore, {
        products: "allProducts"
      })
    }
}
</script>
<style>
  
</style>