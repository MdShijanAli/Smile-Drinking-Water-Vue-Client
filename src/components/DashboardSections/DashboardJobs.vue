<template>
  <div>
    <div>
      <div class="p-10 card">
        <div class="mt-10 md:mt-0">
          <h1
            class="lg:text-h1 md:text-4xl sm:text-3xl text-2xl text-center font-semibold">
          All Jobs</h1>
        </div>

        <div>
          <Button label="New" icon="pi pi-plus" severity="success" class="mr-2 bg-green-500 px-4 py-2 text-white hover:bg-green-700 transition duration-500 ease-in-out" @click="openNew" />
                    
        </div>

        <div>
          <Dialog v-model:visible="jobDialog" header="Product Details" :modal="true" class="p-fluid w-1/2">
            <Toast />
            
        <form action="">
            <div class="mb-3">
                <div class="relative  w-full">
                  <label for="jobName" class="font-semibold">Job Post Name</label>
                <input v-model="jobPostName" type="text" id="jobName"
                  class="peer py-3 mt-3 px-4 ps-5 block w-full bg-gray-100 border-transparent rounded-sm text-sm focus:border-primary  focus:ring-primary focus:outline-primary  disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Enter Job Post Name">
              </div>
            </div>
            <div class="mb-3">
                <div class="relative  w-full">
                  <label for="jobsec" class="font-semibold">Job Description</label>
                  <Editor v-model="jobDescription" editorStyle="height: 320px" id="jobsec" class="mt-3"/>

              </div>
            </div>

            <div class="flex gap-5 mt-5 items-center">
              <div class="relative sm:w-1/2 w-full">
                  <label for="jobLocation" class="font-semibold">Job Location</label>
                <input v-model="jobLocation" type="text" id="jobLocation"
                  class="peer py-3 mt-3 px-4 ps-5 block w-full bg-gray-100 border-transparent rounded-sm text-sm focus:border-primary  focus:ring-primary focus:outline-primary  disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Enter Job Location">
              </div>

              <div class="relative sm:w-1/2 w-full">
                  <label for="jobType" class="font-semibold">Job Type</label>
                <input v-model="jobType" type="text" id="jobType"
                  class="peer py-3 mt-3 px-4 ps-5 block w-full bg-gray-100 border-transparent rounded-sm text-sm focus:border-primary  focus:ring-primary focus:outline-primary  disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Enter Job Type">
              </div>
            </div>

            <div class="flex gap-5 mt-5 items-center">
              <div class="relative sm:w-1/2 w-full">
                  <label for="jobVacancy" class="font-semibold">Job Vacancy</label>
                <input v-model="jobVacancy" type="number" id="jobVacancy"
                  class="peer py-3 mt-3 px-4 ps-5 block w-full bg-gray-100 border-transparent rounded-sm text-sm focus:border-primary  focus:ring-primary focus:outline-primary  disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Enter Job vacancy">
              </div>

              <div class="relative sm:w-1/2 w-full">
                  <label for="latDate" class="font-semibold">Apply Last Date</label>
                <input v-model="applyLastDate" type="date" id="latDate"
                  class="peer py-3 mt-3 px-4 ps-5 block w-full bg-gray-100 border-transparent rounded-sm text-sm focus:border-primary  focus:ring-primary focus:outline-primary  disabled:opacity-50 disabled:pointer-events-none"
                 >
              </div>
            </div>


          
                <div class="flex gap-5 mt-20 justify-end w-1/2 mx-auto">
                <Button label="Cancel" icon="pi pi-times" text class="bg-red-600 text-white px-5 py-2.5" @click="hideDialog"/>
                <Button label="Post" icon="pi pi-check" text class="bg-green-600 text-white px-5 py-2.5" @click="uploadJobPost" />
                </div>
        
        </form>   
        
        </Dialog>
        </div>

        <div class="mt-10">
         


          <DataTable ref="dt" :value="jobs" v-model:selection="selectedjob" dataKey="id" 
                :paginator="jobs.length > 10? true : false" :rows="10" :filters="filters"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5,10,25]"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products">
                <template #header>
                    <div class="flex flex-wrap items-center justify-between">
                        <h4 class="m-0">Manage Products</h4>
						<span class="p-input-icon-left flex gap-5">
                            <i class="pi pi-search mr-5" />
                            <InputText v-model="filters['global'].value" class="pl-10 py-2 border" placeholder="Search..." />
                        </span>
					</div>
                </template>

                
                <Column header="SL" style="min-width:2rem" class="border">
                    <template #body="{ index }">
                    {{ index + 1 }}
                   </template>
                </Column>
                <Column field="title" header="Job Title" sortable style="min-width:16rem" class="border"></Column>
                <Column field="vacancy" header="Vacancy" sortable style="min-width:5rem" class="border"></Column>
                <Column field="jobPostTime" header="Job Post Date" sortable style="min-width:10rem" class="border">
                     <template #body="slotProps">
                      <div>
                        <p><span class='font-semibold'>{{ slotProps.data.jobPostTime.slice(0,10) }}</span></p>
                      </div>
                     </template>
                </Column>
                <Column field="applyLastDate" header="Apply Last Date" sortable style="min-width:10rem" class="border">
                     <template #body="slotProps">
                      <div>
                        <p><span class='font-semibold'>{{ slotProps.data.applyLastDate.slice(0,10) }}</span></p>
                      </div>
                     </template>
                </Column>
                <Column header="View"  style="min-width:5rem" class="border">
                     <template #body="slotProps">
                      <div>
                        <Button @click="jobView(slotProps.data)" icon="pi pi-eye" outlined rounded class="mr-2 border border-primary text-primary hover:bg-primary transition duration-500 ease-in-out hover:text-white"  />
                      </div>
                     </template>
                </Column>
        
      
            </DataTable>






          <Dialog v-model:visible="jobViewDialog" modal header="Job Details" :style="{ width: '50vw' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            
            <div class="text-right z-[999]">
              <Button icon="pi pi-pencil" outlined rounded class="mr-2 border border-[#1EBC87] hover:bg-[#1EBC87] hover:text-white transition duration-500 ease-in-out text-[#1EBC87]" @click="editProduct(selectedjob)" />
              <Button icon="pi pi-trash" outlined rounded class="border text-red-600 border-red-600 hover:bg-red-600 hover:text-white transition duration-500 ease-out"  @click="confirmDeleteProduct(selectedjob)"/>
            </div>
            <div class="md:px-10 px-5 py-3 md:py-5 rounded-md sm:flex grid items-center justify-between ">
            <div class="">
              <p class="my-3 text-sm lg:text-base sm:leading-6 tracking-wide"><span class="font-semibold">
                  ID: </span>{{selectedjob.id}} </p>
              <p class="my-3 text-sm lg:text-base sm:leading-6 tracking-wide"><span class="font-semibold">Post
                  Name: </span>{{selectedjob.title}} </p>
              <p class="my-3 text-sm lg:text-base sm:leading-6 tracking-wide"><span
                  class="font-semibold">Location: </span> {{selectedjob.location}}</p>
              <p class="my-3 text-sm lg:text-base sm:leading-6 tracking-wide"><span class="font-semibold">Job
                  Type: </span> {{selectedjob.jobType}}</p>
              <p class="my-3 text-sm lg:text-base sm:leading-6 tracking-wide"><span
                  class="font-semibold">Vacancy: </span> {{selectedjob.vacancy}}</p>

              <p class="my-3 text-sm lg:text-base sm:leading-6 tracking-wide"><span class="font-semibold">Job Post Date: </span> {{selectedjob.jobPostTime.slice(0,10)}}</p>
              <p class="my-3 text-sm lg:text-base sm:leading-6 tracking-wide"><span class="font-semibold">Last Apply
                  Date: </span> {{selectedjob.applyLastDate.slice(0,10)}}</p>

                  <p><span  class="font-semibold">Description:</span> <label v-html="selectedjob.description"></label></p>
            </div>
         
            
          </div>
        </Dialog>

            <Dialog v-model:visible="productEditDialog" header="Job Details" :modal="true" class="p-fluid w-1/2">
            <Toast />
            
        <form action="">
            <div class="mb-3">
                <div class="relative  w-full">
                  <label for="jobName" class="font-semibold">Job Post Name</label>
                <input v-model="selectedjob.title" type="text" id="jobName"
                  class="peer py-3 mt-3 px-4 ps-5 block w-full bg-gray-100 border-transparent rounded-sm text-sm focus:border-primary  focus:ring-primary focus:outline-primary  disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Enter Job Post Name">
              </div>
            </div>
            <div class="mb-3">
                <div class="relative  w-full">
                  <label for="jobsec" class="font-semibold">Job Description</label>
                  <Editor v-model="selectedjob.description" editorStyle="height: 320px" id="jobsec" class="mt-3"/>

              </div>
            </div>

            <div class="flex gap-5 mt-5 items-center">
              <div class="relative sm:w-1/2 w-full">
                  <label for="jobLocation" class="font-semibold">Job Location</label>
                <input v-model="selectedjob.location" type="text" id="jobLocation"
                  class="peer py-3 mt-3 px-4 ps-5 block w-full bg-gray-100 border-transparent rounded-sm text-sm focus:border-primary  focus:ring-primary focus:outline-primary  disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Enter Job Location">
              </div>

              <div class="relative sm:w-1/2 w-full">
                  <label for="jobType" class="font-semibold">Job Type</label>
                <input v-model="selectedjob.jobType" type="text" id="jobType"
                  class="peer py-3 mt-3 px-4 ps-5 block w-full bg-gray-100 border-transparent rounded-sm text-sm focus:border-primary  focus:ring-primary focus:outline-primary  disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Enter Job Type">
              </div>
            </div>

            <div class="flex gap-5 mt-5 items-center">
              <div class="relative sm:w-1/2 w-full">
                  <label for="jobVacancy" class="font-semibold">Job Vacancy</label>
                <input v-model="selectedjob.vacancy" type="number" id="jobVacancy"
                  class="peer py-3 mt-3 px-4 ps-5 block w-full bg-gray-100 border-transparent rounded-sm text-sm focus:border-primary  focus:ring-primary focus:outline-primary  disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Enter Job vacancy">
              </div>

              <div class="relative sm:w-1/2 w-full">
                  <label for="latDate" class="font-semibold">Apply Last Date</label>
                <input v-model="selectedjob.applyLastDate"  type="date" id="latDate" required
                  class="peer py-3 mt-3 px-4 ps-5 block w-full bg-gray-100 border-transparent rounded-sm text-sm focus:border-primary  focus:ring-primary focus:outline-primary  disabled:opacity-50 disabled:pointer-events-none"
                 >
              </div>
            </div>


          
                <div class="flex gap-5 mt-20 justify-end w-1/2 mx-auto">
                <Button label="Cancel" icon="pi pi-times" text class="bg-red-600 text-white px-5 py-2.5" @click="productEditDialog = false"/>
                <Button label="Update" icon="pi pi-check" text class="bg-green-600 text-white px-5 py-2.5" @click="updateJobPost(selectedjob)" />
                </div>
        
        </form>   
        
        </Dialog>


        <Dialog v-model:visible="deleteProductDialog" :style="{width: '500px'}" header="Confirm" :modal="true">
            <Toast />
            <div class="flex items-center gap-5">
                <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                <span v-if="product">Are you sure you want to delete <b>{{selectedjob.title}}</b>?</span>
            </div>
            <div class="flex gap-5 mt-10 justify-end">
                <Button label="No" icon="pi pi-times" text class="bg-black text-white px-5 py-2.5" @click="deleteProductDialog = false"/>
                <Button label="Yes" icon="pi pi-check" text class="bg-red-600 text-white px-5 py-2.5" @click="deleteProduct(selectedjob.id)" />
            </div>
        </Dialog>
        
        </div>

     



 

       
 

      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { FilterMatchMode } from 'primevue/api';

