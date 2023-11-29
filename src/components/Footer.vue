<template>
  <div>
        <div class="bg-footerBG">
          <div class="max-w-7xl mx-auto px-6 py-10">
               <div class="grid md:grid-cols-4 sm:grid-cols-2 md:gap-10 gap-5">
                   <div class="text-center">
                    <img class="w-[150px] md:w-[200px] mx-auto" src="../assets/images/logo-white.png" alt="">
                    <div class="mt-5">
                      <ul class="flex gap-3 justify-center">
                        <li v-for="social in socials" :key="social.id" class="rounded-full bg-white hover:bg-secondary transition duration-700 ease-in-out">
                          <a class="text-center" :href="social.path" target="_blank">
                            <span v-html="social.icon"></span>
                        </a>
                       </li>
                      </ul>
                    </div>
                   </div>
                   <div class="mt-5 md:mt-0">
                    <h6 class="text-h6 font-semibold text-white  uppercase">{{ footerContactInfo.title }}</h6>
                    <div class="pt-5">
                      <div v-for="footerInfo in footerContactInfo.data" :key="footerInfo.id" class="grid grid-flow-col justify-start gap-5 items-center mb-5">
                        <span v-html="footerInfo?.icon"></span>
                        <p v-if="footerInfo.path" class="text-[11px] text-footerText hover:text-secondary transition duration-500 ease-in-out font-medium">
                          <a :href="footerInfo.path" >
                          {{footerInfo?.title}}: {{footerInfo.value}}
                          </a>
                        </p>
                        <p v-else class="text-[11px] text-footerText hover:text-secondary transition duration-500 ease-in-out font-medium">
                          <span v-if="footerInfo.title">{{footerInfo?.title}}: </span> {{footerInfo.value}}</p>
                      </div>
                    </div>
                   </div>
                   <div class=" md:order-3 sm:order-4">
                    <h6 class="text-h6 font-semibold text-white uppercase">{{ legals.title }}</h6>
                    <div class="mt-5">
                      <ul>
                        <li v-for="legal in legals.data" :key="legal.id" class="my-3"><RouterLink class="text-p font-medium text-footerText hover:text-secondary transition duration-500 ease-in-out" :to="legal.path">{{ legal.name }}</RouterLink></li>
                      </ul>
                    </div>
                   </div>
                   <div class="text-center md:text-left ms:order-4 sm:order-3">
                    <h6 class="text-h6 font-semibold text-white uppercase">Mail Us</h6>
                    <div class="mt-5">
                      <form action="">
                        <input required type="text" placeholder="Name" class="input-sm input-bordered focus:outline-primary w-full" />
                        <input required type="email" placeholder="Email" class="input-sm input-bordered focus:outline-primary w-full mt-1" />
                        <input type="phone" placeholder="Phone Number" class="input-sm input-bordered focus:outline-primary w-full mt-1" />
                        <textarea required class="textarea-md mt-1 focus:outline-primary w-full" placeholder="Message"></textarea>
                        <button class="mt-2 py-2 w-full bg-secondary hover:bg-secondary/50 transition duration-700 ease-in-out rounded-md text-white">Submit</button>
                      </form>
                    </div>
                   </div>
               </div>
          </div>
        </div>
        <div class=" bg-footerBottom">
          <div class="max-w-7xl px-6 mx-auto py-5 text-white">
            <p class="text-p text-gray-200 hover:text-white text-center">© Copyright <span id="currentYear"></span>
              ROMANA GENERAL TRADING LLC. | All Rights Reserved | Powered by <a href="https://www.zealtechbd.com/" target="_blank"
                class="hover:text-secondary font-semibold">ZealtechBD.</a></p>
          </div>
        </div>
      </div>
</template>
<script>
export default {
  name: "Footer",

  data() {
    return {
      legals: {
        title: "Legals",
        data: [
        {
          id: 1,
          name: "Terms & Conditions",
          path: '/tearms-condition'
        },
        {
          id: 2,
          name: "Privacy Policy",
          path: '/privacy-policy'
        },
        {
          id: 3,
          name: "Return & Refund",
          path: '/return-refund'
        },
      ],
      },
      socials: [
        {
          id: 1,
          icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 p-2.5 fill-primary hover:fill-white transition duration-700 ease-in-out" viewBox="0 0 320 512">
                            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                          </svg>`,
          path: "https://www.facebook.com/zealtechbd/"
        },
        {
          id: 2,
          icon: `  <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 p-2.5 fill-primary hover:fill-white transition duration-700 ease-in-out" viewBox="0 0 512 512">
                            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                          </svg>`,
          path: "https://twitter.com/ZealtechBD"
        },
        {
          id: 3,
          icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 p-2.5 fill-primary hover:fill-white transition duration-700 ease-in-out" viewBox="0 0 448 512">
                            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
                          </svg>`,
          path: "https://www.linkedin.com/company/zealteh-bd"
        },
        {
          id: 4,
          icon: ` <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 p-2.5 fill-primary hover:fill-white transition duration-700 ease-in-out" viewBox="0 0 640 512">
                            <path d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z"/>
                          </svg>`,
          path: "#"
        },
      ],
      footerContactInfo: {
        title: "NEW ROMANA GENERAL TRADING LLC",
        data: [
          {
            id: 1,
            value: "Iliya Tower 2, Suite 205 & 206, Industrial Area 3, Damascus Street, Opposite EPPCO Petrol Pump, Al Qusais, Dubai, UAE",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-footerText hover:fill-secondary transition duration-500 ease-in-out" viewBox="0 0 576 512">
                          <path
                            d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c.2 35.5-28.5 64.3-64 64.3H128.1c-35.3 0-64-28.7-64-64V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L416 100.7V64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V185l52.8 46.4c8 7 12 15 11 24zM248 192c-13.3 0-24 10.7-24 24v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V216c0-13.3-10.7-24-24-24H248z" />
                        </svg>`

          },
          {
            id: 2,
            title: "Toll Free",
            value: "800 766 262",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-footerText hover:fill-secondary transition duration-500 ease-in-out" viewBox="0 0 576 512">
                          <path
                            d="M80 0C44.7 0 16 28.7 16 64V448c0 35.3 28.7 64 64 64H304c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80zm80 432h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                        </svg>`,
            path: "tel:800766262"

          },
          {
            id: 3,
            title: "Phone",
            value: "042511160",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-footerText hover:fill-secondary transition duration-500 ease-in-out" viewBox="0 0 576 512">
                          <path
                            d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                        </svg>`,
            path: "tel:800766262"

          },
          {
            id: 4,
            title: "Email",
            value: "info@romanawater.com",
            icon: ` <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 fill-footerText hover:fill-secondary transition duration-500 ease-in-out" viewBox="0 0 576 512">
                          <path
                            d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                        </svg>`,

            path: "mailto:info@romanwater.com"

          },
        ]
      }
    }
  }
}
</script>
<style>
  
</style>