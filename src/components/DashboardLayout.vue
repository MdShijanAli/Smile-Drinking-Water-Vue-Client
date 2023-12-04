<template>
  <div>
    <div class="grid grid-cols-5 gap-10">
          <div class="col-span-1 border h-screen">
         

               <div class="avatar p-5 w-full flex justify-center">
                  <div class="w-24 rounded-full ring ring-primary ring-offset-2 block">
                    <img class="mx-auto" src="https://i.ibb.co/4VyRt2p/my-photo.jpg" />
                  </div>
                </div>
                  <div class="pt-5 text-center">
                    <h1 class="text-2xl font-semibold">Md Shijan Ali</h1>
                    <p>Email: shijan135@gmail.com</p>
                  </div>
                  
                  <div class="divider"></div> 

               <div>
                <ul class="f-m-m">
                <li class="">
                  <RouterLink to="/dashboard" tabindex="0"
                    class="focus:outline-none focus:text-secondary-600  xl:text-base md:text-lg text-base py-1 my-1 md:py-1 md:my-2 cursor-pointer hover:bg-primary hover:text-white block px-3">
                    Dashboard</RouterLink>
                </li>
             
                <li class="">
                  <div
                    class="parent_menu focus:outline-none focus:text-secondary-600  xl:text-base md:text-lg text-base px-3 flex items-center justify-between hover:bg-primary hover:text-white py-1 my-1 md:py-1 md:my-2 cursor-pointer">
                    <span>Products</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 md:w-6 md:h-6" width="18" height="18"
                      viewBox="0 0 24 24" stroke-width="1.7" stroke="currentColor" fill="none" stroke-linecap="round"
                      stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M6 9l6 6l6 -6"></path>
                    </svg>
                  </div>
                  <div class="child_menu">
                    <ul class="my-2 text-base md:text-lg">
                      <li><RouterLink to="/all-products"
                          class="py-1 px-2 m-1 hover:bg-primary hover:text-white block rounded">All Products</RouterLink>
                      </li>
                      <li><a href="./pages/products/womens.html"
                          class="py-1 px-2 m-1 hover:bg-primary hover:text-white block rounded">Add Product</a>
                      </li>

                      <li class="">
                  <RouterLink to="/" tabindex="0"
                    class="focus:outline-none focus:text-secondary-600  xl:text-base md:text-lg text-base py-1 my-1 md:py-1 md:my-2 cursor-pointer hover:bg-primary hover:text-white block px-3">
                    Logout</RouterLink>
                </li>
               
                    </ul>
                  </div>
                </li>
           
              </ul>
               </div>
          </div>
          <div class="col-span-4">
            <router-view></router-view>
          </div>
    </div>
  </div>
</template>
<script >



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

}

</script>
<style scoped>

</style>