export default {
  name: "Jobs",

  data() {
    return {
      productEditDialog: false,
      selectedjob: {},
      jobViewDialog: false,
      jobDialog: false,
      submitted: false,
      jobDescription: "",
      jobPostName: "",
      jobLocation: "",
      jobVacancy: "",
      applyLastDate: "",
      jobType: "",
      jobs: [],
      product: {},
      deleteProductDialog: false,
      filters: {},
    }
  },
  created() {
        this.initFilters();
    },

 
  mounted() {
  this.fetchJobs()
  },

  methods: {
   
    confirmDeleteProduct(product) {
            this.product = product;
            this.deleteProductDialog = true;
            console.log(product)
    },
    deleteProduct(id) {
            console.log(id);
    // Call the delete function with the product ID
            this.deleteProductFunction(id);
            
            
        },
     // Delete Single Products
     async deleteProductFunction(jobID) {
            try {
            const response = await fetch(`https://server.zealtechweb.com/api/job/${jobID}`, {
                method: 'DELETE',
            });

                if (response.ok) {
                    this.$toast.add({ severity: 'success', summary: 'Successful', detail: `Job with ID ${jobID} deleted successfully`, life: 3000 });
                    await  new Promise(resolve => setTimeout(resolve, 1000)); 
                    this.product = {};
                    
            } else {
                console.error('Failed to delete Job');
            }
            } catch (error) {
            console.error('Error deleting Job:', error);
            }
            finally {
                // Call fetchProducts regardless of success or error
              this.deleteProductDialog = false;
              this.productEditDialog = false;
              this.jobDialog = false;
              
                this.fetchJobs();
            }

        },
    editProduct(prod) {
            this.product = prod
      
            this.productEditDialog = true;
            console.log(prod)
        },

      jobView(prod) {
            this.selectedjob = prod
      
            this.jobViewDialog = true;
            console.log(prod)
        },


    fetchJobs() {
      axios.get('https://server.zealtechweb.com/api/jobs')
    .then(response => {
      // Access the data property of the response
      this.jobs = response.data;
      // console.log(this.jobs);
    })
    .catch(error => {
      // Handle errors
      console.error('Error fetching orders:', error);
    });
    },
    openNew() {
            this.submitted = false;
            this.jobDialog = true;
        },
        hideDialog() {
            this.jobDialog = false;
            this.submitted = false;
    },

    updateJobPost(job) {
      const updateJob = {
        title: job.title,
        description: job.description,
        location: job.location,
        jobType: job.jobType,
        vacancy: job.vacancy,
        applyLastDate: job.applyLastDate,
      }

      console.log(updateJob)

      fetch(`https://server.zealtechweb.com/api/job/${job.id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateJob)
      })
        .then(response => {
          if (!response.ok) {
            this.$toast.add({ severity: 'error', summary: 'Error', detail: 'Failed to Update Job data', life: 3000 });
            throw new Error('Failed to Update Job data');
          }
          return response.text();
        })
        .then(data => {
        //   console.log('Product data inserted successfully:', data);
          this.$toast.add({ severity: 'success', summary: 'Success', detail: 'Job Successfully Update Done.', life: 3000 });
          return  new Promise(resolve => setTimeout(resolve, 1000)); 
        })
        .then(() => {
          this.fetchJobs()
          this.productEditDialog = false;
          
        })
        .catch(error => {
        this.$toast.add({ severity: 'error', summary: 'Error', detail: 'Error Updating Job data', life: 3000 });
        console.error('Error Updating Job data:', error);
      });

    },


    uploadJobPost() {
      this.submitted = true;
      

      const jobDetails = {
        title: this.jobPostName,
        description: this.jobDescription,
        location: this.jobLocation,
        jobType: this.jobType,
        vacancy: this.jobVacancy,
        applyLastDate: this.applyLastDate,
      }

      console.log(jobDetails)

      fetch('https://server.zealtechweb.com/api/job', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(jobDetails)
      })
        .then(response => {
          if (!response.ok) {
            this.$toast.add({ severity: 'error', summary: 'Error', detail: 'Failed to insert Job data', life: 3000 });
            throw new Error('Failed to insert Job data');
          }
          return response.text();
        })
        .then(data => {
        //   console.log('Product data inserted successfully:', data);
          this.$toast.add({ severity: 'success', summary: 'Success', detail: 'Job Successfully Post Done.', life: 3000 });
          return  new Promise(resolve => setTimeout(resolve, 1000)); 
        })
        .then(() => {
          this.resetFormData()
          this.fetchJobs()
          this.jobDialog = false;
          
        })
        .catch(error => {
        this.$toast.add({ severity: 'error', summary: 'Error', detail: 'Error inserting Job data', life: 3000 });
        console.error('Error inserting Job data:', error);
      });

      
    },


    

resetFormData() {
// Reset all data properties to their initial values
this.title = '';
this.description = '';
this.location = '';
this.jobType = '';
this.vacancy = '';
this.applyLastDate = '';

    },


    initFilters() {
            this.filters = {
                'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
            }
        },

  }
}
</script>
<style>
  
</style>