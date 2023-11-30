<template>
  <BannerSlot bannerTitle="Blogs"></BannerSlot>


  <div class="">
        <div class="mx-auto max-w-7xl px-6 py-10">
            <div class="grid lg:grid-cols-3 md:grid-cols-2 md:gap-20 gap-10">
                <div class="lg:col-span-2 col-span-1 gap-8">
                   <div class="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-8">
                    <div v-for="blog in blogs" :key="blog.id" class="border shad rounded-sm">
                <RouterLink :to="{ name: 'blog-details', params: { title: blog.title.replace(/ /g, '-') } }">
                  <div class="overflow-hidden md:h-[350px] h-[150px] w-full">
                  <img class="bg-cover w-full h-full bg-center hover:scale-110 transition duration-700 ease-in-out" :src="blog.img" alt="">
                </div>
                </RouterLink>
                <div class="p-5">
                  <p class="sm:text-sm text-xs text-[#777] font-medium">{{blog.date}}</p>
                  <RouterLink :to="{ name: 'blog-details', params: { title: blog.title.replace(/ /g, '-') } }">
                    <h1 class="lg:text-h2 text-md font-semibold hover:text-secondary transition duration-500 ease-in-out">{{blog.title}}</h1>
                  </RouterLink>
                  <p class="mt-3 sm:text-sm text-xs text-justify">{{blog.description.slice(0,100)}}... <RouterLink class="text-secondary" :to="{ name: 'blog-details', params: { title: blog.title.replace(/ /g, '-') } }">Read More</RouterLink></p>
                </div>
             </div>
                   </div>

                   
            <!-- Pagination -->
<nav class="flex items-center -space-x-px mt-20 justify-center">
  <button type="button" class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
    <svg class="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
    <span class="hidden sm:block">Previous</span>
  </button>
  <button type="button" class="min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-200 text-gray-800 border border-gray-200 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-600 dark:border-gray-700 dark:text-white dark:focus:bg-gray-500" aria-current="page">1</button>
  <button type="button" class="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">2</button>
  <button type="button" class="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">3</button>
  <button type="button" class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
    <span class="hidden sm:block">Next</span>
    <svg class="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
  </button>
</nav>
<!-- End Pagination -->
                </div>
                <div class="col-span-1">
                  <h1 class="lg:text-h1 text-2xl font-semibold">Latest Posts</h1>
                 <div class="mt-5">
                  <div  v-for="blog in blogs" :key="blog.id">
                    <div class="grid grid-cols-4 items-center gap-5 lg:py-5 py-3 border-b">
                      <div class="lg:w-14 lg:h-14 h-10 w-10 col-span-1">
                        <img class="w-full h-full rounded-full" :src="blog.img" alt="">
                      </div>
                      <div class="col-span-3">
                          <p class="sm:text-sm text-xs text-[#777] font-medium">{{blog.date}}</p>
                          <RouterLink :to="{name: 'blog-details', params: {title: blog.title.replace(/ /g, '-') } }">
                            <h1 class="lg:text-xl text-md font-semibold hover:text-secondary transition duration-500 ease-in-out">{{blog.title}}</h1>
                          </RouterLink>
                      </div>
                    </div>
              </div>
                 </div>


                  <div class="mt-10 relative">
                    <img class="w-full h-auto" :src="img" alt="">

                    <div class="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity duration-300"></div>
                  </div>
                </div>
            </div>



        </div>
      </div>
   

</template>
<script>
import {RouterLink} from "vue-router"
import { mapState } from 'pinia'
import BannerSlot from "../components/BannerSlot.vue"
import { useBlogStore } from '../stores/blogStore';
import adsImg from '../assets/images/promotion.jpg';

export default{
  components: { BannerSlot },
  name: "Blog",

  data() {
    return {
      img: adsImg
    }
  },

  computed: {
    ...mapState(useBlogStore, {
      blogs: "allBlogs"
    })
  },

};
</script>
<style>
  
</style>