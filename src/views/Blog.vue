<template>
  <BannerSlot bannerTitle="Blogs"></BannerSlot>

  <BlogLayout>
    <div>
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
  </BlogLayout>

   

</template>
<script>
import { mapState } from 'pinia';
import {RouterLink} from "vue-router"
import BannerSlot from "../components/BannerSlot.vue"
import BlogLayout from '../components/BlogLayout.vue';
import { useBlogStore } from '../stores/blogStore';

export default{
  components: { BannerSlot,BlogLayout },
  name: "Blog",

  computed: {
    ...mapState(useBlogStore, {
      blogs: "allBlogs"
    })
  },

};
</script>
<style>
  
</style>