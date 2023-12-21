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
                </div>

  </BlogLayout>

   

</template>
<script>
import { mapState } from 'pinia';
import {RouterLink} from "vue-router"
import BannerSlot from "../components/BannerSlot.vue"
import BlogLayout from '../components/layouts/BlogLayout.vue';
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