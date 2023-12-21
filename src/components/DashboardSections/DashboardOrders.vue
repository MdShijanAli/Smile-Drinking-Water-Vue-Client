<template>
  <div>
    <div class="p-3 sm:p-10 border bg-white">
      <h1 class="text-h1 font-semibold text-center py-10">All Orders</h1>

      <DataTable
        v-model:expandedRows="expandedRows"
        :value="orders"
        dataKey="id"
        tableStyle="min-width: 60rem"
        :loading="loading"
        :paginator="orders.length > 10 ? true : false"
        :rows="10"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[5, 10, 25]"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
      >
        <Column expander style="width: 5rem" class="border" />
        <Column header="SL" class="border">
          <template #body="{ index }">
            {{ index + 1 }}
          </template>
        </Column>
        <Column style="width: 20%" header="Name" class="border">
          <template #body="{ data }"> {{ data.firstName }} {{ data.lastName }} </template>
        </Column>

        <Column field="Order" header="Order Item" class="border">
          <template #body="{ data }">
            {{ data.service }}
          </template>
        </Column>
        <Column field="Order" header="Order Date" class="border">
          <template #body="{ data }">
            <span>{{ data.date.slice(0, 10) }}</span> <br />
            <Tag
              class="bg-gray-200 text-primary"
              :value="convertToBrowserTimezone(data.date).slice(11, 23)"
            />
          </template>
        </Column>
        <Column header="Update Date" class="border">
          <template #body="{ data }">
            <span>{{ data.updated_at.slice(0, 10) }}</span> <br />
            <Tag
              class="bg-gray-200 text-primary"
              :value="convertToBrowserTimezone(data.updated_at).slice(11, 23)"
            />
          </template>
        </Column>

        <Column header="Status" style="width: 5%" class="border">
          <template #body="data">
            <Tag :class="{
              'bg-green-600 text-white': data.data.status === 'Completed',
              'bg-red-600 text-white': data.data.status === 'Cancelled',
              '': data.data.status === 'pending'
            }" :value="data.data.status" />
          </template>
        </Column>

        <template #expansion="slotProps">
          <div class="p-5 border">
            <h5 class="bg-gray-200 p-3">
              Orders Details:
              <span class="font-semibold">{{ slotProps.data.service }}</span>
            </h5>

            <p class="text-md my-3">
              ID: <span class="font-semibold" >{{ slotProps.data.id }}</span>
            </p>
            <p class="text-md my-3">
              First Name:
              <span class="font-semibold">{{ slotProps.data.firstName }}</span>
            </p>
            <p class="text-md my-3">
              Last Name: <span class="font-semibold">{{ slotProps.data.lastName }}</span>
            </p>
            <p class="text-md my-3">
              Email: <span class="font-semibold">{{ slotProps.data.email }}</span>
            </p>
            <p class="text-md my-3">
              Phone: <span class="font-semibold">{{ slotProps.data.phone }}</span>
            </p>
            <p class="text-md my-3">
              Division: <span class="font-semibold">{{ slotProps.data.division }}</span>
            </p>
            <p class="text-md my-3">
              District: <span class="font-semibold">{{ slotProps.data.district }}</span>
            </p>
            <p class="text-md my-3">
              Upazila: <span class="font-semibold">{{ slotProps.data.upazila }}</span>
            </p>
            <p class="text-md my-3">
              Union: <span class="font-semibold">{{ slotProps.data.unionn }}</span>
            </p>
            <p class="text-md my-3">
              Full Address:
              <span class="font-semibold">{{ slotProps.data.fullAddress }}</span>
            </p>
            <p class="text-md my-3">
              Order Date:
              <span class="font-semibold"
                >{{ slotProps.data.date.slice(0, 10) }} ({{
                  convertToBrowserTimezone(slotProps.data.date).slice(11, 23)
                }})</span
              >
            </p>

            <div class="mt-10 w-52">
          
              <Dropdown
                @change="changeStatus($event, slotProps.data.id)"
                v-model="selectedStatus"
                :options="items"
                optionLabel="name"
                placeholder="Change Status"
                class="w-full border border-primary"
              >
                <template #value="slotProps">
                  <div v-if="slotProps.value" class="flex items-center gap-5">
                    <i :class="slotProps.value.icon"></i>
                    <div>{{ slotProps.value.label }}</div>
                  </div>
                  <span v-else>
                    {{ slotProps.placeholder }}
                  </span>
                </template>
                <template #option="slotProps">
                  <div class="flex items-center gap-5">
                    <i :class="slotProps.option.icon"></i>
                    <div>{{ slotProps.option.label }}</div>
                  </div>
                </template>
              </Dropdown>
            </div>
          </div>
        </template>
      </DataTable>
      <Toast />
    </div>
  </div>
</template>
<script>
import { ProductService } from "../../stores/productService";
import axios from "axios";
export default {
  name: "DashboardOrders",

  data() {
    return {
      products: null,
      layout: "grid",
      orders: [],
      expandedRows: [],
      editingRows: [],
      selectedStatus: null,
      items: [
        {
          label: "Completed",
          icon: "pi pi-check",
        },
        {
          label: "Cancelled",
          icon: "pi pi-times",
        },
      ],
    };
  },

  mounted() {
    ProductService.getProductsWithOrdersSmall().then((data) => (this.products = data));
    this.fetchOrders()
  },
  methods: {

    fetchOrders() {
      axios
      .get("https://server.zealtechweb.com/api/orders")
      .then((response) => {
        this.orders = response.data;
        // console.log(this.orders);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching orders:", error);
      });
    },


    changeStatus(e, id) {
      this.selectedStatus = e.value;
      const status = e.value.label;

      axios.put(`https://server.zealtechweb.com/api/order/${id}`, {
        status: status
      })
        .then(res => {
          this.$toast.add({ severity: 'success', summary: 'Completed', detail: 'Order Completed Successfully', life: 3000 });
          this.fetchOrders()
        })
        .catch(err => {
          this.$toast.add({ severity: 'error', summary: 'Cancelled', detail: 'Order Cancelled Successfully', life: 3000 });
        console.log('Error Updating Status', err.message)
      })
    },

    convertToBrowserTimezone(utcTimestamp) {
      const utcDate = new Date(utcTimestamp);

      // Convert to the browser's timezone
      const browserTimezoneDate = new Intl.DateTimeFormat(undefined, {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short",
      }).format(utcDate);

      return browserTimezoneDate;
    },


  },
};
</script>
<style></style>
