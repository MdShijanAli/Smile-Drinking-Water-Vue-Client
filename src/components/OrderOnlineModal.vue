<template>
  <dialog :id="modal" class="modal">
  <div class="modal-box rounded-sm p-0">
    <div class=" border-b  py-3 px-4">
      <h1 class="md:text-h2 text-center text-xl sm:text-2xl font-bold text-primary">Order Online</h1>
    </div>

    <div class="">
      <!-- Form -->
      <form @submit.prevent="submitForm">
        <div class="grid gap-y-4 p-4">
          <!-- Form Group -->
          <div class="overflow-y-auto">
            <div class="sm:flex grid gap-5 items-center w-full">
              <div class="relative sm:w-1/2 w-full">
                <input v-model="firstName" type="text" required
                  class="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-sm text-sm focus:border-primary  focus:ring-primary focus:outline-primary  disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Enter First Name">
                <div
                  class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                  <svg class="flex-shrink-0 w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
              </div>

              <div class="relative sm:w-1/2 w-full">
                <input v-model="lastName" type="text"  required
                  class="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-sm text-sm focus:border-primary  focus:ring-primary focus:outline-primary  disabled:opacity-50 disabled:pointer-events-none "
                  placeholder="Enter Last Name">
                <div
                  class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                  <svg class="flex-shrink-0 w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="sm:flex grid gap-5 items-center w-full my-5">
              <div class="relative sm:w-1/2 w-full">
                <input v-model="email" type="email" required
                  class="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-sm text-sm focus:border-primary focus:ring-primary focus:outline-primary disabled:opacity-50 disabled:pointer-events-none"
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
                  class="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-sm text-sm focus:border-primary focus:ring-primary focus:outline-primary disabled:opacity-50 disabled:pointer-events-none"
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
                <input v-model="fullAddress" type="text" 
                  class="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-sm text-sm focus:border-primary focus:ring-primary focus:outline-primary disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Enter Full Address">
                <div
                  class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="flex-shrink-0 w-4 h-4 text-gray-500">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
              </div>
            </div>

         

            <div class="relative">
                  <select required v-model="service" id="service" class="peer p-4 pe-9 block w-full bg-gray-100 border-transparent rounded-sm text-sm focus:border-primary focus:ring-primary focus:outline-primary disabled:opacity-50 disabled:pointer-events-none 
                  
                  focus:pt-6
                  focus:pb-2
                  [&:not(:placeholder-shown)]:pt-6
                  [&:not(:placeholder-shown)]:pb-2
                  autofill:pt-6
                  autofill:pb-2">
                <option disabled>— Select —</option>
                <option value="Mai Alkaline 500 ML" data-id="254">Mai Alkaline 500 ML</option>
                <option value="Mai Alkaline 1.5 LTR" data-id="251">Mai Alkaline 1.5 LTR</option>
                <option value="Manual Water Pump with 5 Gallon  Returnable Bottle" data-id="256">Manual Water
                  Pump with 5 Gallon Returnable Bottle</option>
                <option value="SIFR 500 ML" data-id="148">SIFR 500 ML</option>
                <option value="SIFR 1.5 LTR" data-id="154">SIFR 1.5 LTR</option>
                <option value="SIFR 5 Gallon" data-id="156">SIFR 5 Gallon</option>
                <option value="5G - Returnable" data-id="152">5G - Returnable</option>
                <option value="4G - Non Returnable" data-id="141">4G - Non Returnable</option>
                <option value="5 LTR" data-id="146">5 LTR</option>
                <option value="1.5 LTR" data-id="150">1.5 LTR</option>
                <option value="500 ML" data-id="135">500 ML</option>
                <option value="330 ML" data-id="139">330 ML</option>
                <option value="200 ML" data-id="133">200 ML</option>
                <option value="Cup 100ml/200ml" data-id="252">Cup 100ml/200ml</option>
              
                  </select>
                  <label for="service" class="absolute top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                    peer-focus:text-xs
                    peer-focus:-translate-y-1.5
                    peer-focus:text-gray-500
                    peer-[:not(:placeholder-shown)]:text-xs
                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                    peer-[:not(:placeholder-shown)]:text-gray-500">Services</label>
              </div>

          </div>
          <!-- End Form Group -->
          <button type="submit"
            class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-sm border border-transparent bg-primary text-white hover:bg-secondary disabled:opacity-50 disabled:pointer-events-none">Submit</button>
        </div>
      </form>
      <!-- End Form -->

    </div>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
    <Toast />
  </form>
 
</dialog>
</template>
<script>
import axios from 'axios';
import AddressComponent from './AddressComponent.vue';


// import { useAddressStore } from '../stores/addressStore';

export default {
    props: ['modal'],
    name: 'OrderOnlineModal',
    data() {
      return {
        
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          fullAddress: '',
          service: '',
          division: "",
          district: "",
          upazila: "",
          union: "",
         

        };
    },
  components: { AddressComponent },



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

      const bookingDetails= {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phone: this.phone,
        fullAddress: this.fullAddress,
        service: this.service,
        division: this.division,
        district: this.district,
        upazila: this.upazila,
        unionn: this.union,

      }

      console.log(bookingDetails)

      

      fetch('http://localhost:3000/api/order', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookingDetails)
      })
        .then(response => {
          if (!response.ok) {
            this.$toast.add({ severity: 'error', summary: 'Error', detail: 'Failed to Recieve Your Order,, Try Again later', life: 3000 });
            throw new Error('Failed to insert product data');
          }
          return response.text();
        })
        .then(data => {
        //   console.log('Product data inserted successfully:', data);
          this.$toast.add({ severity: 'success', summary: 'Success', detail: 'We Have Revieved Your Order', life: 3000 });
          this.resetFormData()
          return new Promise(resolve => setTimeout(resolve, 1000)); 
        })
        .then(() => {

          window.location.reload();
        })
        .catch(error => {
          this.$toast.add({ severity: 'error', summary: 'Error', detail: 'Failed to Recieve Your Order', life: 3000 });
          console.error('Error inserting Order data:', error);
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


  

    }
};

</script>
<style>
  
</style>