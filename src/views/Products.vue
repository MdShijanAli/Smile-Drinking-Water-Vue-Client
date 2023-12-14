<template>
  
<BannerSlot bannerTitle="Products"></BannerSlot>


   <div>
    <div class="max-w-7xl mx-auto px-6 py-10">

        <DataView :value="productStore.products" :paginator="productStore.products.length>12 ? true :false" :rows="12"
    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5,10,25]"
    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products">
          <template #list="slotProps">
      <div class="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
  
                <div v-for="product in slotProps.items" :key="product.id" class="w-full h-full box">
                    <!-- Start Testimonial -->
                      <div class="single-image-box">
                         <img class="mx-auto w-full h-full pt-4" :src="product.img" alt="">
                      </div>
                      <div class="flex items-center justify-between mt-5">
                        <h3 class="font-bold">{{ product.title }}</h3>
                        <RouterLink :to="{ name: 'product-details', params: { id: product.id } }">
                          <button
                          class="px-2 py-1 border-2 font-semibold hover:bg-primary hover:text-white transition duration-500 ease-in-out hover:border-primary border-black rounded-full">Get
                          Now</button>
                        </RouterLink>
                      </div>
                    <!-- End Testimonial -->
                </div>
    </div>
              </template>
            </DataView>
           



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
</style>