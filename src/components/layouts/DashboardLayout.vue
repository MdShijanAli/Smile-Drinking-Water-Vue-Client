<template>
  <div>
    <div class="grid lg:grid-cols-5">
          <div class="hidden lg:block lg:col-span-1 border min-h-screen bg-blue-900 text-white">
               <div class="avatar p-5 w-full flex justify-center">
                  <div class="w-24 rounded-full ring ring-primary ring-offset-2 block">
                    <img class="mx-auto bg-center bg-contain w-full h-full" :src="websiteInfo[0].img" />
                  </div>
                </div>
                  <div class="pt-5 text-center">
                    <h1 class="text-2xl font-semibold">{{ websiteInfo[0].name }}</h1>
                    <p class="text-sm xl:text-base">Email: {{ websiteInfo[0].email }}</p>
                  </div>
                  
                  <div class="divider"></div> 

                   <div class="overflow-y-auto">
           
                                <ul class="list-none p-0 m-0 overflow-hidden">
                                    <li class="focus:outline-none focus:text-secondary-600  xl:text-base md:text-md text-base cursor-pointer hover:bg-blue-950 hover:text-white block">
                                        <RouterLink to="/dashboard" v-ripple class="flex gap-3 items-center cursor-pointer p-4 my-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-home mr-2"></i>
                                            <span class="font-medium">Dashboard</span>
                                        </RouterLink>
                                    </li>
                                    <li class="focus:outline-none focus:text-secondary-600  xl:text-base md:text-md text-base cursor-pointer hover:bg-blue-950 hover:text-white block">
                                        <RouterLink to="/all-products" v-ripple class="flex gap-3 items-center cursor-pointer p-4 my-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-shopping-bag mr-2"></i>
                                            <span class="font-medium">Products</span>
                                        </RouterLink>
                                    </li>
                                 
                                    <li class="focus:outline-none focus:text-secondary-600  xl:text-base md:text-md text-base cursor-pointer hover:bg-blue-950 hover:text-white block">
                                        <RouterLink to="/orders" v-ripple class="flex gap-3 items-center cursor-pointer p-4 my-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-shopping-cart mr-2"></i>
                                            <span class="font-medium">Orders</span>
                                        </RouterLink>
                                    </li>
                                    <li class="focus:outline-none focus:text-secondary-600  xl:text-base md:text-md text-base cursor-pointer hover:bg-blue-950 hover:text-white block">
                                        <RouterLink to="/applications" v-ripple class="flex gap-3 items-center cursor-pointer p-4 my-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-file mr-2"></i>
                                            <span class="font-medium">Applications</span>
                                           
                                        </RouterLink>
                                    </li>
                                    <li class="focus:outline-none focus:text-secondary-600  xl:text-base md:text-md text-base cursor-pointer hover:bg-blue-950 hover:text-white block">
                                        <RouterLink to="/jobs" v-ripple class="flex gap-3 items-center cursor-pointer p-4 my-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-file mr-2"></i>
                                            <span class="font-medium">Jobs</span>
                                           
                                        </RouterLink>
                                    </li>
                       
                                    <li class="focus:outline-none focus:text-secondary-600  xl:text-base md:text-md text-base cursor-pointer hover:bg-blue-950 hover:text-white block">
                                        <RouterLink to="/settings" v-ripple class="flex gap-3 items-center cursor-pointer p-4 my-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-cog mr-2"></i>
                                            <span class="font-medium">Settings</span>
                                        </RouterLink>
                                    </li>
                                    <li class="focus:outline-none focus:text-secondary-600  xl:text-base md:text-md text-base cursor-pointer hover:bg-blue-950 hover:text-white block">
                                        <RouterLink to="/" v-ripple class="flex gap-3 items-center cursor-pointer p-4 my-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-sign-out mr-2"></i>
                                            <span class="font-medium">Logout</span>
                                        </RouterLink>
                                    </li>
                                </ul>
              
          
                    </div>
            
          </div>

          <div class="drawer justify-end lg:hidden flex z-50 bg-blue-900 p-2">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <!-- Page content here -->
        <button class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg"
          type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation"
          aria-controls="drawer-navigation">
          <label for="my-drawer" class="drawer-button">
            <svg class="sm:w-8 w-6 h-6 sm:h-8 fill-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </label>
        </button>
      </div>
      <div class="drawer-side">
        <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
        <div class="w-80 border min-h-screen bg-blue-900 text-white">
               <div class="avatar p-5 w-full flex justify-center">
                  <div class="w-24 rounded-full ring ring-primary ring-offset-2 block">
                    <img class="mx-auto" :src="websiteInfo[0].img" />
                  </div>
                </div>
                  <div class="pt-5 text-center">
                    <h1 class="text-2xl font-semibold">{{ websiteInfo[0].name }}</h1>
                    <p class="text-sm xl:text-base">Email: {{ websiteInfo[0].email }}</p>
                  </div>
                  
                  <div class="divider"></div> 

                   <div class="overflow-y-auto">
           
                                <ul class="list-none p-0 m-0 overflow-hidden">
                                    <li class="focus:outline-none focus:text-secondary-600  xl:text-base md:text-md text-base cursor-pointer hover:bg-blue-950 hover:text-white block">
                                        <RouterLink to="/dashboard" v-ripple class="flex gap-3 items-center cursor-pointer p-4 my-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-home mr-2"></i>
                                            <span class="font-medium">Dashboard</span>
                                        </RouterLink>
                                    </li>
                                    <li class="focus:outline-none focus:text-secondary-600  xl:text-base md:text-md text-base cursor-pointer hover:bg-blue-950 hover:text-white block">
                                        <RouterLink to="/all-products" v-ripple class="flex gap-3 items-center cursor-pointer p-4 my-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-shopping-bag mr-2"></i>
                                            <span class="font-medium">Products</span>
                                        </RouterLink>
                                    </li>
                                 
                                    <li class="focus:outline-none focus:text-secondary-600  xl:text-base md:text-md text-base cursor-pointer hover:bg-blue-950 hover:text-white block">
                                        <RouterLink to="/orders" v-ripple class="flex gap-3 items-center cursor-pointer p-4 my-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-shopping-cart mr-2"></i>
                                            <span class="font-medium">Orders</span>
                                        </RouterLink>
                                    </li>
                                    <li class="focus:outline-none focus:text-secondary-600  xl:text-base md:text-md text-base cursor-pointer hover:bg-blue-950 hover:text-white block">
                                        <RouterLink to="/applications" v-ripple class="flex gap-3 items-center cursor-pointer p-4 my-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-file mr-2"></i>
                                            <span class="font-medium">Applications</span>
                                           
                                        </RouterLink>
                                    </li>
                                    <li class="focus:outline-none focus:text-secondary-600  xl:text-base md:text-md text-base cursor-pointer hover:bg-blue-950 hover:text-white block">
                                        <RouterLink to="/jobs" v-ripple class="flex gap-3 items-center cursor-pointer p-4 my-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-file mr-2"></i>
                                            <span class="font-medium">Jobs</span>
                                           
                                        </RouterLink>
                                    </li>
                       
                                    <li class="focus:outline-none focus:text-secondary-600  xl:text-base md:text-md text-base cursor-pointer hover:bg-blue-950 hover:text-white block">
                                        <RouterLink to="/settings" v-ripple class="flex gap-3 items-center cursor-pointer p-4 my-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-cog mr-2"></i>
                                            <span class="font-medium">Settings</span>
                                        </RouterLink>
                                    </li>
                                    <li class="focus:outline-none focus:text-secondary-600  xl:text-base md:text-md text-base cursor-pointer hover:bg-blue-950 hover:text-white block">
                                        <RouterLink to="/" v-ripple class="flex gap-3 items-center cursor-pointer p-4 my-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                            <i class="pi pi-sign-out mr-2"></i>
                                            <span class="font-medium">Logout</span>
                                        </RouterLink>
                                    </li>
                                </ul>
              
          
                    </div>
            
          </div>
      </div>
    </div>
          <div class="lg:col-span-4 bg-gradient-to-tr from-gray-50 to-background">
            <router-view></router-view>
          </div>
    </div>
  

    </div>
  
  
  

</template>
<script >
import { ref, watchEffect } from 'vue';
import { useWebsiteInfoStore } from '../../stores/websiteInfoStore';



export default {
  name: "DashboardLayout",
  data() {
    return {
      visible: true
    }
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
.router-link-active{
background: #172554;
}
</style>