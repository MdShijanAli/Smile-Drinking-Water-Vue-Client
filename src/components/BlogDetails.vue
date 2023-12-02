<template>
    <BlogLayout>
      <div>
       <div class="w-full h-[500px]">
        <img class="w-full h-full bg-cover" :src="currentBlog.img" alt="">
       </div>

        <div class="mt-5">
          <div class="flex gap-5 items-start">
            <p class="bg-gray-300 px-2 rounded-xl">Date: {{ currentBlog.date }}</p>
            <p class="bg-gray-300 px-2 rounded-xl">Author: <span class="font-semibold">Md SHijan Ali</span></p>
          </div>
          <div class="mt-10">
            <h1 class="text-h1 font-semibold">{{ currentBlog.title }}</h1>
          <p class="py-5">{{currentBlog.description}}</p>
          </div>
        </div>
      </div>
    </BlogLayout>
</template>
<script>
import { mapState } from 'pinia';
import BlogLayout from './BlogLayout.vue';
import { useBlogStore } from '../stores/blogStore';

export default {
  name: "BlogDetails",
  props: ['blogDetails'],
    components: { BlogLayout },

  data() {
    return {
        currentBlog: {}
      }
    },
    
    mounted() {
        const title = this.$route.params.title;
        
        this.currentBlog = this.blogs.find(blog => blog.title.replace(/ /g, '-') === title);
        console.log(this.currentBlog)
  },

  computed: {
    ...mapState(useBlogStore, {
      blogs: 'allBlogs'
    })

    
  },



}
</script>
<style>
  
</style>