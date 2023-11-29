<template>
     <div>

<div class="p-3 bg-orange-400 text-center">
  <h1 class="font-semibold text-black">This Website is Under Construction</h1>
</div>

<nav id="mainNavbar" class="bg-[#F7EBEC] shadow-md  z-[99] w-full">
  <div class="max-w-7xl mx-auto px-6 flex  items-center justify-between ">
    <div class="flex items-center justify-between w-full py-2">
      <div class="lg:w-[180px] sm:w-[100px] w-[80px]">
        <a href="/" class="flex items-center">
          <img src="../assets/images/logo.png" class="h-full w-full mr-3" alt="Logo">
        </a>
      </div>

      <div class="hidden lg:flex w-full justify-end" id="navbar-sticky">
        <ul
          class="flex lg:gap-8 lg:items-center flex-col lg:flex-row md:mt-0 p-4 md:p-0 mt-4 font-semibold text-black border border-gray-100 rounded-lg md:border-0">
          <li v-for="menu in menuItems" :key="menu.id">
            <RouterLink class="my-3 pb-2 menu-item lg:my-0" :to="menu.path">{{ menu.name }}</RouterLink>
          </li>
          <li class="">
            <a class="cursor-pointer mx-auto px-5 py-2 block w-full rounded-full bg-primary hover:bg-secondary transition duration-700 ease-in-out text-white mt-5 lg:mt-0"
            onclick="my_modal_2.showModal()">
              Order Online
            </a>
          </li>

        </ul>
      </div>
    </div>


    <div class="drawer justify-end lg:hidden flex">
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
            <a href="/" class="flex items-center">
              <img src="./images/logo.png" class="h-full w-full mr-3" alt="Logo">
            </a>
          </div>
          <div class="border-b my-3"></div>
          <li v-for="menu in menuItems" :key="menu.id">
            <RouterLink class="my-1" :to="menu.path">{{menu.name}}</RouterLink>
          </li>
    

          <li class="">
            <a onclick="my_modal_2.showModal()"
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
</template>
<script>
  import { RouterLink } from "vue-router";
export default {
  name: "Header",
  data() {
    return {
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
          path: "/blog"
        },
        {
          id: 1,
          name: "Career",
          path: "/career"
        },
      ]
    }
  }
}
</script>
<style>
  
</style>