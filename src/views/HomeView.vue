<template>
  <div>
    <HomeSliderSection />
    <HomeProductsSection />
  </div>
</template>
<script>
import HomeProductsSection from '../components/HomeProductsSection.vue';
import HomeSliderSection from '../components/HomeSliderSection.vue';

export default {
    name: "HomeView",
    data() {
        return {
            msg: "Home Page"
        };
    },
    components: { HomeSliderSection, HomeProductsSection }
}
</script>
<style>
  
</style>