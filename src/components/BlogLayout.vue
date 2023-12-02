<template lang="">
    <div class="">
        <div class="mx-auto max-w-7xl px-6 py-10">
            <div class="grid lg:grid-cols-3 md:grid-cols-2 md:gap-20 gap-10">
              <div class="lg:col-span-2 col-span-1 gap-8">
               <slot></slot>
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
import adsImg from '../assets/images/promotion.jpg';
import { mapState } from 'pinia'
import { useBlogStore } from '../stores/blogStore';


export default {
  name: "BlogLayout",


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
    }

</script>
<style lang="">
  
</style>