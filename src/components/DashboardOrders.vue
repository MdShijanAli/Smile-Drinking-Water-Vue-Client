<template>
  <div>
    <div class="p-10" >
  
        <h1 class="text-h1 font-semibold text-center py-10">All Orders</h1>

       
        <DataTable :editingRows="editingRows" editMode="row" filterDisplay="row" class="" @row-edit-save="onRowEditSave" v-model:expandedRows="expandedRows" :value="orders" dataKey="id"
                @rowExpand="onRowExpand" @rowCollapse="onRowCollapse" tableStyle="min-width: 60rem"
                :loading="loading"
              :paginator="orders.length>10 ? true : false" :rows="10"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5,10,25]"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products">
         
            <Column expander style="width: 5rem" class="border" />
            <Column field="firstName" header="SL" class="border">
              <template #body="{ index }">
                    {{ index + 1 }}
                </template>
            </Column>
            <Column field="firstName" header="Name" class="border">
              <template #body="{ data }">
                    {{ data.firstName }}
                </template>
            </Column>
           
   
            <Column field="Order" header="Order Item" class="border">
              <template #body="{ data }">
                    {{ data.service }}
                </template>
            </Column> 
            <Column field="Order" header="Order Date" class="border">
              <template #body="{ data }">
                <span>{{ data.date.slice(0,10) }}</span> <br>
                <Tag class="bg-gray-200 text-primary" :value="convertToBrowserTimezone(data.date).slice(11,23)" />
                </template>
            </Column>
         

            <Column header="Status" style="width: 20%" class="border">
                <template #editor="{ data }">
                  <div class="card flex justify-content-center">
                      <Toast />
                      <SplitButton label="Save" icon="pi pi-plus" @click="save" :model="items" />
                  </div>
                </template>
                <template #body="slotProps">
                    <Tag :value="slotProps.data.value" />
                </template>
            </Column>


            <template #expansion="slotProps">
                <div class="p-5 border">
                    <h5 class="bg-gray-200 p-3">Orders Details: <span class="font-semibold">{{ slotProps.data.service }}</span></h5>
  
                              <h1 class="text-md my-3">ID: <span class='font-semibold'>{{ slotProps.data.id }}</span></h1>
                              <h1 class="text-md my-3">First Name: <span class='font-semibold'>{{ slotProps.data.firstName }}</span></h1>
                              <h1 class="text-md my-3">Last Name: <span class='font-semibold'>{{ slotProps.data.lastName }}</span></h1>
                              <h1 class="text-md my-3">Email: <span class='font-semibold'>{{ slotProps.data.email }}</span></h1>
                              <h1 class="text-md my-3">Phone: <span class='font-semibold'>{{ slotProps.data.phone }}</span></h1>
                              <h1 class="text-md my-3">Division: <span class='font-semibold'>{{ slotProps.data.division }}</span></h1>
                              <h1 class="text-md my-3">District: <span class='font-semibold'>{{ slotProps.data.district }}</span></h1>
                              <h1 class="text-md my-3">Upazila: <span class='font-semibold'>{{ slotProps.data.upazila }}</span></h1>
                              <h1 class="text-md my-3">Union: <span class='font-semibold'>{{ slotProps.data.unionn }}</span></h1>
                              <h1 class="text-md my-3">Full Address: <span class='font-semibold'>{{ slotProps.data.fullAddress }}</span></h1>
                              <h1 class="text-md my-3">Order Date: <span class='font-semibold'>{{ slotProps.data.date.slice(0,10) }} ({{ convertToBrowserTimezone(slotProps.data.date).slice(11,23) }})</span></h1>
               
            
                  
                </div>
            </template>
        </DataTable>
        <Toast />



    </div>
  </div>
</template>
<script>
import { ProductService } from '../stores/productService';
import axios from 'axios';
export default {
  name: "DashboardOrders",

  data() {
    return {
      products: null,
      layout: 'grid',
      orders: [],
      expandedRows: [],
      editingRows: [],
      statuses: [
                { label: 'In Stock', value: 'Pending' },
                { label: 'Low Stock', value: 'Cancel' },
                { label: 'Out of Stock', value: 'Complete' }
      ],
    }
  },



  mounted() {
    ProductService.getProductsWithOrdersSmall().then((data) => (this.products = data));

    axios.get('https://server.zealtechweb.com/api/orders')
    .then(response => {
      
      this.orders = response.data;
      console.log(this.orders);
    })
    .catch(error => {
      // Handle errors
      console.error('Error fetching orders:', error);
    });
    },
  methods: {

    convertToBrowserTimezone(utcTimestamp) {
  const utcDate = new Date(utcTimestamp);

  // Convert to the browser's timezone
  const browserTimezoneDate = new Intl.DateTimeFormat(undefined, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short',
  }).format(utcDate);

  return browserTimezoneDate;
},

    getStatusLabel(status) {
            switch (status) {
                case 'INSTOCK':
                    return 'success';

                case 'LOWSTOCK':
                    return 'warning';

                case 'OUTOFSTOCK':
                    return 'danger';

                default:
                    return null;
            }
        },
       
        getSeverity(product) {
            switch (product.inventoryStatus) {
                case 'INSTOCK':
                    return 'success';

                case 'LOWSTOCK':
                    return 'warning';

                case 'OUTOFSTOCK':
                    return 'danger';

                default:
                    return null;
            }
        },
        getOrderSeverity(order) {
            switch (order.status) {
                case 'DELIVERED':
                    return 'success';

                case 'CANCELLED':
                    return 'danger';

                case 'PENDING':
                    return 'warning';

                case 'RETURNED':
                    return 'info';

                default:
                    return null;
            }
        }
    }
};

</script>
<style scoped>
  @import "primeflex/primeflex.css";
</style>