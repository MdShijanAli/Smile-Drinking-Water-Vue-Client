<template>
<div>
        <div class="max-w-7xl mx-auto px-6 my-10">
          <h1 class="md:text-h1 text-h4 font-bold text-primary text-center mb-10">Our Latest Blogs</h1>
            <div class="grid md:grid-cols-3 sm:grid-cols-2 gap-5">
              <div v-for="blog in blogs.slice(0,3)" :key="blog.id" class="border shad rounded-sm">
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

           
            <div class="text-center mt-10">
              <RouterLink to="/blogs">
                <button class="px-10 py-2 bg-primary hover:bg-secondary transition duration-500 ease-in-out rounded-full text-white font-semibold">See All</button>
              </RouterLink>
            </div>
        </div>
      </div>
</template>
<script>
  import { RouterLink } from "vue-router";
import { mapState } from "pinia"
import {useBlogStore} from "../../stores/blogStore"
export default {
  name: "HomeBlogSection",


  data() {
    return {
      
    }
  },

  computed: {
    ...mapState(useBlogStore, {
      blogs: 'allBlogs',
    })
    
  },

}
</script>
<style>
  
</style>