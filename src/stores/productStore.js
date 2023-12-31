
import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    isLoading: false,
  }),

  actions: {
    async fetchProducts() {
      try {
        this.isLoading = true;

        // Replace 'your_api_endpoint' with the actual API endpoint to fetch products
        const response = await fetch('https://server.zealtechweb.com/products');
        const data = await response.json();

        // Assuming the API response contains an array of products
        this.products = data;
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
  return useProductStore();
}
