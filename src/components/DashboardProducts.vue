
<template>
    <div>
        <div class="card border">
            <Toolbar class="mb-4 border m-5">
                <template #start>
                    <Button label="New" icon="pi pi-plus" severity="success" class="mr-2 bg-green-500 px-4 py-2 text-white hover:bg-green-700 transition duration-500 ease-in-out" @click="openNew" />
                    <Button label="Delete" icon="pi pi-trash" :class="selectedProducts?.length? 'bg-red-600': 'bg-red-400 cursor-not-allowed'" class="text-white px-4 py-2" severity="danger" @click="confirmDeleteSelected" />
                </template>

                <template #end>
                    <FileUpload mode="basic" accept="image/*" :maxFileSize="1000000" label="Import" chooseLabel="Import" class="mr-2 inline-block bg-teal-500 text-white px-4 py-2" />
                    <Button label="Export" icon="pi pi-upload" class="bg-indigo-400 text-white px-4 py-2" severity="help" @click="exportCSV($event)"  />
                </template>
            </Toolbar>

            <DataTable ref="dt" :value="productStore.products" v-model:selection="selectedProducts" dataKey="id" 
                :paginator="true" :rows="10" :filters="filters"
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

                <Column selectionMode="multiple" style="width: 3rem" :exportable="false"></Column>
                <Column field="code" header="Code" sortable style="min-width:12rem"></Column>
                <Column field="title" header="Name" sortable style="min-width:16rem">
                
                </Column>
                <Column header="Image">
                    <template #body="slotProps">
                        <img :src="slotProps.data.img" :alt="slotProps.data.image" class="shadow-2 border-round" style="width: 64px" />
                    </template>
                </Column>
         
               
                <Column field="rating" header="Reviews" sortable style="min-width:12rem">
                    <template #body="slotProps">
                        <Rating :modelValue="slotProps.data.rating" :readonly="true" :cancel="false" />
                    </template>
                </Column>
         
                <Column :exportable="false" style="min-width:8rem">
                    <template #body="slotProps">
                        <Button icon="pi pi-pencil" outlined rounded class="mr-2 border border-[#1EBC87] text-[#1EBC87]" @click="editProduct(slotProps.data)" />
                        <Button icon="pi pi-trash" outlined rounded class="border text-red-600 border-red-600" @click="confirmDeleteProduct(slotProps.data)" />
                    </template>
                </Column>
            </DataTable>
        </div>

        <Dialog v-model:visible="productDialog" :style="{width: '450px'}" header="Product Details" :modal="true" class="p-fluid">
            <Toast />
            
        <form action="">
            <div class="mb-3">
                <div class="relative  w-full">
                <input v-model="productName" type="text" 
                  class="peer py-3 px-4 ps-5 block w-full bg-gray-100 border-transparent rounded-sm text-sm focus:border-primary  focus:ring-primary focus:outline-primary  disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Enter Product Name">
              </div>
            </div>
            <div class="mb-3">
                <div class="relative  w-full">
                <textarea v-model="productDescription" type="text"
                  class="peer py-3 px-4 ps-5 block w-full bg-gray-100 border-transparent rounded-sm text-sm focus:border-primary  focus:ring-primary focus:outline-primary  disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Product Description" rows="5"></textarea>
              </div>
            </div>

            <div  class="border p-2">
                <div>
                        <form>
                        <label class="block">
                            <span class="sr-only">Choose profile photo</span>
                            <input @change="handleFileChange" type="file" class="block w-full text-sm text-gray-500
                                            file:me-4 file:py-2 file:px-4
                                            file:rounded-lg file:border-0
                                            file:text-sm file:font-semibold
                                            file:bg-primary file:text-white
                                            hover:file:bg-secondary
                                            transition duration-500 ease-in-out
                                            file:disabled:opacity-50 file:disabled:pointer-events-none
                                           "
                            />
                        </label>
                        </form>
                </div>
            </div>
            <div>
                <div class="flex gap-5 mt-10 justify-end">
                <Button label="Cancel" icon="pi pi-times" text class="bg-red-600 text-white px-5 py-2.5" @click="hideDialog"/>
                <Button label="Upload" icon="pi pi-check" text class="bg-green-600 text-white px-5 py-2.5" @click="uploadProduct" />
                </div>
            </div>
        </form>   
        
        </Dialog>
        <Dialog v-model:visible="productEditDialog" :style="{width: '500px'}" header="Product Details" :modal="true" class="p-fluid">
            <Toast />
            <img v-if="product.img" :src="product.img" :alt="product.title" class="block m-auto pb-3" />
        <form action="">
            <div class="mb-3">
                <div class="relative  w-full">
                <input v-model="product.title" type="text" 
                  class="peer py-3 px-4 ps-5 block w-full bg-gray-100 border-transparent rounded-sm text-sm focus:border-primary  focus:ring-primary focus:outline-primary  disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Enter Product Name">
              </div>
            </div>
            <div class="mb-3">
                <div class="relative  w-full">
                <textarea v-model="product.description" type="text"
                  class="peer py-3 px-4 ps-5 block w-full bg-gray-100 border-transparent rounded-sm text-sm focus:border-primary  focus:ring-primary focus:outline-primary  disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Product Description" rows="5"></textarea>
              </div>
            </div>

  
            <div>
                <div class="flex gap-5 mt-10 justify-end">
                <Button label="Cancel" icon="pi pi-times" text class="bg-red-600 text-white px-5 py-2.5" @click="productEditDialog = false"/>
                <Button label="Update" icon="pi pi-check" text class="bg-green-600 text-white px-5 py-2.5" @click="updateProduct(product.id)" />
                </div>
            </div>
        </form>   
        
        </Dialog>

        <Dialog v-model:visible="deleteProductDialog" :style="{width: '500px'}" header="Confirm" :modal="true">
            <Toast />
            <div class="flex items-center gap-5">
                <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                <span v-if="product">Are you sure you want to delete <b>{{product.title}}</b>?</span>
            </div>
            <div class="flex gap-5 mt-10 justify-end">
                <Button label="No" icon="pi pi-times" text class="bg-black text-white px-5 py-2.5" @click="deleteProductDialog = false"/>
                <Button label="Yes" icon="pi pi-check" text class="bg-red-600 text-white px-5 py-2.5" @click="deleteProduct(product.id)" />
            </div>
        </Dialog>

        <Dialog v-model:visible="deleteProductsDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
            <Toast />
            <div class="flex items-center gap-5">
                <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                <span v-if="product">Are you sure you want to delete the selected products?</span>
            </div>
            <div class="flex gap-5 mt-10 justify-end">
                <Button label="No" icon="pi pi-times" text class="bg-black text-white px-5 py-2.5" @click="deleteProductsDialog = false"/>
                <Button label="Yes" icon="pi pi-check" text class="bg-red-600 text-white px-5 py-2.5" @click="deleteSelectedProducts(selectedProducts)" />
            </div>
        </Dialog>
	</div>
