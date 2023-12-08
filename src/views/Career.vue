<template>
   <BannerSlot bannerTitle="Career"></BannerSlot>


   <div>
      <div class="max-w-7xl mx-auto px-6 md:py-10 pb-10 z-0">
        <div class="mt-10 md:mt-0">
          <h1
            class="lg:text-h1 md:text-4xl sm:text-3xl text-2xl text-center font-semibold">
            Open Positions!!</h1>
        </div>


        

        <!-- <div class="grid grid-cols-1 items-center sm:gap-8 gap-5 mt-10">


      
      <div v-for="job in jobs" :key="job.id" class="shad md:px-10 px-5 py-3 md:py-5 rounded-xl sm:flex grid items-center justify-between">
            <div>
              <p class="my-3 text-sm lg:text-base sm:leading-6 tracking-wide"><span class="font-semibold">Post
                  Name: </span>{{job.title}} </p>
              <p class="my-3 text-sm lg:text-base sm:leading-6 tracking-wide"><span
                  class="font-semibold">Location: </span> {{job.location}}</p>
              <p class="my-3 text-sm lg:text-base sm:leading-6 tracking-wide"><span class="font-semibold">Job
                  Type: </span> {{job.jobType}}</p>
              <p class="my-3 text-sm lg:text-base sm:leading-6 tracking-wide"><span
                  class="font-semibold">Vacancy: </span> {{job.vacancy}}</p>
              <p class="my-3 text-sm lg:text-base sm:leading-6 tracking-wide"><span class="font-semibold">Last Apply
                  Date: </span> {{job.applyLastDate}}</p>
            </div>
            <div class="text-center sm:mt-6 mt-3">
              <button @click="selectJob(job.title)" onclick="career_apply_modal.showModal()"
                class="sm:px-6 px-3 py-1 sm:py-2 sm:text-base text-sm font-semibold bg-primary hover:bg-secondary transitio duration-700 ease-in-out text-white rounded-full">Apply
                Now</button>
            </div>
            
          </div>
          
          

        </div> -->

        <div class=" mt-10">
          <div v-for="job in jobs" :key="job.id" @click="jobView(job)"  class="shad md:px-10 px-5 py-3 my-3 md:py-5 rounded-md sm:flex grid items-center justify-between hover:bg-sky-100">
            <div class="flex gap-5 items-center">
              <p class="my-3 text-sm lg:text-base sm:leading-6 tracking-wide"><span class="font-semibold">
                  ID: </span>{{job.id}} </p>
              <p class="my-3 text-sm lg:text-base sm:leading-6 tracking-wide"><span class="font-semibold">Post
                  Name: </span>{{job.title}} </p>
         

              <p class="my-3 text-sm lg:text-base sm:leading-6 tracking-wide"><span class="font-semibold">Job Post Date: </span> {{job.jobPostTime.slice(0,10)}}</p>
              <p class="my-3 text-sm lg:text-base sm:leading-6 tracking-wide"><span class="font-semibold">Last Apply
                  Date: </span> {{job.applyLastDate.slice(0,10)}}</p>
            </div>
      
            
          </div>

          <Dialog v-model:visible="jobViewDialog" modal header="Job Details" :style="{ width: '50vw' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
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


                  <div class="text-right sm:mt-6 mt-3">
                    <button @click="selectJob(job.title)" onclick="career_apply_modal.showModal()"
                      class="sm:px-6 px-3 py-1 sm:py-2 sm:text-base text-sm font-semibold bg-primary hover:bg-secondary transitio duration-700 ease-in-out text-white rounded-sm">Apply
                      Now</button>
                </div>
            </div>
         
            
          </div>
        </Dialog>
        
        </div>
       
 

      </div>
    </div>


    <!-- Application Modal -->

    <dialog id="career_apply_modal" class="modal">
  <div
  class="modal-box w-11/12 max-w-2xl p-0 rounded-sm">
  <div class=" border-b  py-3 px-4">
    <h1 class="md:text-h2 text-center text-xl sm:text-2xl font-bold text-primary">Application Form</h1>
  </div>

  <form @submit.prevent="submitForm">
  <div class="p-4 overflow-y-auto">
  <div>
  <input  type="text" disabled :value="'Application For ' + selectedJobTitle"
  class="peer py-3 px-4 ps-11 block w-full bg-gray-200 text-center rounded-sm text-md cursor-not-allowed"
  >
  </div>
    <div class="sm:flex grid gap-5 items-center w-full my-5">
      <div class="relative sm:w-1/2 w-full">
        <input v-model="firstName" type="text" required
          class="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-sm text-sm focus:border-primary  focus:ring-primary focus:outline-primary  disabled:opacity-50 disabled:pointer-events-none "
          placeholder="Enter First Name">
        <div
          class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
          <svg class="flex-shrink-0 w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24"
            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
      </div>

      <div class="relative sm:w-1/2 w-full">
        <input v-model="lastName" type="text" required
          class="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-sm text-sm focus:border-primary  focus:ring-primary focus:outline-primary  disabled:opacity-50 disabled:pointer-events-none "
          placeholder="Enter Last Name">
        <div
          class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
          <svg class="flex-shrink-0 w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24"
            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
      </div>
    </div>
    <div class="sm:flex grid gap-5 items-center w-full my-5">
      <div class="relative sm:w-1/2 w-full">
        <input v-model="email" type="email" required
          class="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-sm text-sm focus:border-primary focus:ring-primary focus:outline-primary disabled:opacity-50 disabled:pointer-events-none "
          placeholder="Enter Email">
        <div
          class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
          <svg class="fill-gray-500" xmlns="http://www.w3.org/2000/svg" height="1em"
            viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
          </svg>
        </div>
      </div>

      <div class="relative sm:w-1/2 w-full">
        <input v-model="phone" type="tel" required
          class="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-sm text-sm focus:border-primary focus:ring-primary focus:outline-primary disabled:opacity-50 disabled:pointer-events-none "
          placeholder="Enter Phone">
        <div
          class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="flex-shrink-0 w-4 h-4 text-gray-500">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
        </div>
      </div>
    </div>

 
    <AddressComponent 
            @division-selected="handleDivisionSelected" 
            @district-selected="handleDistrictSelected" 
            @upazila-selected="handleUpazilaSelected" 
            @union-selected="handleUnionSelected"
            />



    <div class="relative my-5">
      <div class="relative">
        <input required v-model="fullAddress" type="text"
          class="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-sm text-sm focus:border-primary focus:ring-primary focus:outline-primary disabled:opacity-50 disabled:pointer-events-none "
          placeholder="Enter Full Address">
        <div
          class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="flex-shrink-0 w-4 h-4 text-gray-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>

        </div>
      </div>
    </div>


    <div class="w-full my-5">
      <h1 class="text-xl font-bold mt-5">Pest your Curriculum vitae drive link</h1>
      <p class="my-3">Cv is mandatory.</p>
      <label for="file-input" class="sr-only">Choose file</label>
      <input v-model="cv" type="text" required
          class="peer py-3 px-4 block w-full bg-gray-100 border-transparent rounded-sm text-sm focus:border-primary  focus:ring-primary focus:outline-primary  disabled:opacity-50 disabled:pointer-events-none "
          placeholder="Enter Your CV Drive Link">
      
    </div>

    <div class="flex my-5">
      <input required type="checkbox"
        class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none  "
        id="confirm">
      <label for="confirm" class="text-sm text-gray-500 ms-3">I have read and I accept
        the <a class="underline hover:text-primary" href="./privacy-policy.html">Privacy Policy</a></label>
    </div>
    <div class="flex my-5">
      <input required type="checkbox"
        class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
        id="confirm2">
      <label for="confirm2" class="text-sm text-gray-500 ms-3 ">Yes, Roman Water can add
        me to the talent pool and contact me about future job opportunities</label>
    </div>

  </div>
  <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t ">

    <div class="modal-action m-0">
      <form method="dialog">
        <!-- if there is a button, it will close the modal -->
        <button class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-sm border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">Close</button>
      </form>
    </div>
    <div>
      <button type="submit"
      class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-sm border border-transparent bg-primary text-white hover:bg-secondary disabled:opacity-50 disabled:pointer-events-none ">
      Submit Application
    </button>
    </div>
  </div>
  </form>
