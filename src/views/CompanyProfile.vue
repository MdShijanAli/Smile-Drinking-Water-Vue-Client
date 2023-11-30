<template>
  <BannerSlot bannerTitle="Company Profile"></BannerSlot>

  <div>
      <div class="max-w-7xl mx-auto px-6 py-20 sm:grid sm:grid-cols-2 items-center flex flex-col-reverse gap-20">
        <div class="">
          <h1 class="lg:text-h1 sm:text-2xl text-xl font-semibold">{{ icons.title }}</h1>
              <div class="mt-10">
                <div v-for="icon in icons.data" :key="icon.id" class="grid grid-flow-col justify-start gap-5 items-center my-5">
                  <p class="bg-primary hover:bg-secondary md:w-12 w-8 h-8 md:h-12 flex items-center justify-center rounded-full">
                   <span v-html="icon.icon"></span>
                  </p>
                  <p class="text-h6 md:text-h5 break-words">{{ icon.title }}</p>
                </div>
       
            <!--     <div class="grid grid-flow-col justify-start gap-5 items-center my-5">
                  <p class="bg-primary hover:bg-secondary md:w-12 w-8 h-8 md:h-12 flex items-center justify-center rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="md:w-6 w-4 h-4 md:h-6 fill-white" viewBox="0 0 448 512">
                      <path
                        d="M333.2 322.8l0 0-133.9-146 0 0L146 118.6c7.8-5.1 37-22.6 78-22.6s70.2 17.4 78 22.6L245.7 180l85.6 93.4 27.4-29.8c16.3-17.7 25.3-40.9 25.3-65V149.1c0-19-5.6-37.5-16.1-53.3L327.8 35.6C312.9 13.4 287.9 0 261.2 0h-76c-25.8 0-50.1 12.5-65.1 33.5L81.9 87C70.3 103.2 64 122.8 64 142.8V164c0 23.2 8.4 45.6 23.6 63.1l56 64.2 0 0 83.3 95.6 0 0 91.8 105.3c10 11.5 26.8 14.3 40 6.8l54.5-31.1c17.8-10.2 21.6-34.3 7.7-49.4l-87.7-95.7zM205.2 410.6l-83.3-95.6L27.1 418.5c-13.9 15.1-10.1 39.2 7.7 49.4l55.1 31.5c13 7.4 29.3 4.9 39.4-6.1l75.9-82.6z" />
                    </svg>
                  </p>
                  <p class="text-h6 md:text-h5 break-words">Favorite water brand in UAE</p>
                </div>
        
                <div class="grid grid-flow-col justify-start gap-5 items-center my-5">
                  <p class="bg-primary hover:bg-secondary md:w-12 w-8 h-8 md:h-12 flex items-center justify-center rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="md:w-6 w-4 h-4 md:h-6 fill-white" viewBox="0 0 448 512">
                      <path
                        d="M320 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM125.7 175.5c9.9-9.9 23.4-15.5 37.5-15.5c1.9 0 3.8 .1 5.6 .3L137.6 254c-9.3 28 1.7 58.8 26.8 74.5l86.2 53.9-25.4 88.8c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l28.7-100.4c5.9-20.6-2.6-42.6-20.7-53.9L238 299l30.9-82.4 5.1 12.3C289 264.7 323.9 288 362.7 288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H362.7c-12.9 0-24.6-7.8-29.5-19.7l-6.3-15c-14.6-35.1-44.1-61.9-80.5-73.1l-48.7-15c-11.1-3.4-22.7-5.2-34.4-5.2c-31 0-60.8 12.3-82.7 34.3L57.4 153.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l23.1-23.1zM91.2 352H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h69.6c19 0 36.2-11.2 43.9-28.5L157 361.6l-9.5-6c-17.5-10.9-30.5-26.8-37.9-44.9L91.2 352z" />
                    </svg>
                  </p>
                  <p class="text-h6 md:text-h5 break-words">Widely engages & promotes physical activity, sports, fitness, health & wellness</p>
                </div> -->
              </div>
      

        </div>
        <div class="relative">
          <img class="md:w-28 w-16 h-16 md:h-28 absolute top-0 left-0 animate-up-down" :src="images.image1" alt="">
          <img :src="images.image2" alt="Img">
        </div>
      </div>
    </div>