</template>

<script>
import { ref,watch, onMounted } from 'vue';
import { FilterMatchMode } from 'primevue/api';
import { useProductStore } from '../stores/productStore';


export default {
    data() {
        return {
            products: null,
            productDialog: false,
            productEditDialog: false,
            deleteProductDialog: false,
            deleteProductsDialog: false,
            product: {},
            selectedProducts: null,
            filters: {},
            submitted: false,
            productName: '',
            productDescription: '',
            productImage: null,
            uploadedImageUrl: null,
            apiKey: '8d6f88076c0d0741db9ce8b01104af0c',

            
        }
    },



    setup() {
        const productStore = useProductStore();

        const fetchProducts = async () => {
      try {
        await productStore.fetchProducts();
        console.log('Products fetched successfully.');
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    onMounted(() => {
      // Fetch products when the component is mounted
      fetchProducts();
    });

    return {
      productStore,
      fetchProducts, // Expose the fetchProducts method
    };
  },
    created() {
        this.initFilters();
    },

    methods: {
        formatCurrency(value) {
            if(value)
				return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
			return;
        },
        openNew() {
            this.product = {};
            this.submitted = false;
            this.productDialog = true;
        },
        hideDialog() {
            this.productDialog = false;
            this.submitted = false;
        },
    
    handleFileChange(event) {
      this.selectedFile = event.target.files[0];
    },


// Post Product

    uploadProduct() {
  this.submitted = true;

        // img api


  if (!this.selectedFile) {
    console.error('No file selected.');
    return;
  }

  const formData = new FormData();
        formData.append('image', this.selectedFile);



  try {
    fetch(`https://api.imgbb.com/1/upload?key=${this.apiKey}`, {
      method: 'POST',
      
      body: formData,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Image upload failed');
        }
        return response.json();
      })
      .then(result => {
        this.uploadedImageUrl = result.data.url;
        console.log('Image uploaded successfully. URL:', this.uploadedImageUrl);

        const lastCode = this.productStore.products[this.productStore.products.length - 1].code;
        const newCode = parseInt(lastCode, 10) + 1;
        const generatedCode = newCode.toString().padStart(4, '0');

          const uploadData = {
              img: this.uploadedImageUrl,
              title: this.productName,
              description: this.productDescription,
              code: generatedCode
          };    

          console.log(uploadData);

           // Post data to your server
            fetch('http://localhost:3000/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(uploadData),
            })

            .then(response => {
        if (!response.ok) {
            this.$toast.add({ severity: 'error', summary: 'Error', detail: 'Failed to insert product data', life: 3000 });
            throw new Error('Failed to insert product data');
        }
        return response.text();
      })
      .then(data => {
        //   console.log('Product data inserted successfully:', data);
          this.$toast.add({ severity: 'success', summary: 'Success', detail: 'Product Successfully Upload Done.', life: 3000 });
          return  new Promise(resolve => setTimeout(resolve, 1000)); 
      })
      .then(() => {
          this.productDialog = false;
          this.fetchProducts();
        })
          .catch(error => {
                    this.$toast.add({ severity: 'error', summary: 'Error', detail: 'Error inserting product data', life: 3000 });
        console.error('Error inserting product data:', error);
      });

          
      })
        .catch(error => {
            this.$toast.add({ severity: 'error', summary: 'Error', detail: 'Error uploading image', life: 3000 });
        console.error('Error uploading image:', error);
      });
  } catch (error) {
    console.error('Error uploading image:', error);
  }
},

async updateProductFunction(productId) {
  try {
    const response = await fetch(`http://localhost:3000/api/products/${productId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: this.product.title,
        description: this.product.description,
        // Add other fields as needed
      }),
    });

    if (response.ok) {
      this.$toast.add({ severity: 'success', summary: 'Successful', detail: 'Product updated successfully', life: 3000 });
      return new Promise(resolve => setTimeout(resolve, 1000));
        
      // Optionally, you can refresh your product list or do any other necessary actions.
    } else {
      console.error('Failed to update product');
    }
  } catch (error) {
    console.error('Error updating product:', error);
    }
  finally {
      this.productEditDialog = false;
      this.fetchProducts();
  }
},

        updateProduct(id) {
            console.log(id)
            this.updateProductFunction(id)
            this.product = {}
        },
        editProduct(prod) {
            this.product = prod
      
            this.productEditDialog = true;
            console.log(prod)
        },
        confirmDeleteProduct(product) {
            this.product = product;
            this.deleteProductDialog = true;
            console.log(product)
        },

        // Delete Single Products
        async deleteProductFunction(productId) {
            try {
            const response = await fetch(`http://localhost:3000/api/products/${productId}`, {
                method: 'DELETE',
            });

                if (response.ok) {
                    this.$toast.add({ severity: 'success', summary: 'Successful', detail: `Product with ID ${productId} deleted successfully`, life: 3000 });
                    await  new Promise(resolve => setTimeout(resolve, 1000)); 
                    this.product = {};
                    
            } else {
                console.error('Failed to delete product');
            }
            } catch (error) {
            console.error('Error deleting product:', error);
            }
            finally {
                // Call fetchProducts regardless of success or error
                this.deleteProductDialog = false;
                this.fetchProducts();
            }

        },
        deleteProduct(id) {
            console.log(id);
    // Call the delete function with the product ID
            this.deleteProductFunction(id);
            
            
        },
        findIndexById(id) {
            let index = -1;
            for (let i = 0; i < this.products.length; i++) {
                if (this.products[i].id === id) {
                    index = i;
                    break;
                }
            }

            return index;
        },
        createId() {
            let id = '';
            var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            for ( var i = 0; i < 5; i++ ) {
                id += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return id;
        },
        exportCSV() {
            this.$refs.dt.exportCSV();
        },
        confirmDeleteSelected() {
            this.deleteProductsDialog = true;
        },
        deleteSelectedProducts(products) {
  // Iterate over the selected products and delete each one
                products.forEach(async (product) => {
                    try {
                    const response = await fetch(`http://localhost:3000/api/products/${product.id}`, {
                        method: 'DELETE',
                    });

                    if (response.ok) {
                        console.log(`Product with ID ${product.id} deleted successfully`);
                        this.$toast.add({ severity: 'success', summary: 'Successful', detail: `Product with Name ${product.title} deleted successfully`, life: 3000 });
                        await new Promise(resolve => setTimeout(resolve, 1000)); 
                        this.product = {};
                        // Optionally, you can refresh your product list or do any other necessary actions.
                    } else {
                        console.error(`Failed to delete product with ID ${product.id}`);
                    }
                    } catch (error) {
                    console.error(`Error deleting product with ID ${product.id}:`, error);
                    }
                    finally {
                        this.deleteProductsDialog = false;
                        this.fetchProducts();
                    }
                });
                
                // Optionally, you can refresh your product list or do any other necessary actions.
                },
        initFilters() {
            this.filters = {
                'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
            }
        },
        
    }
}
</script>

<style >
.card{
    padding: 50px !important;
    border-radius: 0px;
}

.p-checkbox-box.p-component {
    border: 1px solid #ddd !important;
}
</style>
