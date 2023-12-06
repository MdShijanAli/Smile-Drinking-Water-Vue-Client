<template>
  <div>
    <div class="sm:flex grid gap-5">
              <div class="relative  sm:w-1/2 w-full">
                  <select required @change="selectedDivision" id="division" class="peer p-4 pe-9 block w-full bg-gray-100 border-transparent rounded-sm text-sm focus:border-primary focus:ring-primary focus:outline-primary disabled:opacity-50 disabled:pointer-events-none 
                  
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
                  <select required @change="selectedDistrict" id="district" class="peer p-4 pe-9 block w-full bg-gray-100 border-transparent rounded-sm text-sm focus:border-primary focus:ring-primary focus:outline-primary disabled:opacity-50 disabled:pointer-events-none 
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
                  <select required @change="selectedUpazila" id="upazila" class="peer p-4 pe-9 block w-full bg-gray-100 border-transparent rounded-sm text-sm focus:border-primary focus:ring-primary focus:outline-primary disabled:opacity-50 disabled:pointer-events-none 
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
                  <select required @change="selectedUnion" class="peer p-4 pe-9 block w-full bg-gray-100 border-transparent rounded-sm text-sm focus:border-primary focus:ring-primary focus:outline-primary disabled:opacity-50 disabled:pointer-events-none 
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
      sdivision: "",
      sdistrict: "",
      supazila: "",
      sunion: "",
      
  
  
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
    if (!selectDivision) {
      return this.districts = "";
    }
    this.sdivision = this.divisions.filter(div=> div.id === selectDivision?.target.value)[0].name


    // Fetch districts data
fetch('/districts.json')
.then(res => res.json())
.then(data => {
  this.districts = data[2].data.sort((a, b) => a.name.localeCompare(b.name)).filter((dis) => dis.division_id === selectDivision.target.value);
  this.$emit('division-selected', this.sdivision); 
})
.catch(error => {
  console.error('Error fetching districts data:', error);
});
},
selectedDistrict(selectDistrict) {
  if(!selectDistrict){
    return this.upazilas = "";
  }

  this.sdistrict = this.districts.filter(div=> div.id === selectDistrict?.target.value)[0].name

// Fetch upazilas data
fetch('/upazilas.json')
.then(res => res.json())
.then(data => {
  this.upazilas = data[2].data.sort((a, b) => a.name.localeCompare(b.name)).filter((upa) => upa.district_id === selectDistrict.target.value);
  this.$emit('district-selected', this.sdistrict); 
})
.catch(error => {
  console.error('Error fetching upazilas data:', error);
});
},
selectedUpazila(selectUpazila) {
  if(!selectUpazila){
    return this.unions = "";
  }
  this.supazila = this.upazilas.filter(div=> div.id === selectUpazila?.target.value)[0].name
//  // Fetch unions data
fetch('/unions.json')
.then(res => res.json())
.then(data => {
  this.unions = data[2].data.sort((a, b) => a.name.localeCompare(b.name)).filter((uni) => uni.upazilla_id === selectUpazila.target.value);
  this.$emit('upazila-selected', this.supazila); 
 
})
.catch(error => {
  console.error('Error fetching unions data:', error);
});
  },

  selectedUnion(selectUnion) {
    if (selectUnion) {
      this.sunion = this.unions.filter(div=> div.id === selectUnion.target.value)[0].name
      this.$emit('union-selected', this.sunion); 
    }
  }




  },
  }

</script>
<style>
  
</style>