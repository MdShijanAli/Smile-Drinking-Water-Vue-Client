import { defineStore } from "pinia";

export const useAddressStore = defineStore('StoreAddress', {
  state: () => ({
    divisions: [],
    districtss: [],
    upazilas: [],
    unios: [],
    selectedDivision: null,
    selectedDistrict: null,
    selectedUpazila: null,
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
        const response = await fetch('/districts.json');
        const data = await response.json();

        // Assuming your JSON structure has an array of districts, adjust accordingly
        this.districts = data[2].data.sort((a, b) => a.name.localeCompare(b.name)).filter((dis) => dis.division_id === selectedDivision);
      } catch (error) {
        console.error('Error fetching districts:', error);
      }
    },
    async fetchUpazilas() {
      try {
        const response = await fetch('/upazilas.json');
        const data = await response.json();

        // Assuming your JSON structure has an array of upazilas, adjust accordingly
        this.upazilas = data[2].data.sort((a, b) => a.name.localeCompare(b.name));
      } catch (error) {
        console.error('Error fetching upazilas:', error);
      }
    },
    async fetchUnions() {
      try {
        const response = await fetch('/unions.json');
        const data = await response.json();

        // Assuming your JSON structure has an array of unions, adjust accordingly
        this.unions = data[2].data.sort((a, b) => a.name.localeCompare(b.name));
      } catch (error) {
        console.error('Error fetching unions:', error);
      }
    },

    updateSelectedDivision(divisionId) {
      this.selectedDivision = divisionId;
    },

    updateSelectedDistrict(districtId) {
      this.selectedDistrict = districtId;
    },

    updateSelectedUpazila(upazilaId) {
      this.selectedUpazila = upazilaId;
    },
  },
});