</template>
<script>
import BannerSlot from '../components/BannerSlot.vue'
import img1 from "../assets/images/Favorite-UAE.png"
import img2 from "../assets/images/product-bottle.png"
export default {
  name: "CompanyProfile",

  components: {BannerSlot},
 
    data() {
    return {
      images: {
        image1: img1,
          image2: img2
      },
      icons: {
        title: "LARGEST BOTTLED WATER COMPANY IN UAE",
        data: [
          {
              id: 1,
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="md:w-6 w-4 h-4 md:h-6 fill-white" viewBox="0 0 512 512">
                      <path
                        d="M211 7.3C205 1 196-1.4 187.6 .8s-14.9 8.9-17.1 17.3L154.7 80.6l-62-17.5c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l17.5 62L18.1 170.6c-8.4 2.1-15 8.7-17.3 17.1S1 205 7.3 211l46.2 45L7.3 301C1 307-1.4 316 .8 324.4s8.9 14.9 17.3 17.1l62.5 15.8-17.5 62c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l62-17.5 15.8 62.5c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l45-46.2 45 46.2c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3l15.8-62.5 62 17.5c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-17.5-62 62.5-15.8c8.4-2.1 15-8.7 17.3-17.1s-.2-17.3-6.4-23.4l-46.2-45 46.2-45c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-62.5-15.8 17.5-62c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1l-62 17.5L341.4 18.1c-2.1-8.4-8.7-15-17.1-17.3S307 1 301 7.3L256 53.5 211 7.3z" />
                    </svg>`,
              title: "Certified by Major Institutions like NSF, IBWA, ESMA"
            },
          {
              id: 2,
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="md:w-6 w-4 h-4 md:h-6 fill-white" viewBox="0 0 448 512">
                      <path
                        d="M333.2 322.8l0 0-133.9-146 0 0L146 118.6c7.8-5.1 37-22.6 78-22.6s70.2 17.4 78 22.6L245.7 180l85.6 93.4 27.4-29.8c16.3-17.7 25.3-40.9 25.3-65V149.1c0-19-5.6-37.5-16.1-53.3L327.8 35.6C312.9 13.4 287.9 0 261.2 0h-76c-25.8 0-50.1 12.5-65.1 33.5L81.9 87C70.3 103.2 64 122.8 64 142.8V164c0 23.2 8.4 45.6 23.6 63.1l56 64.2 0 0 83.3 95.6 0 0 91.8 105.3c10 11.5 26.8 14.3 40 6.8l54.5-31.1c17.8-10.2 21.6-34.3 7.7-49.4l-87.7-95.7zM205.2 410.6l-83.3-95.6L27.1 418.5c-13.9 15.1-10.1 39.2 7.7 49.4l55.1 31.5c13 7.4 29.3 4.9 39.4-6.1l75.9-82.6z" />
                    </svg>`,
              title: "Favorite water brand in UAE"
            },
          {
              id: 3,
              icon: `<svg xmlns="http://www.w3.org/2000/svg" class="md:w-6 w-4 h-4 md:h-6 fill-white" viewBox="0 0 448 512">
                      <path
                        d="M320 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM125.7 175.5c9.9-9.9 23.4-15.5 37.5-15.5c1.9 0 3.8 .1 5.6 .3L137.6 254c-9.3 28 1.7 58.8 26.8 74.5l86.2 53.9-25.4 88.8c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l28.7-100.4c5.9-20.6-2.6-42.6-20.7-53.9L238 299l30.9-82.4 5.1 12.3C289 264.7 323.9 288 362.7 288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H362.7c-12.9 0-24.6-7.8-29.5-19.7l-6.3-15c-14.6-35.1-44.1-61.9-80.5-73.1l-48.7-15c-11.1-3.4-22.7-5.2-34.4-5.2c-31 0-60.8 12.3-82.7 34.3L57.4 153.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l23.1-23.1zM91.2 352H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h69.6c19 0 36.2-11.2 43.9-28.5L157 361.6l-9.5-6c-17.5-10.9-30.5-26.8-37.9-44.9L91.2 352z" />
                    </svg>`,
              title: "Widely engages & promotes physical activity, sports, fitness, health & wellness"
            },
          ]
        }
    }
  }
}
</script>
<style scoped>
  h1.lg\:text-h1.sm\:text-2xl.text-xl.font-semibold{
    line-height: 40px;
  }

  @media (max-width:499px){
    h1.lg\:text-h1.sm\:text-2xl.text-xl.font-semibold{
    line-height: 30px;
  }
  }
</style>