</div>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
 
</dialog>

</template>
<script>
import axios from 'axios';
import AddressComponent from "../components/AddressComponent.vue";
import BannerSlot from "../components/BannerSlot.vue"

export default{
name: "Career",
components: { BannerSlot, AddressComponent }, 

  data() {
    return {
      selectedJob: {},
      selectedJobTitle: "",
      jobViewDialog: false,
      jobs: [],
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      fullAddress: '',
      division: "",
      district: "",
      upazila: "",
      union: "",
      cv: "",
      selectJob: ""


  
    }
  },

  mounted() {
    axios.get('https://server.zealtechweb.com/api/jobs')
    .then(response => {
      // Access the data property of the response
      this.jobs = response.data;
      console.log(data);
    })
    .catch(error => {
      // Handle errors
      console.error('Error fetching orders:', error);
    });
  },

  methods: {

    handleDivisionSelected(divisionName) {
      this.division = divisionName
    },
    handleDistrictSelected(districtName) {
      this.district = districtName
    },
    handleUpazilaSelected(upazilaName) {
      this.upazila = upazilaName
    },
    handleUnionSelected(unionName) {
      this.union = unionName
    },



    submitForm() {

      console.log(this.selectedJobTitle)

const applicatiantDetails= {
  firstName: this.firstName,
  lastName: this.lastName,
  email: this.email,
  phone: this.phone,
  fullAddress: this.fullAddress,
  division: this.division,
  district: this.district,
  upazila: this.upazila,
  unionn: this.union,
  cv: this.cv,
  jobTitle: this.selectedJobTitle

}

console.log(applicatiantDetails)



fetch('https://server.zealtechweb.com/api/application', {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(applicatiantDetails)
})
  .then(response => {
    if (!response.ok) {
      this.$toast.add({ severity: 'error', summary: 'Error', detail: 'Failed to Recieve Your Applicaiton,, Try Again later', life: 3000 });
      throw new Error('Failed to insert Application data');
    }
    return response.text();
  })
  .then(data => {
  //   console.log('Product data inserted successfully:', data);
    this.$toast.add({ severity: 'success', summary: 'Success', detail: 'We Have Revieved Your Application', life: 3000 });
    this.resetFormData()
    return new Promise(resolve => setTimeout(resolve, 1000)); 
  })
  .then(() => {

    window.location.reload();
  })
  .catch(error => {
    this.$toast.add({ severity: 'error', summary: 'Error', detail: 'Failed to Recieve Your Applicaiton', life: 3000 });
    console.error('Error inserting Application data:', error);
  });
  
 
},


resetFormData() {
// Reset all data properties to their initial values
this.firstName = '';
this.lastName = '';
this.email = '';
this.phone = '';
this.fullAddress = '';
this.service = '';
this.division = '';
this.district = '';
this.upazila = '';
this.union = '';
},





       jobView(prod) {
         this.selectedjob = prod
         this.selectedJobTitle=prod.title
      
            this.jobViewDialog = true;
            console.log(prod)
        },
 
    },

}
</script>
<style>
   .shad {
        box-shadow: 0px 8px 16px 0px rgb(17 34 139 / 23%);
      }
</style>