<template>
  <div>
    <div class="grid md:grid-cols-5">
          <div class="col-span-1 border">
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
                <ul class="flex gap-5 justify-center sm:block">
                <li class="">
                  <RouterLink to="/dashboard" tabindex="0"
                    class="focus:outline-none focus:text-secondary-600  xl:text-base md:text-lg text-base py-1 my-1 md:py-1 md:my-2 cursor-pointer hover:bg-primary hover:text-white block px-3">
                    Dashboard</RouterLink>
                </li>

                  
                      <li><RouterLink to="/all-products"
                          class="focus:outline-none focus:text-secondary-600  xl:text-base md:text-lg text-base py-1 my-1 md:py-1 md:my-2 cursor-pointer hover:bg-primary hover:text-white block px-3">All Products</RouterLink>
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