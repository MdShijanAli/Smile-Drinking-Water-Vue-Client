
<template>
  <div class="p-3 sm:p-10 border bg-white">
  

      <DataTable ref="dt" :value="applicaitons" v-model:selection="selectedjob" dataKey="id" 
                :paginator="applicaitons.length > 10? true : false" :rows="10" :filters="filters"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5,10,25]"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products">
                <template #header>
                    <div class="flex flex-wrap gap-5 items-center justify-between">
                        <h4 class="m-0">All Applications</h4>
						<span class="p-input-icon-left flex gap-5">
                            <i class="pi pi-search mr-5" />
                            <InputText v-model="filters['global'].value" class="pl-10 py-2 w-full border" placeholder="Search..." />
                        </span>
					</div>
                </template>

                <Column header="SL" style="min-width:5rem" class="border">
                    <template #body="{ index }">
                    {{ index + 1 }}
                   </template>
                </Column>
               
                <Column field="firstName" header="Name" sortable style="min-width:16rem" class="border">
                  <template #body="{ data }">
                    {{ data.firstName + " " + data.lastName }}
                  </template>
                </Column>
                <Column field="email" sortable header="Email" class="border"></Column>
                <Column field="phone" sortable header="Phone" class="border"></Column>
                <Column field="jobTitle" header="Job Title" sortable class="border">
                  <template #body="{ data }">
                  <Tag class="bg-gray-200 text-primary" :value="data.jobTitle" />
              </template>
              </Column>
                <Column field="applyTime" header="Application Data" sortable class="border">
                  <template #body="{ data }">
                 
                 <span>{{ data.applyTime.slice(0,10) }}</span> <br>
                 <Tag class="bg-gray-200 text-primary" :value="convertToBrowserTimezone(data.applyTime).slice(11,23)"  />
          
           </template>
              </Column>
                <Column header="View" class="border">
                  <template #body="{ data }">
                  <button @click="jobView(data)">
                    <i class="pi pi-eye p-2 rounded-full hover:bg-primary hover:text-white border border-primary" ></i>
                  </button>
              </template>
              </Column>
         
               
               
            </DataTable>


         <Dialog v-model:visible="jobViewDialog" modal header="Applicaiton Details" :style="{ width: '50vw' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            
            <h1 class="text-h2 font-semibold text-center bg-gray-300 p-5">Applicaiton For: {{ selectedjob.jobTitle }}</h1>
            
            <div class="md:px-10 px-5 py-3 md:py-5 rounded-md sm:flex grid items-center justify-between ">
            <div class="">
              <p class="my-3 text-sm lg:text-base sm:leading-6 tracking-wide"><span class="font-semibold">
                  ID: </span>{{selectedjob.id}} </p>
         
              <p class="my-3 text-sm lg:text-base sm:leading-6 tracking-wide"><span
                  class="font-semibold">Name: </span> {{selectedjob.firstName}} {{ selectedjob.lastName }}</p>
              <p class="my-3 text-sm lg:text-base sm:leading-6 tracking-wide"><span class="font-semibold">Email:
                   </span> {{selectedjob.email}}</p>
              <p class="my-3 text-sm lg:text-base sm:leading-6 tracking-wide"><span class="font-semibold">Phone:
                   </span> {{selectedjob.phone}}</p>
              <p class="my-3 text-sm lg:text-base sm:leading-6 tracking-wide"><span class="font-semibold">Division:
                   </span> {{selectedjob.division}}</p>
              <p class="my-3 text-sm lg:text-base sm:leading-6 tracking-wide"><span class="font-semibold">District:
                   </span> {{selectedjob.district}}</p>
              <p class="my-3 text-sm lg:text-base sm:leading-6 tracking-wide"><span class="font-semibold">Upazila:
                   </span> {{selectedjob.upazila}}</p>
              <p class="my-3 text-sm lg:text-base sm:leading-6 tracking-wide"><span class="font-semibold">Union:
                   </span> {{selectedjob.unionn}}</p>
              <p class="my-3 text-sm lg:text-base sm:leading-6 tracking-wide"><span class="font-semibold">Full Address:
                   </span> {{selectedjob.fullAddress}}</p>
           
              
              <p class="my-3 text-sm lg:text-base sm:leading-6 tracking-wide"><span class="font-semibold">Apply
                  Date: </span> {{selectedjob.applyTime.slice(0,10)}} ({{ convertToBrowserTimezone(selectedjob.applyTime).slice(11,23) }})</p>

                  <p><span  class="font-semibold">CV:</span> <a :href="selectedjob.cv" class="text-blue-900 underline" target="_blank">Link</a></p>
            </div>
         
            
          </div>
        </Dialog>
  </div>
</template>

<script>
import { FilterMatchMode } from 'primevue/api';
import { CustomerService } from '../../stores/customerSewrevice';
import axios from 'axios';

export default {
  data() {
    return {
          applicaitons: [],
          selectedjob: {},
          jobViewDialog: false,
          customers: null,
          filters: {},
          
          statuses: ['unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'],
          loading: true
      };
  },
  created() {
        this.initFilters();
    },
  mounted() {
      CustomerService.getCustomersMedium().then((data) => {
          this.customers = this.getCustomers(data);
          this.loading = false;
      });

    this.fetchApplications();
  },


    
  methods: {

    openNew() {
            this.submitted = false;
            this.jobDialog = true;
        },
        hideDialog() {
            this.jobDialog = false;
            this.submitted = false;
    },

      jobView(prod) {
            this.selectedjob = prod
      
            this.jobViewDialog = true;
            console.log(prod)
        },

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
}
,

    
    fetchApplications() {
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
    },


      getCustomers(data) {
          return [...(data || [])].map((d) => {
              d.date = new Date(d.date);

              return d;
          });
      },
      formatDate(value) {
          return value.toLocaleDateString('en-US', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric'
          });
    },


    findIndexById(id) {
            let index = -1;
            for (let i = 0; i < this.applicaitons.length; i++) {
                if (this.applicaitons[i].id === id) {
                    index = i;
                    break;
                }
            }

            return index;
    },

      initFilters() {
            this.filters = {
                'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
            }
        },



  }
};
</script>
<style scoped>

</style>