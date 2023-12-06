<template>
  <div>
    <div class="grid md:grid-cols-5">
          <div class="col-span-1 border">
               <div class="avatar p-5 w-full flex justify-center">
                  <div class="w-24 rounded-full ring ring-primary ring-offset-2 block">
                    <img class="mx-auto" :src="websiteInfo[0].img" />
                  </div>
                </div>
                  <div class="pt-5 text-center">
                    <h1 class="text-2xl font-semibold">{{ websiteInfo[0].name }}</h1>
                    <p>Email: {{ websiteInfo[0].email }}</p>
                  </div>
                  
                  <div class="divider"></div> 

               <div>
                <ul class="flex gap-5 justify-center sm:block">
                <li class="">
                  <RouterLink to="/dashboard" tabindex="0"
                    class="focus:outline-none focus:text-secondary-600  xl:text-base md:text-lg text-base py-1 my-1 md:py-1 md:my-2 cursor-pointer hover:bg-primary hover:text-white block px-3">
                    Dashboard</RouterLink>
                </li>

                  
                      <li><RouterLink to="/all-products"
                          class="focus:outline-none focus:text-secondary-600  xl:text-base md:text-lg text-base py-1 my-1 md:py-1 md:my-2 cursor-pointer hover:bg-primary hover:text-white block px-3">All Products</RouterLink>
                      </li>
                      <li><RouterLink to="/orders"
                          class="focus:outline-none focus:text-secondary-600  xl:text-base md:text-lg text-base py-1 my-1 md:py-1 md:my-2 cursor-pointer hover:bg-primary hover:text-white block px-3">Orders</RouterLink>
                      </li>
                      <li><RouterLink to="/jobs"
                          class="focus:outline-none focus:text-secondary-600  xl:text-base md:text-lg text-base py-1 my-1 md:py-1 md:my-2 cursor-pointer hover:bg-primary hover:text-white block px-3">Jobs</RouterLink>
                      </li>
                      <li><RouterLink to="/settings"
                          class="focus:outline-none focus:text-secondary-600  xl:text-base md:text-lg text-base py-1 my-1 md:py-1 md:my-2 cursor-pointer hover:bg-primary hover:text-white block px-3">Settings</RouterLink>
                      </li>
                      <li class="">
                        <RouterLink to="/" tabindex="0"
                          class="focus:outline-none focus:text-secondary-600  xl:text-base md:text-lg text-base py-1 my-1 md:py-1 md:my-2 cursor-pointer hover:bg-primary hover:text-white block px-3">
                          Logout</RouterLink>
                      </li>
               
          
           
              </ul>
               </div>
          </div>
          <div class="md:col-span-4">
            <router-view></router-view>
          </div>
    </div>
  </div>
</template>
<script >
import { ref, watchEffect } from 'vue';
import { useWebsiteInfoStore } from '../stores/websiteInfoStore';



export default {
  name: "DashboardLayout",
  data() {
    
  },

  mounted() {
    // Your existing JavaScript code
    const parentMenu = document.querySelectorAll('.parent_menu');
    const childMenu = document.querySelectorAll('.child_menu');

    parentMenu.forEach((button, index) => {
      button.addEventListener('click', () => {
        childMenu.forEach((content, contentIndex) => {
          if (contentIndex === index) {
            content.classList.toggle('show');
          } else {
            content.classList.remove('show');
          }
        });
      });
    });
  },


  setup() {
    const websiteInfoStore = useWebsiteInfoStore();
  websiteInfoStore.fetchWebsiteInfo();

  // Wait for the action to complete
  const websiteInfo = ref(null);

  watchEffect(() => {
    websiteInfo.value = websiteInfoStore.websiteInfos;
    console.log('websiteInfo:', websiteInfo.value[0]);
  });

  return {
    websiteInfo,
  };
  },

}

</script>
<style scoped>

</style>