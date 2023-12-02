<template>
  <div>
    <div class="sm:flex grid gap-5">
              <div class="relative  sm:w-1/2 w-full">
                  <select @click="fetchData" v-model="division" @change="selectedDivision" id="division" class="peer p-4 pe-9 block w-full bg-gray-100 border-transparent rounded-sm text-sm focus:border-primary focus:ring-primary focus:outline-primary disabled:opacity-50 disabled:pointer-events-none 
                  
                  focus:pt-6
                  focus:pb-2
                  [&:not(:placeholder-shown)]:pt-6
                  [&:not(:placeholder-shown)]:pb-2
                  autofill:pt-6
                  autofill:pb-2">
                  <option selected>Choose Your Division</option>
                    <option v-for="division in divisions" :key="division.id" :value="division.id">{{division.name}}</option>
              
                  </select>
                  <label for="division" class="absolute top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                    peer-focus:text-xs
                    peer-focus:-translate-y-1.5
                    peer-focus:text-gray-500
                    peer-[:not(:placeholder-shown)]:text-xs
                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                    peer-[:not(:placeholder-shown)]:text-gray-500">Division</label>
              </div>
              <div class="relative  sm:w-1/2 w-full">
                  <select v-model="district" @change="selectedDistrict" id="district" class="peer p-4 pe-9 block w-full bg-gray-100 border-transparent rounded-sm text-sm focus:border-primary focus:ring-primary focus:outline-primary disabled:opacity-50 disabled:pointer-events-none 
                  focus:pt-6
                  focus:pb-2
                  [&:not(:placeholder-shown)]:pt-6
                  [&:not(:placeholder-shown)]:pb-2
                  autofill:pt-6
                  autofill:pb-2">
                  <option selected>Choose Your District</option>
                    <option v-for="district in districts" :key="district.id" :value="district.id">{{district.name}}</option>
                  </select>
                  <label for="district" class="absolute top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                    peer-focus:text-xs
                    peer-focus:-translate-y-1.5
                    peer-focus:text-gray-500
                    peer-[:not(:placeholder-shown)]:text-xs
                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                    peer-[:not(:placeholder-shown)]:text-gray-500">District</label>
              </div>
            </div>
            
            <div class="sm:flex grid gap-5 my-5">
              <div class="relative  sm:w-1/2 w-full">
                  <select v-model="upazila" @change="selectedUpazila" id="upazila" class="peer p-4 pe-9 block w-full bg-gray-100 border-transparent rounded-sm text-sm focus:border-primary focus:ring-primary focus:outline-primary disabled:opacity-50 disabled:pointer-events-none 
                  focus:pt-6
                  focus:pb-2
                  [&:not(:placeholder-shown)]:pt-6
                  [&:not(:placeholder-shown)]:pb-2
                  autofill:pt-6
                  autofill:pb-2">
                  <option selected>Choose Your Upazila</option>
                    <option v-for="upazila in upazilas" :key="upazila.id" :value="upazila.id">{{upazila.name}}</option>
                  </select>
                  <label for="upazila" class="absolute top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                    peer-focus:text-xs
                    peer-focus:-translate-y-1.5
                    peer-focus:text-gray-500
                    peer-[:not(:placeholder-shown)]:text-xs
                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                    peer-[:not(:placeholder-shown)]:text-gray-500">Upazila</label>
              </div>
              <div class="relative  sm:w-1/2 w-full">
                  <select v-model="union" class="peer p-4 pe-9 block w-full bg-gray-100 border-transparent rounded-sm text-sm focus:border-primary focus:ring-primary focus:outline-primary disabled:opacity-50 disabled:pointer-events-none 
                  focus:pt-6
                  focus:pb-2
                  [&:not(:placeholder-shown)]:pt-6
                  [&:not(:placeholder-shown)]:pb-2
                  autofill:pt-6
                  autofill:pb-2">
                  <option selected>Choose Your Union</option>
                    <option v-for="union in unions" :key="union.id" :value="union.id">{{union.name}}</option>
                  </select>
                  <label for="union" class="absolute top-0 start-0 p-4 h-full truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                    peer-focus:text-xs
                    peer-focus:-translate-y-1.5
                    peer-focus:text-gray-500
                    peer-[:not(:placeholder-shown)]:text-xs
                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                    peer-[:not(:placeholder-shown)]:text-gray-500">Union</label>
              </div>
            </div>
  </div>
</template>
<script>
export default {
  name: "AddressComponent",

  data() {
    
    return {

      divisions: [],
      districts: [],
      unions: [],
      upazilas: [],

  
  
    }
  },
mounted() {

// Fetch divisions data
fetch('/divisions.json')
.then(res => res.json())
.then(data => {
  // Assign the fetched data to the component property
  this.divisions = data[2].data.sort((a, b) => a.name.localeCompare(b.name));
})
.catch(error => {
  console.error('Error fetching divisions data:', error);
});


},

methods: {
selectedDivision(selectDivision) {
if(!selectDivision){
  return this.districts = "";
}

    // Fetch districts data
fetch('/districts.json')
.then(res => res.json())
.then(data => {
  this.districts = data[2].data.sort((a, b) => a.name.localeCompare(b.name)).filter((dis) => dis.division_id === selectDivision.target.value);
})
.catch(error => {
  console.error('Error fetching districts data:', error);
});
},
selectedDistrict(selectDistrict) {
  if(!selectDistrict){
    return this.upazilas = "";
  }
  
// Fetch upazilas data
fetch('/upazilas.json')
.then(res => res.json())
.then(data => {
  this.upazilas = data[2].data.sort((a, b) => a.name.localeCompare(b.name)).filter((upa) => upa.district_id === selectDistrict.target.value);
})
.catch(error => {
  console.error('Error fetching upazilas data:', error);
});
},
selectedUpazila(selectUpazila) {
  if(!selectUpazila){
    return this.unions = "";
  }
//  // Fetch unions data
fetch('/unions.json')
.then(res => res.json())
.then(data => {
  this.unions = data[2].data.sort((a, b) => a.name.localeCompare(b.name)).filter((uni) => uni.upazilla_id === selectUpazila.target.value);
})
.catch(error => {
  console.error('Error fetching unions data:', error);
});
  },

  handleFileChange(event) {
    // Update the 'cv' data property with the selected file
    this.cv = event.target.files[0];
  },

  submitForm() {
    // You can access the form data here and perform any additional actions

    const divisionName = this.divisions.find(div => div.id == this.division).name;
    const districtName = this.districts.find(dis => dis.id == this.district).name;
    const upazilaName = this.upazilas.find(upa => upa.id == this.upazila).name;
    const unionName = this.unions.find(uni => uni.id == this.union).name;
    

    const data = {
      "First Name": this.firstName,
      "Last Name": this.lastName,
      "Email": this.email,
      "Phone": this.phone,
      "Division": divisionName,
      "District": districtName,
      "Upazila": upazilaName,
      "Union": unionName,
      "Full Address": this.fullAddress,
      "CV": this.cv,
      "Job Title": this.job
     }

      console.log(data);
 
    
    // Assuming you have a toast component, you can use it to display a success message

  },



  },
  }

</script>
<style>
  
</style>