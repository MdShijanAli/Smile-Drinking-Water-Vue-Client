<template>
 <Bannerslot :bannerTitle="currentProduct?.title"/>

    <div v-if="loading"> <!-- Show loading component when isLoading is true -->
      <loading-component></loading-component>
    </div>

<div v-else>
  <div>
  <div class="max-w-7xl mx-auto px-6 py-10">
      <div class="grid md:grid-cols-2 gap-10">
           <div class="border p-10">
            <img class="mx-auto" :src="currentProduct?.img" alt="">
           </div>
           <div>
               <p class="lg:text-h1 text-h2 font-semibold">{{ currentProduct?.title }}</p>
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
    <p class="lg:text-h1 text-h2 font-semibold text-center pb-10">Related products</p>
      <div class="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
  
                <div v-for="product in productStore.products.slice(0,4)" :key="product.id" class="w-full h-full box">
       
                      <div class="single-image-box">
                         <img class="mx-auto w-full h-full pt-4" :src="product.img" alt="">
                      </div>
                      <div class="grid sm:grid-cols-3 items-center text-center sm:text-left justify-center mt-5">
                        <div class="sm:col-span-2">
                          <p class="font-bold ">{{ product.title }}</p>
                        </div>
                        <div class="col-span-1 mt-5">
                          <RouterLink :to="{ name: 'product-details', params: { id: product.id } }">
                          <button
                          class="px-2 py-1 border-2 font-semibold hover:bg-primary hover:text-white transition duration-500 ease-in-out hover:border-primary border-black rounded-full">Get
                          Now</button>
                        </RouterLink>
                        </div>
                      </div>
            
                </div>
          
           

    </div>
    </div>
</div>
</div>
</template>


<script>
import { ref, onMounted  } from 'vue';
import { useProductStore } from '../stores/productStore';
import Bannerslot from './BannerSlot.vue';
import LoadingComponent from './LoadingComponent.vue';

export default {
  name: "ProductDetails",
  components: { Bannerslot,LoadingComponent },

  data() {
    return {
      loading: false,
      currentProduct: {}
  }},

  watch: {
    $route(to, from) {
      
      if (to.params.id !== from.params.id) {
        this.updateCurrentProduct();
      }
    },
  }, 

  mounted() {
    console.log('current-products',this.currentProduct)
    this.updateCurrentProduct();
  },




  methods: {
    async updateCurrentProduct() {
  this.loading = true;
  const id = this.$route.params.id;
  try {
    await this.productStore.fetchProducts();
    console.log(id);
    console.log(this.productStore.products);

    // Assuming the title is a unique identifier for the product
    this.currentProduct = this.productStore.products.find(product => product.id == id);
  } catch (error) {
    console.error('Error fetching product details:', error);
  } finally {
    this.loading = false;
  }
}

  },


  setup() {
        const productStore = useProductStore();
        onMounted(async () => {
          await productStore.fetchProducts();
          console.log(productStore.products);
        });
        return {
            productStore
        };
    },
 

}
</script>

<style>
  
</style>