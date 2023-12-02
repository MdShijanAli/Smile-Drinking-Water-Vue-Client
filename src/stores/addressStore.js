import { defineStore } from "pinia";

export const useAddressStore = defineStore('StoreAddress', {
  state: () => ({
    divisions: [],
    districts: [],
    upazilas: [],
    unions: [],
    selectedDivision: "",
    selectedDistrict: "",
    selectedUpazila: "",
  }),

  actions: {
    async fetchDivisions() {
      try {
        const response = await fetch('/divisions.json');
        const data = await response.json();

        // Assuming your JSON structure has an array of divisions, adjust accordingly
        this.divisions = data[2].data.sort((a, b) => a.name.localeCompare(b.name));
      } catch (error) {
        console.error('Error fetching divisions:', error);
      }
    },
    async fetchDistricts() {
      try {
        if (!this.selectedDivision) {
          return this.districts = "";
       }

        const response = await fetch('/districts.json');
        const data = await response.json();

        // Assuming your JSON structure has an array of districts, adjust accordingly
        this.districts = data[2].data.sort((a, b) => a.name.localeCompare(b.name)).filter((dis) => dis.division_id == this.selectedDivision);
      } catch (error) {
        console.error('Error fetching districts:', error);
      }
    },
    async fetchUpazilas() {
      try {
      
        if (!this.selectedDistrict) {
          return this.upazilas = ""
        }

        const response = await fetch('/upazilas.json');
        const data = await response.json();

        // Assuming your JSON structure has an array of upazilas, adjust accordingly
        this.upazilas = data[2].data.sort((a, b) => a.name.localeCompare(b.name)).filter((upa) => upa.district_id == this.selectedDistrict);
      } catch (error) {
        console.error('Error fetching upazilas:', error);
      }
    },
    async fetchUnions() {
      try {
        if (!this.selectedUpazila) { 
          return this.unions = ""
        }

        const response = await fetch('/unions.json');
        const data = await response.json();

        // Assuming your JSON structure has an array of unions, adjust accordingly
        this.unions = data[2].data.sort((a, b) => a.name.localeCompare(b.name)).filter((uni) => uni.upazilla_id == this.selectedUpazila);
      } catch (error) {
        console.error('Error fetching unions:', error);
      }
    },

    async setSelectedDivision(divisionId) {
      this.selectedDivision = divisionId;
      console.log("Selected Division", this.selectedDivision);
      // Refetch districts when the division changes
      await this.fetchDistricts();
    },
    async setSelectedDistrict(districtId) {
      this.selectedDistrict = districtId;
      console.log("Selected District", this.selectedDistrict);
      // Refetch upazilas when the district changes
      await this.fetchUpazilas();
    },
    async setSelectedUpazila(upazilaId) {
      this.selectedUpazila = upazilaId;
      console.log("Selected Upazila", this.selectedUpazila);
      // Refetch unions when the upazila changes
      await this.fetchUnions();
    },


  },
});
