<template>
     <div>



<div class="bg-primary">
    <div class="max-w-7xl mx-auto px-6 py-3 text-white items-center flex-wrap justify-between hidden lg:flex">
        <div class="flex items-center gap-10">
          <a :href="`tel:${websiteInfo[0]?.phone}`"><p class="flex text-sm items-center gap-3"><i class="pi pi-phone"></i>Customer Support: <span class="font-semibold">{{ websiteInfo[0]?.phone }}</span> </p></a>
          <a :href="`mailto:${websiteInfo[0]?.email}`"><p class="flex text-sm items-center gap-3"><i class="pi pi-envelope"></i>Email Us: <span class="font-semibold">{{ websiteInfo[0]?.email }}</span> </p></a>
        </div>
        <div>
          <ul class="flex gap-3 justify-center">
                        <li v-for="social in socials" :key="social.id" class="rounded-full w-6 h-6 bg-white hover:bg-secondary transition duration-700 ease-in-out">
                          <a class="text-center" :href="social?.email ? 'mailto:' + social?.email : social?.path" target="_blank">
                              <span v-html="social.icon"></span>
                          </a>
                       </li>
              </ul>
        </div>
    </div>
</div>

<nav id="mainNavbar" :class="{ 'top-0': isTop, 'scrolled': isScrolled }" class="bg-[#F7EBEC] shadow-md z-[99] w-full">
  <div class="max-w-7xl mx-auto px-6 flex  items-center justify-between ">
    <div class="flex items-center justify-between w-full py-2">
      <div class="lg:w-[180px] sm:w-[100px] w-[80px]">
        <RouterLink to="/" class="flex items-center">
          <img :src="websiteInfo[0]?.logoImg" class="h-full w-full mr-3" alt="Logo">
        </RouterLink>
      </div>

      <div class="hidden lg:flex w-full justify-end" id="navbar-sticky">
        <ul
          class="flex lg:gap-8 lg:items-center flex-col lg:flex-row md:mt-0 p-4 md:p-0 mt-4 font-semibold text-black border border-gray-100 rounded-lg md:border-0">
          <li v-for="menu in menuItems" :key="menu.id">
            <RouterLink class="my-3 pb-2 menu-item lg:my-0" :to="menu.path">{{ menu.name }}</RouterLink>
          </li>
          <li class="">
            <a class="cursor-pointer mx-auto px-5 py-2 block w-full rounded-full bg-primary hover:bg-secondary transition duration-700 ease-in-out text-white mt-5 lg:mt-0"
            onclick="orderOnlineModal.showModal()">
              Order Online
            </a>
          </li>

        </ul>
      </div>
    </div>


    <div class="drawer justify-end lg:hidden flex z-50">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <!-- Page content here -->
        <button class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg"
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
        <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <!-- Sidebar content here -->
          <div class="w-[150px] mx-auto">
            <RouterLink to="/" class="flex items-center">
              <img :src="websiteInfo[0]?.logoImg" class="h-full w-full mr-3" alt="Logo">
            </RouterLink>
          </div>
          <div class="border-b my-3"></div>
          <li v-for="menu in menuItems" :key="menu.id">
            <RouterLink class="my-1" :to="menu.path">{{menu.name}}</RouterLink>
          </li>


          <li class="">
            <a onclick="orderOnlineModal.showModal()"
              class="w-full block text-center rounded-full bg-primary hover:bg-secondary transition duration-700 ease-in-out text-white hover:text-white mt-5 lg:mt-0">
              <button>
                Order Online
              </button>
            </a>
          </li>

        </ul>
      </div>
    </div>

  </div>
</nav>
</div>

<OrderOnlineModal modal="orderOnlineModal" />
</template>
<script>
import { ref, watchEffect } from 'vue';
// import logoimg from "../assets/images/logo.png"
import { RouterLink } from "vue-router";
import OrderOnlineModal from "../OrderOnlineModal.vue";
import {useWebsiteInfoStore} from '../../stores/websiteInfoStore'

export default {
    name: "Header",
    data() {
        return {
            isTop: true,
            isScrolled: false,
            // logo: logoimg,
            menuItems: [
                {
                    id: 1,
                    name: "Home",
                    path: "/"
                },
                {
                    id: 2,
                    name: "Company Profile",
                    path: "/company-profile"
                },
                {
                    id: 3,
                    name: "Products",
                    path: "/products"
                },
                {
                    id: 4,
                    name: "Blog",
                    path: "/blogs"
                },
                {
                    id: 1,
                    name: "Career",
                    path: "/career"
                },
            ]
        };
    },
    mounted() {
        // Add scroll event listener
      window.addEventListener('scroll', this.handleScroll);
        // console.log(this.websiteInfo)
    },
    destroyed() {
        // Remove scroll event listener when component is destroyed
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            // Check scroll position and update data properties accordingly
            this.isTop = window.scrollY === 0;
            this.isScrolled = window.scrollY > 0;
        }
  },

  components: { OrderOnlineModal },


  setup() {
    const websiteInfoStore = useWebsiteInfoStore();
    websiteInfoStore.fetchWebsiteInfo();
    const email = ref(null);
    const facebook = ref(null);
    const twitter = ref(null);
    const linkedin = ref(null);

  // Wait for the action to complete
    const websiteInfo = ref(null);

    
    const socials = ref([
      {
        id: 1,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 p-1 fill-primary hover:fill-white transition duration-700 ease-in-out" viewBox="0 0 320 512">
                            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                          </svg>`,
        path: facebook
      },
      {
        id: 2,
        icon: `  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 p-1 fill-primary hover:fill-white transition duration-700 ease-in-out" viewBox="0 0 512 512">
                            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                          </svg>`,
        path: twitter
      },
      {
        id: 3,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 p-1 fill-primary hover:fill-white transition duration-700 ease-in-out" viewBox="0 0 448 512">
                            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
                          </svg>`,
        path: linkedin
      },
      {
        id: 4,
        icon: ` <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 p-1 fill-primary hover:fill-white transition duration-700 ease-in-out" viewBox="0 0 640 512">
                            <path d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z"/>
                          </svg>`,
        email: email

      },
    ]);

  watchEffect(() => {
    websiteInfo.value = websiteInfoStore.websiteInfos;
    // console.log('websiteInfo:', websiteInfo.value[0]);
      email.value = websiteInfo.value[0]?.email;
      facebook.value = websiteInfo.value[0]?.facebook;
      twitter.value = websiteInfo.value[0]?.twitter;
      linkedin.value = websiteInfo.value[0]?.linkedin;
  });

  return {
    websiteInfo,
    facebook,
    twitter,
    linkedin,
    email,
    socials
  };
  },
};
</script>
<style scoped>
  /* Your styles for the navbar go here */
.top-0 {
  margin-top: 0;
}

.scrolled {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100; 
  background-color: #F7EBEC !important; /* You may need to adjust this color */
  transition: background-color 0.5s ease-in-out;
}
</style>