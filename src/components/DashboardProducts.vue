
<template>
    <div>
        <div class="card border">
            <Toolbar class="mb-4 border m-5">
                <template #start>
                    <Button label="New" icon="pi pi-plus" severity="success" class="mr-2 bg-green-500 px-4 py-2 text-white hover:bg-green-700 transition duration-500 ease-in-out" @click="openNew" />
                    <Button label="Delete" icon="pi pi-trash" class="bg-red-400 text-white px-4 py-2" severity="danger" @click="confirmDeleteSelected" :disabled="!selectedProducts || !selectedProducts.length" />
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
                    <div class="flex flex-wrap gap-2 items-center justify-between">
                        <h4 class="m-0">Manage Products</h4>
						<span class="p-input-icon-left">
                            <i class="pi pi-search mr-5" />
                            <InputText v-model="filters['global'].value" class="px-5 py-2 border" placeholder="Search..." />
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
                        <Button icon="pi pi-pencil" outlined rounded class="mr-2" @click="editProduct(slotProps.data)" />
                        <Button icon="pi pi-trash" outlined rounded severity="danger" @click="confirmDeleteProduct(slotProps.data)" />
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

        <Dialog v-model:visible="deleteProductDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
            <div class="confirmation-content">
                <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                <span v-if="product">Are you sure you want to delete <b>{{product.name}}</b>?</span>
            </div>
            <template #footer>
                <Button label="No" icon="pi pi-times" text @click="deleteProductDialog = false"/>
                <Button label="Yes" icon="pi pi-check" text @click="deleteProduct" />
            </template>
        </Dialog>

        <Dialog v-model:visible="deleteProductsDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
            <div class="confirmation-content">
                <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
                <span v-if="product">Are you sure you want to delete the selected products?</span>
            </div>
            <template #footer>
                <Button label="No" icon="pi pi-times" text @click="deleteProductsDialog = false"/>
                <Button label="Yes" icon="pi pi-check" text @click="deleteSelectedProducts" />
            </template>
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

        editProduct(product) {
            this.product = {...product};
            this.productDialog = true;
        },
        confirmDeleteProduct(product) {
            this.product = product;
            this.deleteProductDialog = true;
        },
        deleteProduct() {
            this.products = this.products.filter(val => val.id !== this.product.id);
            this.deleteProductDialog = false;
            this.product = {};
            this.$toast.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
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
        deleteSelectedProducts() {
            this.products = this.products.filter(val => !this.selectedProducts.includes(val));
            this.deleteProductsDialog = false;
            this.selectedProducts = null;
            this.$toast.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
        },
        initFilters() {
            this.filters = {
                'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
            }
        },
        
    }
}
</script>

<style scoped>

p {
    line-height: 1.75;
}

</style>
