<template>

    <section class="relative hidden md:flex">
      <img :src="bannerImage" alt="">
      <div class="absolute inset-0 bg-black opacity-30"></div>
      <h1 class="md:max-w-7xl w-full mx-auto px-6 text-center absolute inset-0 flex flex-col items-center justify-center  md:text-2xl lg:text-3xl xl:text-5xl font-semibold text-white">{{ bannerTitle }}</h1>
    </section>
  <!-- nav-bar end -->

  <div class="max-w-7xl mx-auto pt-5 px-6 md:hidden block text-center">
    <h1 class="text-xl font-semibold border border-dashed px-5 py-3 border-black inline-block mx-auto">{{ bannerTitle }}</h1>
  </div>


</template>
<script>
import bannerImg from "../assets/images/Product-BANNER.jpg"
export default {
  props: {
    bannerTitle: {
      type: String,
      required: true
    }
  },
  name: "BannerSlot",

  data() {
    return {
      bannerImage: bannerImg
    }
  }
}
</script>
<style>
  
</style>