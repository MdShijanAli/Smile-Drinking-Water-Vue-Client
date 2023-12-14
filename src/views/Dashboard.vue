<template>
  <div>
    <div class="xl:p-20 p-10">
      <div class="grid xl:grid-cols-3 md:grid-cols-2 gap-5">
          <div class="p-10 border rounded-xl bg-white shadow-xl flex flex-col-reverse sm:flex-row sm:justify-between text-center sm:text-left gap-5">
            <div>
              <h2 class="md:text-dashboardHeader text-xl font-medium">Total Orders</h2>
              <h2 class="md:text-dashboardHeader text-xl font-semibold py-3">{{ orders.length }}</h2>
              <p><span class="text-teal-500">2 New Orders</span> since last visit</p>
            </div>

            <p>
              <i class="pi pi-shopping-cart text-xl bg-[#D0E1FD] p-3 text-[#3B82F6] rounded-lg"></i>
            </p>
          </div>
          <div class="p-10 border rounded-xl bg-white shadow-xl flex flex-col-reverse sm:flex-row sm:justify-between text-center sm:text-left gap-5">
            <div>
              <h2 class="md:text-dashboardHeader text-xl font-medium">Total Products</h2>
              <h2 class="md:text-dashboardHeader text-xl font-semibold py-3">{{ productStore.products.length }}</h2>
              <p><span class="text-teal-500">0 New Products</span> since last upload</p>
            </div>

            <p>
              <i class="pi pi-shopping-bag text-xl bg-[#D0E1FD] p-3 text-[#3B82F6] rounded-lg"></i>
            </p>
          </div>
          <div class="p-10 border rounded-xl bg-white shadow-xl flex flex-col-reverse sm:flex-row sm:justify-between text-center sm:text-left gap-5">
            <div>
              <h2 class="md:text-dashboardHeader text-xl font-medium">Total Applications</h2>
              <h2 class="md:text-dashboardHeader text-xl font-semibold py-3">{{ applicaitons.length }}</h2>
              <p><span class="text-teal-500">2 New Orders</span> since last visit</p>
            </div>

            <p>
              <i class="pi pi-file text-xl bg-[#D0E1FD] p-3 text-[#3B82F6] rounded-lg"></i>
            </p>
          </div>
          <div class="p-10 border rounded-xl bg-white shadow-xl flex flex-col-reverse sm:flex-row sm:justify-between text-center sm:text-left gap-5">
            <div>
              <h2 class="md:text-dashboardHeader text-xl font-medium">Total Jobs</h2>
              <h2 class="md:text-dashboardHeader text-xl font-semibold py-3">{{ jobs.length }}</h2>
              <p><span class="text-teal-500">2 Jobs</span> are open now</p>
            </div>

            <p>
              <i class="pi pi-file text-xl bg-[#D0E1FD] p-3 text-[#3B82F6] rounded-lg"></i>
            </p>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import {onMounted} from 'vue'
import { useProductStore } from '../stores/productStore';
import axios from 'axios';
export default {
  name: "Dashboard",

  data() {
    return {
      orders: [],
      applicaitons: [],
      jobs: []
    }
  },


  mounted() {
    console.log(this.applicaitons)
    axios.get('https://server.zealtechweb.com/api/orders')
    .then(response => {
      
      this.orders = response.data;
      // console.log(this.orders);
    })
    .catch(error => {
      // Handle errors
      console.error('Error fetching orders:', error);
    });

    axios.get('https://server.zealtechweb.com/api/applications')
    .then(response => {
      // Access the data property of the response
      this.applicaitons = response.data;
      console.log(this.applicaitons);
    })
    .catch(error => {
      // Handle errors
      console.error('Error fetching Applicaitons:', error);
    });


    axios.get('https://server.zealtechweb.com/api/jobs')
    .then(response => {
      // Access the data property of the response
      this.jobs = response.data;
      console.log(this.jobs);
    })
    .catch(error => {
      // Handle errors
      console.error('Error fetching orders:', error);
    });

  },

  methods: {

},
  



  setup() {
        const productStore = useProductStore();

        const fetchProducts = async () => {
      try {
        await productStore.fetchProducts();
        // console.log('Products fetched successfully.');
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    onMounted(() => {
      // Fetch products when the component is mounted
      fetchProducts();
    });

    return {
      productStore,
      fetchProducts, // Expose the fetchProducts method
    };
  },

}

</script>
<style>
  
</style>