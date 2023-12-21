<template>
  <Bannerslot :bannerTitle="currentBlog.title"/>      
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
import BlogLayout from './layouts/BlogLayout.vue';
import { useBlogStore } from '../stores/blogStore';
import Bannerslot from './BannerSlot.vue';

export default {
  name: "BlogDetails",
  
    components: { BlogLayout, Bannerslot },

  data() {
    return {
        currentBlog: {}
      }
    },
    
    watch: {
    $route(to, from) {
      // Check if the title in the route parameters has changed
      if (to.params.title !== from.params.title) {
        this.updateCurrentBlog();
      }
    },
  },

  mounted() {
    // Initial setup
    this.updateCurrentBlog();
  },

  methods: {
    updateCurrentBlog() {
      const title = this.$route.params.title;
      console.log(title);

      // Assuming the title is a unique identifier for the blog
      this.currentBlog = this.blogs.find(blog => blog.title.replace(/ /g, '-') === title);
    },
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