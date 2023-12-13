
import { defineStore } from 'pinia';

export const useWebsiteInfoStore = defineStore('websiteInfo', {
  state: () => ({
    websiteInfos: [],
    isLoading: false,
  }),

  actions: {
    async fetchWebsiteInfo() {
      try {
        this.isLoading = true;

        // Replace 'your_api_endpoint' with the actual API endpoint to fetch products
        const response = await fetch('https://server.zealtechweb.com/api/infos');
        const data = await response.json();

        // Assuming the API response contains an array of products
        this.websiteInfos = data;
        // console.log(this.products)

        this.isLoading = false;
      } catch (error) {
        console.error('Error fetching products:', error);
        this.isLoading = false;
      }
    },
  },
});

// Export a function to create a new instance of the store
export function setup() {
  return useWebsiteInfoStore();
}
