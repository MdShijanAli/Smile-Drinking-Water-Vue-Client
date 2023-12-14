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
              <h2 class="md:text-dashboardHeader text-xl font-semibold py-3">{{ applications.length }}</h2>
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
export default {
  name: "Dashboard",

  data() {
    return {
      orders: [],
      applications: [],
      jobs: []
    }
  },


  mounted() {
    console.log(this.applicaitons)

this.fetchOrders()
this.fetchApplications()
this.fetchJobs()
  

  },

  methods: {
    async fetchJobs() {
  try {
    const response = await fetch('https://server.zealtechweb.com/api/jobs');

    // Check if the response status is ok (status code 200-299)
    if (!response.ok) {
      throw new Error(`Error fetching jobs: ${response.statusText}`);
    }

    // Parse the JSON data in the response
    const data = await response.json();

    // Access the data property of the response
    this.jobs = data;
    console.log('jobs', this.jobs);
  } catch (error) {
    // Handle errors
    console.error('Error fetching jobs:', error.message);
  }
},

async fetchApplications() {
  try {
    const response = await fetch('https://server.zealtechweb.com/api/applications');

    // Check if the response status is ok (status code 200-299)
    if (!response.ok) {
      throw new Error(`Error fetching applications: ${response.statusText}`);
    }

    // Parse the JSON data in the response
    const data = await response.json();

    // Access the data property of the response
    this.applications = data;
    console.log('applications', this.applications);
  } catch (error) {
    // Handle errors
    console.error('Error fetching applications:', error.message);
  }
},


async fetchOrders() {
  try {
    const response = await fetch('https://server.zealtechweb.com/api/orders');

    // Check if the response status is ok (status code 200-299)
    if (!response.ok) {
      throw new Error(`Error fetching orders: ${response.statusText}`);
    }

    // Parse the JSON data in the response
    const data = await response.json();

    // Access the data property of the response
    this.orders = data;
    // console.log(this.orders);
  } catch (error) {
    // Handle errors
    console.error('Error fetching orders:', error.message);
  }
}

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