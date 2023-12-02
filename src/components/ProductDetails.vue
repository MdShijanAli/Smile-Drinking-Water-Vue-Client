<template>
 <Bannerslot :bannerTitle="currentProduct.title"/>


 <div>
  <div class="max-w-7xl mx-auto px-6 py-10">
      <div class="grid grid-cols-2 gap-10">
           <div class="border p-10">
            <img class="mx-auto" :src="currentProduct.img" alt="">
           </div>
           <div>
               <h1 class="text-h1 font-semibold">{{ currentProduct.title }}</h1>
               <p class="text-justify mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum, error! Placeat ut molestiae animi repellat optio fugit adipisci cumque odit atque vitae, ex non vero culpa, pariatur libero sequi dolorum? Voluptatum optio id nesciunt repudiandae maxime cupiditate, distinctio quas commodi ipsam libero accusantium labore omnis, natus voluptate corrupti temporibus nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores saepe accusantium nam voluptatem? Ex veniam similique voluptatum inventore commodi ratione. Temporibus, doloribus. Eveniet voluptatem fugiat, modi perspiciatis numquam ut quidem?</p>
           
              <div class="mt-10">
                <a onclick="orderOnlineModal.showModal()"
              class="px-10 py-4 text-center rounded-sm bg-primary hover:bg-secondary transition duration-700 ease-in-out text-white hover:text-white mt-5 lg:mt-0">
              <button>
                Ask Query
              </button>
            </a>
              </div>
           </div>
      </div>
  </div>
 </div>

<div>
  <div class="max-w-7xl mx-auto px-6 py-10">
    <h1 class="text-h1 font-semibold text-center pb-10">Related products</h1>
      <div class="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
  
                <div v-for="product in products.slice(0,4)" :key="product.id" class="w-full h-full box">
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
    </div>
</div>
</template>


<script>
import { mapState } from 'pinia';
import { useProductStore } from '../stores/productStore';
import Bannerslot from './BannerSlot.vue';

export default {
  name: "ProductDetails",
  components: { Bannerslot },

  data() {
    return {
      currentProduct: {}
    }
  },

  watch: {
    $route(to, from) {
      // Check if the title in the route parameters has changed
      if (to.params.title !== from.params.title) {
        this.updateCurrentProduct();
      }
    },
  },

  mounted() {
    // Initial setup
    console.log(this.products)
    this.updateCurrentProduct();
  },

  methods: {
    updateCurrentProduct() {
      const title = this.$route.params.title;
      console.log(title);

      // Assuming the title is a unique identifier for the blog
      this.currentProduct = this.products.find(product => product.title.replace(/ /g, '-') === title);
    },
  },
  computed: {
    ...mapState(useProductStore, {
      products: 'allProducts'
    })

    
  },



}
</script>

<style>
  
</style>