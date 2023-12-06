<template>
  <div>
    <div class="p-20" >
  

       <DataView :value="orders" 
       :paginator="true" :rows="9" :filters="filters"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5,10,25]"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} Orders"
       >
       
        <template #list="slotProps">
          <div class="grid grid-cols-3 gap-5">
            <div v-for="order in slotProps.items" :key="order.id" class="border rounded-sm p-10 hover:bg-sky-100">
                 <div class="flex items-center justify-between">
                   <p><span class='font-semibold'>Date:</span> {{ order.date.slice(0,10) }}</p>
                   <p> <span class='font-semibold'>Time:</span> {{ order.date.slice(11,19) }}</p>
                 </div>

                 <div class="my-5">
                  <h1 class="text-lg bg-green-400 text-center">Order Item: <span class='font-semibold'>{{ order.service }}</span></h1>
                  <h1 class="text-md my-3">ID: <span class='font-semibold'>{{ order.id }}</span></h1>
                  <h1 class="text-md my-3">First Name: <span class='font-semibold'>{{ order.firstName }}</span></h1>
                  <h1 class="text-md my-3">Last Name: <span class='font-semibold'>{{ order.lastName }}</span></h1>
                  <h1 class="text-md my-3">Email: <span class='font-semibold'>{{ order.email }}</span></h1>
                  <h1 class="text-md my-3">Phone: <span class='font-semibold'>{{ order.phone }}</span></h1>
                  <h1 class="text-md my-3">Division: <span class='font-semibold'>{{ order.division }}</span></h1>
                  <h1 class="text-md my-3">District: <span class='font-semibold'>{{ order.district }}</span></h1>
                  <h1 class="text-md my-3">Upazila: <span class='font-semibold'>{{ order.upazila }}</span></h1>
                  <h1 class="text-md my-3">Union: <span class='font-semibold'>{{ order.unionn }}</span></h1>
                  <h1 class="text-md my-3">Full Address: <span class='font-semibold'>{{ order.fullAddress }}</span></h1>
                 </div>
            </div>
            <div></div>
            <div></div>
       </div>
            </template>
   
        </DataView>

       
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: "DashboardOrders",

  data() {
    return {
      products: null,
      layout: 'grid',
      orders: []
    }
  },



  mounted() {
  axios.get('http://localhost:3000/api/orders')
    .then(response => {
      
      this.orders = response.data;
      console.log(this.orders);
    })
    .catch(error => {
      // Handle errors
      console.error('Error fetching orders:', error);
    });
  }



}
</script>
<style>
  
</style>